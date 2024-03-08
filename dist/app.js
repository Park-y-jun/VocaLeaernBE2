"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv = __importStar(require("dotenv"));
const connect_1 = __importDefault(require("./database/connect"));
const errorHandler_1 = require("./utils/errors/errorHandler");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const listRoute_1 = __importDefault(require("./routes/listRoute"));
const verifyToken_1 = require("./utils/verifyToken");
dotenv.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.APP_PORT || 3000;
        this.url = process.env.Mongo_DB;
        //config
        this.configureMiddleware();
        // 서버열기
        this.connectDB(this.url);
        this.openServer();
        //세팅 라우트
        this.configureRouter();
        //세팅 에러핸들러
        this.configureErrorHandling();
    }
    configureMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("combined"));
    }
    openServer() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    configureRouter() {
        this.app.use("/api/v2/user", userRoute_1.default);
        this.app.use("*", verifyToken_1.verifyToken);
        this.app.use("/api/v2/list", listRoute_1.default);
    }
    configureErrorHandling() {
        this.app.use(errorHandler_1.errorHandler);
    }
    connectDB(url) {
        (0, connect_1.default)(url);
    }
}
new App();
//# sourceMappingURL=app.js.map