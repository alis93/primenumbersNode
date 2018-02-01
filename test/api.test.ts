const request = require("supertest");
// import * as request from "supertest";
import {server} from "../src/server";

beforeEach(() => {

});

afterEach(() => {
    server.close();
});


describe("GET /api/test", () => {
    it("should return the expected response", async () => {
        const response = await request(server).get("/api/test");
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("The api works");
    });
});