import { setupServer } from "msw/node";
import { rest } from "msw";

export const server = setupServer(
  // Describe network behavior with request handlers.
  // Tip: move the handlers into their own module and
  // import it across your browser and Node.js setups!

  // Mock the request to text_analyzer API
  rest.post("https://www.example.com", (req, res, ctx) => {
      return res(
          ctx.json({}),
      )
  }),
)