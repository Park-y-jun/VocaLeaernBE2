import { Word, WordModel, ModifyDifficultyParams } from "../../models/Word";
import { ListModel } from "../../models/List";

class wordRepository {
  async createWord(word: Word) {
    const newWord = new WordModel({
      list: word.list,
      question: word.question,
      answer: word.answer,
    });
    await newWord.save();

    const list = await ListModel.findById(word.list);
    if (list) {
      list.words?.push(newWord._id);
      await list.save();
    }
  }

  async findOneAndPopulate(listId: string) {
   const currentDate = new Date();
   return await ListModel.findOne({ _id: listId }).populate({
     path: "words",
     match: {
       $or: [{ nextReviewDate: { $lte: currentDate } }, { difficulty: "INITIAL" }],
     },
     options: { sort: { nextReviewDate: 1 } },
   });
  }

  async modifyDifficulty(params: ModifyDifficultyParams) {
    let updateData = {};
    let currentTime = new Date();

    if (params.difficulty === "EASY") {
      const easyReviewDate = new Date(currentTime.setDate(currentTime.getDate() + 3));
      updateData = {
        difficulty: "EASY",
        nextReviewDate: easyReviewDate,
      };
    } else if (params.difficulty === "NORMAL") {
      const normalReviewDate = new Date(currentTime.setDate(currentTime.getDate() + 2));
      updateData = {
        difficulty: "NORMAL",
        nextReviewDate: normalReviewDate,
      };
    } else if (params.difficulty === "HARD") {
      const hardReviewDate = new Date(currentTime.setDate(currentTime.getDate() + 1));
      updateData = {
        difficulty: "HARD",
        nextReviewDate: hardReviewDate,
      };
    }

    try {
      const updatedWord = await WordModel.findOneAndUpdate(
        { _id: params.wordID, list: params.listID },
        { $set: updateData },
        { new: true }
      );
      return updatedWord;
    } catch (error) {
      console.error("Error updating the word difficulty: ", error);
      throw error;
    }
  }
}

export default new wordRepository();