import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

import connect from './database/connect' 
import { errorHandler } from './utils/errors/errorHandler'
import userRoute from './routes/userRoute'
import listRoute from "./routes/listRoute";
import wordRoute from "./routes/wordRoute";
import {verifyToken} from './utils/verifyToken'

dotenv.config();

class App {
  public app: express.Application;
  public port: string | number;
  public url: string;

  constructor() {
    this.app = express();
    this.port = process.env.APP_PORT || 3000;
    this.url = process.env.Mongo_DB as string;
    
    this.configureMiddleware();
  
    this.connectDB(this.url);

    this.openServer()

    this.configureRouter();
 
    this.configureErrorHandling();
  }

  private configureMiddleware() {
    this.app.use(express.json());
    this.app.use(morgan("combined"));
  }

  private openServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  private configureRouter() {
    this.app.use("/api/v2/user", userRoute);
    this.app.use("*", verifyToken);
    this.app.use("/api/v2/list", listRoute);
    this.app.use("/api/v2/word", wordRoute);
  }

  private configureErrorHandling() {
    this.app.use(errorHandler);
  }

  private connectDB(url: string) {
    connect(url)
  }
}

new App();


