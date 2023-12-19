const request = require('supertest')
const app = require('../app');

describe("Test if frontend server works", () => {
    test("It should respond with statuscode 200", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
});

describe("Test the add path", () => {
    test("It should response the GET method", async () => {
      const response = await request(app).get("/calc/add/1/2");
      expect(response.statusCode).toBe(200);
    });
});

describe("Test the add logic", () => {
    test("It should respond with '7'", async () => {
      const response = await request(app).get("/calc/add/5/2");
      expect(response.body).toBe('7');
    });
});


// het subtract path testen
describe("Test the subtrac path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/calc/subtract/9/5");
    expect(response.statusCode).toBe(200);
  });
})
// de subtract logica testen
describe("Test the subtract logic", () => {
  test("It should respond with '4'", async () => {
    const response = await request(app).get("/calc/subtract/9/5");
    expect(response.body).toBe('4');
  })
})


describe("Test if frontend server works", () => {
    test("It should respond with statuscode 200", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
});

describe("Test the divide path", () => {
    test("It should response the GET method", async () => {
      const response = await request(app).get("/calc/divide/1/2");
      expect(response.statusCode).toBe(200);
    });
});

describe("Test the divide logic", () => {
    test("It should respond with '2'", async () => {
      const response = await request(app).get("/calc/divide/6/3");
      expect(response.body).toBe('2');
    });

describe("Test the multiply path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/calc/multiply/1/2");
describe("Test the power path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/calc/power/1/2");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the multiply logic", () => {
  test("It should respond with '10'", async () => {
    const response = await request(app).get("/calc/multiply/5/2");
    expect(response.body).toBe('10');
describe("Test the power logic", () => {
  test("It should respond with '25'", async () => {
    const response = await request(app).get("/calc/power/5/2");
    expect(response.body).toBe('25');
  });
});

