/**
 * Data Model Interfaces
 */
import * as fs from "fs";
import * as path from "path";
import { BaseDish, Dish, Dishes } from "./dishes.interface";
import { Review } from "../reviews/reviews.interface";


/**
 * Read restaurant review dataset
 */
const readReviews = () => {
  try {
    const fileContent = fs.readFileSync(
      path.join(__dirname, "../data/Restaurant_Reviews.tsv"),
      { encoding: "utf-8" },
    );
    return fileContent;
  } catch (error) {
    console.log("Error while reading file...", error)
    throw new Error("Error while reading file...")
  }
}


/**
 * In-Memory Store
 */
const reviews = readReviews()?.split("\n")
const reviewsJson = reviews?.slice(1).map(line => {
  const [review, likes] = line.split("\t")
  const numberOfLikes: number = parseInt(likes, 10) | 0
  return {review, numberOfLikes};
}) || []


let dishes: Dishes = {
  1: {
    id: 1,
    name: "Ewa Agoyin",
    reviews: reviewsJson,
  }
}


/**
 * Service Methods
 */
export const findAll = async (): Promise<Dish[]> => Object.values(dishes);

export const find = async (id: number): Promise<Dish> => dishes[id];

export const create = async (newDish: BaseDish): Promise<Dish> => {
  const id = new Date().valueOf();

  dishes[id] = {
    id,
    ...newDish,
  };

  return dishes[id];
}

export const update = async (id: number, dishUpdate: BaseDish): Promise<Dish | null> => {
  const dish = await find(id);
  if (!dish) {
    return null;
  }

  dishes[id] = { id, ...dishUpdate };
  return dishes[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const dish = await find(id);
  if (!dish) {
    return null;
  }

  delete dishes[id];
};
