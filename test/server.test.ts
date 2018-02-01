const request = require("supertest");
import {server} from "../src/server";


beforeEach(() => {

});

afterEach(() => {
    server.close();
});


describe("GET /random-url", () => {
    it("should return 404 not found", async () => {
        const response = await request(server).get("/random");
            expect(response.status).toEqual(404);
            expect(response.text).toEqual("Not Found");
    });
});