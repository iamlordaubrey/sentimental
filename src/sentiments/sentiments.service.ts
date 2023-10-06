import { Dish } from "../dishes/dishes.interface";
import { Review } from "../reviews/reviews.interface";

export const getSentiment = async (reviews: Review[]): Promise<any[]> => {
  let headers: HeadersInit = {
    "content-type": "application/x-www-form-urlencoded",
  }
  let apiURL: string = process.env.SENTIMENT_API || ""

  const useRapidAPI: boolean = JSON.parse(`${process.env.ALTERNATE_API}`)
  if (useRapidAPI) {
    headers = {
      ...headers,
      "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
      "X-RapidAPI-Host": process.env.RAPID_API_HOST || "",
    }
    apiURL = process.env.TWINWORD_TEXT_API || ""
  }

  try {
    const promisesArray = reviews.map(async lineItem => {
      const sentiment = await fetch(apiURL, {
        method: "POST",
        headers,
        body: new URLSearchParams({
          text: `${lineItem.review}`
        })
      });

      return sentiment.json();
    });

    return Promise.all(promisesArray);

  } catch (error) {
    console.log(`Unable to make fetch call: ${error}`)
    throw new Error(`Unable to make fetch call: ${error}`)
  }
}

export const processSentiment = async (dish: Dish): Promise<Dish> => {
  const sentiment = await getSentiment(dish.reviews)

  if (!sentiment) throw new Error('sentiment is undefined')

  // Updates dish review object with sentiment
  dish.reviews.map((review, index) => {
    review.sentiment = sentiment[index]
  })

  return dish
}