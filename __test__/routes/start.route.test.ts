import mongoose from 'mongoose';
import request from 'supertest';

// Server
import Server from '../../src/servers/server';

const server = new Server();

describe('Testing start route', () => {
    
    test('should respond with a 200 status code', async() => {
        const response = await request(server.app).get('/health').send();
        expect(response.statusCode).toBe(200);
    });

    afterAll((done) => {
        mongoose.disconnect(done);
    });
});
