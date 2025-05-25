import { Hono } from "hono";
import { userRouter } from "./user.route.ts";
import { foodPostRouter } from "./foodPost.route.ts";
import { categoryRouter } from "./category.route.ts";
import { commentRouter } from "./comment.route.ts";
// import { likeRouter } from "./like.route.ts";
import { peopleRouter } from "./people.route.ts";

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/foodPosts", foodPostRouter);
mainRouter.route("/categories", categoryRouter);
mainRouter.route("/comments", commentRouter);
// mainRouter.route("/likes", likeRouter);
mainRouter.route("/people", peopleRouter);


export { mainRouter };