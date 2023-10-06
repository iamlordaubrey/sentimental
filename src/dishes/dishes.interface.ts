import { Review } from "../reviews/reviews.interface";

export interface BaseDish {
  name: string;
  reviews: Review[] | [];
}

export interface Dish extends BaseDish {
  id: number;
}

export interface Dishes {
  [key: number]: Dish;
}

