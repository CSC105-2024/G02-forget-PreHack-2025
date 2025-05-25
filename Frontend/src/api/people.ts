import { Axios } from "../axiosInstance";

const createPeople = async (userId: number, commentId: number) => {
    try {
        const response = await Axios.post("/people", {userId: userId, commentId: commentId});
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

const isAlreadyLike = async (userId: number, commentId: number) => {
    try {
        const response = await Axios.post(`/people/${userId}/${commentId}`);
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

const deletePeople = async (id: number) => {
    try {
        const response = await Axios.delete(`/people/${id}`);
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

export { createPeople, isAlreadyLike, deletePeople }