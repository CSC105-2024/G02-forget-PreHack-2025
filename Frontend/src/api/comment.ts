import { Axios } from "../axiosInstance";

const createComment = async (rating: number, content: string, day: number, month: number, year: number, foodPostId: number, userId: number) => {
    try {
        await Axios.post("/comments", {rating: rating, content: content, day: day, month: month, year: year, foodPostId: foodPostId, userId: userId})
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const editComment = async (id: number, rating: number, content: string, day: number, month: number, year: number) => {
    try {
        await Axios.patch(`/comments/${id}`, {rating: rating, content: content, day: day, month: month, year: year});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const editLike = async (id: number, like: number) => {
    try {
        await Axios.patch(`/comments/like/${id}`, {like: like});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const deleteComment = async (id: number, userId: number) => {
    try {
        await Axios.delete(`/comments/${id}/${userId}`);
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getCommentFromPost = async (foodPostId: number) => {
    try {
        const response = await Axios.get(`/comments/${foodPostId}`);
        return {
            success: true,
            data: response.data
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getCommentFromUser = async (userId: number) => {
    try {
        const response = await Axios.get(`/comments/${userId}`);
        return {
            success: true,
            data: response.data
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

export { createComment, editComment, editLike, deleteComment, getCommentFromPost, getCommentFromUser }