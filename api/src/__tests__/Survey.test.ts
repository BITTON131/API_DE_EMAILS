import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';

import createConnection from '../database'; 


describe("Surveys", () => {
    beforeAll(async () => {
        const Connection = await createConnection();
        await Connection.runMigrations();
    });

    afterAll(async () => {
      const connection = getConnection();
      await connection.dropDatabase();
      await connection.close();
    });


  it("should be able to create a new Survey", async () => {
    const response = await request(app).post("/Survey")
    .send({
        title: "Title Example",
        description: "description Example",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to get all surveys", async () => {
    await request(app).post("/Survey").send({
        title: "Title Example2",
        description: "description Example2",
    });
    const response = await request(app).get("/Survey");

    expect(response.body.length).toBe(2);
  });
});