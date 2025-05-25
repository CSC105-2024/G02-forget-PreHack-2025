// import { Axios } from "../axiosInstance";

// const createLike = async (userId: number, commentId: number) => {
//     try {
//         await Axios.post("/likes", {userId: userId, commentId: commentId})
//     } catch (e) {
//         console.log(e);
//         return {
//             success: false,
//             data: null
//         }
//     }
// }

// const addLike = async (id: number, likeNum: number) => {
//     try {
//         await Axios.patch(`/likes/add/${id}`, {likeNum: likeNum})
//     } catch (e) {
//         console.log(e);
//         return {
//             success: false,
//             data: null
//         }
//     }
// }

// const reduceLike = async (id: number, likeNum: number) => {
//     try {
//         await Axios.patch(`/likes/reduce/${id}`, {likeNum: likeNum})
//     } catch (e) {
//         console.log(e);
//         return {
//             success: false,
//             data: null
//         }
//     }
// }

// export { createLike, addLike, reduceLike }