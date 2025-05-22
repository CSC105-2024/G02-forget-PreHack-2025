import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getInfoUser);
userRouter.post("/login", userController.loginUser)

export { userRouter };