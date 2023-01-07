import request from "supertest"
import server from "../../src/server"

describe('Should test the token route', () => {
    it('should create a new token and register a new user in collection', (done) => {
        request(server).post('/api/token/create').send({
            "email": "test@tictactrip"
        }).expect(200).end(done)
    })

    it('should not create a new token without email body', (done) => {
        request(server).post('/api/token/create').send({}).expect(401).end(done)
    })
})