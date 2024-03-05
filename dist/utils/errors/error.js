"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = exports.Forbidden = exports.Unauthorized = exports.BadRequest = exports.HttpError = void 0;
class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.statusCode = statusCode;
    }
}
exports.HttpError = HttpError;
// 클라이언트의 요청이 유효하지 않거나 잘못된 데이터가 포함되어 있음을 나타냅니다.
class BadRequest extends HttpError {
    constructor(description) {
        super("BAD_REQUEST", 400);
        this.description = description;
        this.description = description;
    }
}
exports.BadRequest = BadRequest;
// 요청에 대한 인증이 필요하며, 인증이 실패했거나 제공되지 않았음을 나타냅니다.
class Unauthorized extends HttpError {
    constructor(description) {
        super("UNAUTHORIZED", 401);
        this.description = description;
        this.description = description;
    }
}
exports.Unauthorized = Unauthorized;
// 요청이 서버에서 거부되었으며, 권한이 없거나 접근이 허용되지 않음을 나타냅니다.
class Forbidden extends HttpError {
    constructor(description) {
        super("FORBIDDEN", 403);
        this.description = description;
        this.description = description;
    }
}
exports.Forbidden = Forbidden;
// 요청한 리소스가 서버에서 찾을 수 없음을 나타냅니다.
class NotFound extends HttpError {
    constructor(description) {
        super("NOT_FOUND", 404);
        this.description = description;
        this.description = description;
    }
}
exports.NotFound = NotFound;
