const request = require('supertest');
const app = require('../../app');

describe('Test the API Test path - /api/v2/students', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/v2/students');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the API path - /api/v2/students/:stuid', () => {
    test('It should response the GET method on exist [stuid = 5730123421]', async () => {
        const response = await request(app).get('/api/v2/students/5730123421');
        expect(response.statusCode).toBe(200);
    });

    test('It should response the GET method on not exist [stuid = 5999999999]', async () => {
        const response = await request(app).get('/api/v2/students/5999999999');
        expect(response.statusCode).toBe(404);
    });
})
/*
describe('Test undergrad creation - /api/v2/students/undergrad', () => {
    test('It should response the PUT method on not exist [stuid = 5738888822]', async () => {
        const response = await request(app).put('/api/v2/students/undergrad').send({
            studentid: 5738888822,
            fNameEn: "Phanumas",
            lNameEn: "Chaiyawan",
            fNameTh: "ภานุมาส",
            lNameTh: "ไชยวรรณ",
            studentEmail: "phanumas.ch@hotmail.com",
            enterYear: 2014,
            advisor: '8901234567',
            nation: "Thai",
            majorFaculty: 22,
            majorDepartment: 1,
            minorFaculty: 22,
            minorDepartment: 7
        });
        expect(response.statusCode).toBe(202);
    });

    test('It should response the PUT method on exist [stuid = 5730123421]', async () => {
        const response = await request(app).put('/api/v2/students/undergrad').send({
            studentid: '5730123421',
            fNameEn: "Phanumas",
            lNameEn: "Chaiyawan",
            fNameTh: "ภานุมาส",
            lNameTh: "ไชยวรรณ",
            studentEmail: "phanumas.ch@hotmail.com",
            enterYear: 2014,
            advisor: '8901234567',
            nation: "Thai",
            majorFaculty: 22,
            majorDepartment: 1,
            minorFaculty: 22,
            minorDepartment: 7
        });
        expect(response.statusCode).toBe(400);
    });
})

describe('Test grad creation - /api/v2/students/grad', () => {
    test('It should response the PUT method on not exist [stuid = 5770123421]', async () => {
        const response = await request(app).put('/api/v2/students/grad/5770123421').send({
            studentid: '5770123421',
            fNameEn: "Kritchakorn",
            lNameEn: "Chaiyawan",
            fNameTh: "กฤชกร",
            lNameTh: "ไชยวรรณ",
            studentEmail: "kritchakorn.ch@hotmail.com",
            enterYear: 2014,
            advisor: '8901234567',
            nation: "Thai",
            majorFaculty: 22,
            majorDepartment: 1,
        });
        expect(response.statusCode).toBe(202);
    });
})
*/
describe('Test the API path - /api/v2/students/:stuid', () => {
    test('It should response the GET method on exist [stuid = 5730123421]', async () => {
        const response = await request(app).get('/api/v2/students/5730123421');
        expect(response.statusCode).toBe(200);
    });

    test('It should response the GET method on not exist [stuid = 5999999999]', async () => {
        const response = await request(app).get('/api/v2/students/5999999999');
        expect(response.statusCode).toBe(404);
    });
})