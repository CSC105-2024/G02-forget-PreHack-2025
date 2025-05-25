import { Hono } from "hono";
import * as commentController from "../controllers/comment.controller.ts";

const commentRouter = new Hono();

commentRouter.post("/", commentController.creatComment)
commentRouter.patch("/:id", commentController.editComment)
commentRouter.patch("/like/:id", commentController.editLike)
commentRouter.delete("/:id/:userId", commentController.deleteComment)
commentRouter.get("/:foodPostId", commentController.getCommentFromPost)
commentRouter.get("/:userId", commentController.getCommentFromUser)

export { commentRouter }