import { Axios } from "../axiosInstance";

const createCategory = async (category: string, foodPostId: number) => {
    try {
        await Axios.post("/categories", {category: category, foodPostId: foodPostId})
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const editCategory = async (id: number, category: string) => {
    try {
        await Axios.patch(`/categories/${id}`, {category: category});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const deleteCategory = async (id: number) => {
    try {
        await Axios.delete(`/categories/${id}`);
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getCategoryFromPost = async (foodPostId: number) => {
    try {
        const response = await Axios.get(`/categories/${foodPostId}`);
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

export { createCategory, editCategory, deleteCategory, getCategoryFromPost }