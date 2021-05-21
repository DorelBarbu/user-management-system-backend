import app from '../src/app';
import request from 'supertest';

describe("Test the requireAuth middleware", () => {
  test("Should return unauthorized when no token is present", async () => {
    const response = await request(app).get('/auth/verify');
    expect(response.status).toBe(401);
  });

  test("Should return 200 when the token is present", async () => {
    const response = await request(app).get('/auth/verify').set('authorization', 'Bearer 123');
    expect(response.status).toBe(200);
  })
})