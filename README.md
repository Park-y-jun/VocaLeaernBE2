# VocaLeaern (단어암기 프로그램)
## 프로젝트 구성
1. Node.js
2. Express.js
3. Typescript
4. Mongoose
5. Mongodb
6. JWT
## 프로젝트 소개
VocaLearner = Vocabulary + Learn + er</br>
즉 단어 공부를 하는 도구라는 뜻이다. 일본어 전공자였던 본인이 "어떻게 하면 일본어 단어를 단순히 공책에 쓰는 방식이 아닌 쉽고 간편하게 규칙적인 암기를 할 수 있을까?" 라는 고민에서 시작된 프로젝트이다.</br>
단어들을 목적에 맞게 리스트에 모아두고, 암기 이해도에 따라서 등장하는 빈도수를 조절해주는 패턴으로 이루어져있다.
## 객체
![VCL 객체](https://github.com/Park-y-jun/VocaLearnerBE2/assets/112556759/2c3b70c1-183f-4ba0-8fb4-127fad1a977a)
## API 문서
🔗 [문서 링크](https://honored-hare-249.notion.site/VocaLeaner-API-c722386c83eb4ea582df6697ea32c012?pvs=4)
## 실행조건
Node.js 버전 : 18.13.0<br>
npm (Node Package Manager)<br>
MongoDB Atlas


### 설치 방법
1. Node.js 설치
- Node.js 공식 웹사이트에서 최신 버전의 Node.js를 다운로드하여 설치합니다.
- 설치 완료 후, 터미널에서 node --version 명령어를 실행하여 설치된 Node.js의 버전을 확인합니다.

2. npm 설치
- Node.js를 설치하면 함께 npm도 설치됩니다.
- 터미널에서 npm --version 명령어를 실행하여 설치된 npm의 버전을 확인합니다.

3. MongoDB Atlas 데이터베이스 생성 
- [MongoDB Atlas 링크](https://www.mongodb.com/ko-kr/cloud/atlas/efficiency)에 접속하여서 데이터베이스 생성 합니다.

4. 프로젝트 클론

```
 $ git clone https://github.com/Park-y-jun/VocaLearnerBE2.git
```
- git hub의 clone 버튼을 눌러 레포지토리를 클론하고 터미널에서 위의 명령어를 실행합니다.

5. 의존성 설치
```
  $ npm install
```
- 프로젝트 폴더로 이동한 후 프로젝트에 필요한 의존성을 설치합니다. (로컬 디렉토리의 package.json에서 확인 가능)
  
6. 환경변수  
- env.example 파일 참조

7. 프로젝트 실행
```
  $ npm start
```
  
8.  API 테스트
- 설치가 완료된 후  API 테스트를 진행합니다. API 문서를 참고하여 각 API의 요청과 응답을 테스트합니다.
## 디렉토리 구조
```
src
 ┣ controllers
 ┃ ┣ listController.ts
 ┃ ┣ userController.ts
 ┃ ┗ wordController.ts
 ┣ database
 ┃ ┣ repositories
 ┃ ┃ ┣ listRepository.ts
 ┃ ┃ ┣ userRepository.ts
 ┃ ┃ ┗ wordRepository.ts
 ┃ ┗ connect.ts
 ┣ models
 ┃ ┣ List.ts
 ┃ ┣ User.ts
 ┃ ┗ Word.ts
 ┣ routes
 ┃ ┣ listRoute.ts
 ┃ ┣ userRoute.ts
 ┃ ┗ wordRoute.ts
 ┣ services
 ┃ ┣ listService.ts
 ┃ ┣ userService.ts
 ┃ ┗ wordService.ts
 ┣ utils
 ┃ ┣ errors
 ┃ ┃ ┣ error.ts
 ┃ ┃ ┗ errorHandler.ts
 ┃ ┗ verifyToken.ts
 ┗ app.ts
```
![VCL 영역](https://github.com/Park-y-jun/VocaLearnerBE2/assets/112556759/6646e235-d9bf-4462-ace8-48b6abc19803)
