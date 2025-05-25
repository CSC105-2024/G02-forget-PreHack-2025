import { data } from "react-router-dom";
import { Axios } from "../axiosInstance";

const createPost = async (name: string, price: number, location: string, phoneNumber: string, resNumber: string, userId: number) => {
    try {
        const response = await Axios.post("/foodPosts", {name: name, price: price, location: location, phoneNumber: phoneNumber, resNumber: resNumber, userId: userId});
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

const editPost = async (id: number, name: string, price: number, location: string, phoneNumber: string, resNumber: string) => {
    try {
        await Axios.patch(`/foodPosts/${id}`, {id: id, name: name, price: price, location: location, phoneNumber: phoneNumber, resNumber: resNumber});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const editImage = async (id: number, userId: number, image: string) => {
    try {
        await Axios.patch(`/foodPosts/image/${id}`, {id: id, userId: userId, image: image});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getAllPost = async () => {
    try {
        const response = await Axios.get('/foodPosts')
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

const getDetailPost = async (id: number) => {
    try {
        const response = await Axios.get(`/foodPosts/detail/${id}`)
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

const getPostFromUser = async (userId: number) => {
    try {
        const response = await Axios.get(`/foodPosts/${userId}`)
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

const deletePost = async (id: number) => {
    try {
        await Axios.delete(`/foodPosts/${id}`)
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

export { createPost, editPost, editImage, getAllPost, getDetailPost, getPostFromUser, deletePost }