import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";
import { authMiddleware } from "../middleware/auth.middleware.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getInfoUser);
userRouter.post("/login", userController.loginUser);
userRouter.patch("/:id", userController.editUsername);
userRouter.get("/me", authMiddleware, userController.getMe);
userRouter.post("/logout", userController.logOut);
export { userRouter };