// import { db } from "../index.ts";

// const createLike = async (userId: number, commentId: number) => {
//     const like = await db.like.create({
//         data: {
//             userId: userId,
//             commentId: commentId
//         }
//     })
//     return like;
// }

// const addLike = async (id: number, likeNum: number) => {
//     const like = await db.like.update({
//         where: {
//             id: id,
//         },
//         data: {
//             likeNum: likeNum
//         }
//     })
//     return like;
// }

// const reduceLike = async (id: number, likeNum: number) => {
//     const like = await db.like.update({
//         where: {
//             id: id,
//         },
//         data: {
//             likeNum: likeNum
//         }
//     })
//     return like;
// }

// export { createLike, addLike, reduceLike }