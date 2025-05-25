// import type { Context } from "hono";
// import * as likeModel from "../models/like.model.ts";

// const createLike = async (c: Context) => {
//     try {
//         const { userId, commentId } = await c.req.json();
//         const like = await likeModel.createLike(userId, commentId);
//         return c.json({
//             success: true,
//             data: like,
//             msg: "Create a like !!"
//         })
//     } catch (e) {
//         return c.json(
//             {
//                 success: false,
//                 data: null,
//                 msg: `${e}`,
//             },
//             500
//         );
//     }
// }

// const addLike = async (c: Context) => {
//     try {
//         const id = Number(c.req.param("id"));
//         const { likeNum } = await c.req.json();
//         const like = await likeModel.addLike(id, likeNum);
//         return c.json({
//             success: true,
//             data: like,
//             msg: "Like is added !!"
//         })
//     } catch (e) {
//         return c.json(
//             {
//                 success: false,
//                 data: null,
//                 msg: `${e}`,
//             },
//             500
//         );
//     }
// }

// const reduceLike = async (c: Context) => {
//     try {
//         const id = Number(c.req.param("id"));
//         const { likeNum } = await c.req.json();
//         const like = await likeModel.reduceLike(id, likeNum);
//         return c.json({
//             success: true,
//             data: like,
//             msg: "Like is reduced !!"
//         })
//     } catch (e) {
//         return c.json(
//             {
//                 success: false,
//                 data: null,
//                 msg: `${e}`,
//             },
//             500
//         );
//     }
// }

// export { createLike, addLike, reduceLike }