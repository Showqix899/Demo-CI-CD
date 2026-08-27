import request from "supertest";
import app from "../src/server.js";

describe("GET /", () => {
  test("should return Hello World", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});

describe("GET /health", ()=>{
    test("should return health status" ,async ()=>{
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status:"ok",
        });
    });
});