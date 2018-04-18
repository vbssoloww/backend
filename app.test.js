const request = require('supertest');
const app = require('./app');

describe('Test the root path - /', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the API Test path - /api/v1/test', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/v1/test');
        expect(response.statusCode).toBe(200);
    });
})


describe('Test the API Test path - /api/v2/test', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/v2/test');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the API Test path - /api/v2/students', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/v2/students');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the API Test path - /api/v2/students/:stuid', () => {
    test('It should response the GET method on exist [stuid = 5730123421]', async () => {
        const response = await request(app).get('/api/v2/students/5730123421');
        expect(response.statusCode).toBe(200);
    });

    test('It should response the GET method on not exist [stuid = 5999999999]', async () => {
        const response = await request(app).get('/api/v2/students/5999999999');
        expect(response.statusCode).toBe(404);
    });
})

describe('Test the API Test path - /api/v2/students/:stuid/fee', () => {
    test('It should response the GET method on exist [stuid = 5730123421]', async () => {
        const response = await request(app).get('/api/v2/students/5730123421/fee');
        expect(response.statusCode).toBe(200);
    });

    test('It should response the GET method on not exist [stuid = 5999999999]', async () => {
        const response = await request(app).get('/api/v2/students/5999999999/fee');
        expect(response.statusCode).toBe(404);
    });
})