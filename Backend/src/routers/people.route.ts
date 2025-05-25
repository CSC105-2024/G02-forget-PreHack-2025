import { Hono } from "hono";
import * as peopleController from "../controllers/people.controller.ts";

const peopleRouter = new Hono();

peopleRouter.post("/", peopleController.createPeople);
peopleRouter.post("/:userId/:commentId", peopleController.isAlreadyLike);
peopleRouter.get("/", peopleController.getPeople);
peopleRouter.delete("/:id", peopleController.deletePeople);

export { peopleRouter }