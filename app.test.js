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

    // Test API comments route
    test("GET /api/comments", () => {
        return request(app)
            .get("/api/comments")
            .expect(200);
    });

    test("GET /api/comments returns JSON", () => {
        return request(app)
            .get("/api/comments")
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

    test("GET /home includes new user exercise button", () => {
        return request(app)
            .get("/home")
            .expect(/userExerciseButton/);
    });

    test("GET /home includes comment section", () => {
        return request(app)
            .get("/home")
            .expect(/commentSection/);
    });

    // Test post method for user exercises works as expected
    test("POST /new-exercise", () => {
        const params = {"name": "Hammer Curl", "muscle": "Arms", "difficulty": "Medium","equipment": "Dumbbell","image": ""};
        return request(app)
        .post('/new-exercise')
        .send(params)
	    .expect(303);
    });

    // Test post method for comments works as expected
    test("POST /comment", () => {
        const params = {"name": "John", "comment": "This came from the jest test"};
        return request(app)
        .post('/comment')
        .send(params)
	    .expect(303);
    });
});