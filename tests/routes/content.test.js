"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../src/server"));
const smallSentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
describe('Should test the justify route', () => {
    it('should justify a text content without length', (done) => {
        (0, supertest_1.default)(server_1.default).post('/api/token/create').send({
            "email": "test@tictactrip"
        }).expect(200).end((_, res) => (0, supertest_1.default)(server_1.default).post('/api/content/justify').set('Authorization', res.body.token).send({
            "content": smallSentence
        }).expect(200).end(done));
    });
    it('should justify a text content with a length parameter', (done) => {
        (0, supertest_1.default)(server_1.default).post('/api/token/create').send({
            "email": "test@tictactrip"
        }).expect(200).end((_, res) => (0, supertest_1.default)(server_1.default).post('/api/content/justify').set('Authorization', res.body.token).send({
            "content": smallSentence,
            "length": 15,
        }).expect(200).end(done));
    });
    it('should not justify because the text content is empty', (done) => {
        (0, supertest_1.default)(server_1.default).post('/api/token/create').send({
            "email": "test@tictactrip"
        }).expect(200).end((_, res) => (0, supertest_1.default)(server_1.default).post('/api/content/justify').set('Authorization', res.body.token).send({
            "length": 15,
        }).expect(401).end(done));
    });
    it('should not justify because the payload is empty', (done) => {
        (0, supertest_1.default)(server_1.default).post('/api/token/create').send({
            "email": "test@tictactrip"
        }).expect(200).end((_, res) => (0, supertest_1.default)(server_1.default).post('/api/content/justify').set('Authorization', res.body.token).send({}).expect(401).end(done));
    });
    it('should not justify because the token auth is not set', (done) => {
        (0, supertest_1.default)(server_1.default).post('/api/content/justify').send({
            "content": smallSentence,
            "length": 15,
        }).expect(401).end(done);
    });
    it('should receive an error because the usage per day is already consumed', (done) => {
        process.env.USAGE = "10";
        (0, supertest_1.default)(server_1.default).post('/api/token/create').send({
            "email": "test@tictactrip"
        }).expect(200).end((_, res) => (0, supertest_1.default)(server_1.default).post('/api/content/justify').set('Authorization', res.body.token).send({
            "content": smallSentence
        }).expect(402).end(done));
    });
});
