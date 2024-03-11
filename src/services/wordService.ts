import { Word, ModifyDifficultyParams } from "../models/Word";
import wordRepository from "../database/repositories/wordRepository";
import { BadRequest, Unauthorized, Forbidden, NotFound } from "../utils/errors/error";

class wordService {
  
  async createWord(word: Word) {
    try {
      await wordRepository.createWord(word);
    } catch (error) {
      throw error;
    }
  }

  async findAllWordsByList(listId: string) {
    const list = await wordRepository.findOneAndPopulate(listId);
    if (!list) throw new NotFound("List not found");
    return list.words;
  }

  async modifyDifficulty(params: ModifyDifficultyParams) {
    await wordRepository.modifyDifficulty(params);
  }
}

export default new wordService();
