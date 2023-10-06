/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as DishService from "../dishes/dishes.service";
import { Dish } from "../dishes/dishes.interface";
import { processSentiment } from "./sentiments.service";


/**
 * Router Definition
 */
export const sentimentsRouter = express.Router();


/**
 * Controller Definitions
 */

// GET items/:id
sentimentsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const dish: Dish = await DishService.find(id);

    if (dish) {
      // Make the API call
      const resp = await processSentiment(dish)
      return res.status(200).send(resp)
    }

    res.status(404).send("Dish sentiment not found");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      console.log('Unexpected error', error);
      res.status(500).send('Unexpected error');
    }
  }
});