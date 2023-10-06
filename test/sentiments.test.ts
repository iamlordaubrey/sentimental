import { rest } from "msw";

import app from "../src/index";
import { server } from "./server";
import { agent as request } from "supertest";
import { apiResponse, resultResponse, testData } from "./mocks";
import { processSentiment } from "../src/sentiments/sentiments.service";

describe("Test review sentiments", () => {
  // Enable request interception.
  afterEach(() => server.resetHandlers())

  afterAll(() => {
      server.close()
      
      // Close supertest server instance after each test
      app.close()
  })

  it("fetches the sentiment of a given text, ", async () => {
    server.use(
        rest.post("https://twinword-twinword-bundle-v1.p.rapidapi.com/sentiment_analyze/", (req, res, ctx) => {
            return res(
                ctx.json(apiResponse),
            )
        }),
    )

    const response  = await request(app)
    .get("/api/sentiments/1")

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined;

  });

  it ("tests merging the API response with the dish object", async () => {
    const dish = await processSentiment(testData)
    expect(dish).toEqual(resultResponse)
  })
})