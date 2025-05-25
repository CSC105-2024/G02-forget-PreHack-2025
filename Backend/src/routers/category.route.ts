import { Hono } from "hono";
import * as categoryController from "../controllers/category.controller.ts";

const categoryRouter = new Hono();

categoryRouter.post("/", categoryController.createCategory);
categoryRouter.patch("/:id", categoryController.editCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);
categoryRouter.get("/:foodPostId", categoryController.getCategoryFromPost);

export { categoryRouter }