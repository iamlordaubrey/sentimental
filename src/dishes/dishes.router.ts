/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { BaseDish, Dish } from "./dishes.interface";
// import { find, findAll, create, update, remove } from "./dishes.service";
import * as DishService from "./dishes.service";

/**
 * Router Definition
 */
export const dishesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
dishesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const dishes: Dish[] = await DishService.findAll();
    res.status(200).send(dishes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      console.log('Unexpected error', error);
      res.status(500).send('Unexpected error');
    }
  }
});

// GET items/:id
dishesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const dish: Dish = await DishService.find(id);

    if (dish) {
      return res.status(200).send(dish)
    }

    res.status(404).send("Dish not found");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      console.log('Unexpected error', error);
      res.status(500).send('Unexpected error');
    }
  }
});

// POST items
dishesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const dish: BaseDish = req.body;
    const newDish = await DishService.create(dish);

    res.status(201).json(newDish);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      console.log('Unexpected error', error);
      res.status(500).send('Unexpected error');
    }
  }
})

// PUT items/:id
dishesRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const dishUpdate: Dish = req.body;
    const existingDish: Dish = await DishService.find(id);

    if (existingDish) {
      const updatedDish = await DishService.update(id, dishUpdate);
      return res.status(200).json(updatedDish);
    }

    const newDish = await DishService.create(dishUpdate);

    res.status(201).json(newDish);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      console.log('Unexpected error', error);
      res.status(500).send('Unexpected error');
    }
  }
});

// DELETE items/:id
dishesRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await DishService.remove(id);

    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      console.log('Unexpected error', error);
      res.status(500).send('Unexpected error');
    }
  }
})