"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../src/server"));
describe('Should test the token route', () => {
    it('should create a new token and register a new user in collection', (done) => {
        (0, supertest_1.default)(server_1.default).post('/api/token/create').send({
            "email": "test@tictactrip"
        }).expect(200).end(done);
    });
    it('should not create a new token without email body', (done) => {
        (0, supertest_1.default)(server_1.default).post('/api/token/create').send({}).expect(401).end(done);
    });
});
