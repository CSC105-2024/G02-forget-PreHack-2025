import { data } from "react-router-dom";
import { Axios } from "../axiosInstance";

const createUser = async (username: string, email: string, password: string ) => {
    try {
        await Axios.post("/users", {username: username, email: email, password: password});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getInfoUser = async (id: number) => {
    try {
        const response = await Axios.get(`/users/${id}`);
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

const loginUser = async (email: string, password: string) => {
    try {
        const response = await Axios.post("/users/login", {email: email});
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

export {createUser, getInfoUser, loginUser}