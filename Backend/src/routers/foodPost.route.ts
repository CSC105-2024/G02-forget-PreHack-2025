import { Hono } from "hono";
import * as foodPostController from "../controllers/foodPost.controller.ts";

const foodPostRouter = new Hono();

foodPostRouter.post("/", foodPostController.createPost);
foodPostRouter.patch("/:id", foodPostController.editPost);
foodPostRouter.patch("/image/:id", foodPostController.editImage);
foodPostRouter.get("/", foodPostController.getAllPost);
foodPostRouter.get("/detail/:id", foodPostController.getDetailPost);
foodPostRouter.get("/:id", foodPostController.getPostFromUser);
foodPostRouter.delete("/:id", foodPostController.deletePost);

export { foodPostRouter };