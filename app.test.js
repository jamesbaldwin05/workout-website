// Install supertest (to ensure HTTP tests work correctly) and load app for testing
const request = require("supertest");
const app = require("./app");

describe("Test the app", () => {
    // Test API exercise route
    test("GET /api/exercises", () => {
        return request(app)
            .get("/api/exercises")
            .expect(200);
    });

    test("GET /api/exercises returns JSON", () => {
        return request(app)
            .get("/api/exercises")
            .expect("Content-type", /json/);
    });

    // Test API user exercise route
    test("GET /api/userexercises", () => {
        return request(app)
            .get("/api/userexercises")
            .expect(200);
    });

    test("GET /api/userexercises returns JSON", () => {
        return request(app)
            .get("/api/userexercises")
            .expect("Content-type", /json/);
    });

    // Test home route
    test("GET /home", () => {
        return request(app)
            .get("/home")
            .expect(200);
    });
    test("GET /home includes exercise table", () => {
        return request(app)
            .get("/home")
            .expect(/exerciseTable/);
    });

    test("GET /home includes user exercise table", () => {
        return request(app)
            .get("/home")
            .expect(/userExerciseTable/);
    });

    // Test post method for home works as expected
    test("POST /home", () => {
        const params ={"name": "Hammer Curl", "muscle": "Arms", "difficulty": "Medium","equipment": "Dumbbell","image": ""};
        return request(app)
        .post('/home')
        .send(params)
	    .expect(200);

    });
});