import { db } from "../index.ts";

const createCategory = async (category: string, foodPostId: number) => {
    const newCategory = await db.category.create({
        data: {
            category: category,
            foodPost: {
                connect: {id: foodPostId}
            }
        }
    })
    return newCategory;
}

const editCategory = async (id: number, category: string) => {
    const newCategory = await db.category.update({
        where: {
            id: id
        },
        data: {
            category: category
        }
    })
    return newCategory;
}

const deleteCategory = async (id: number) => {
    const newCategory = await db.category.delete({
        where: {
            id: id
        }
    })
    return newCategory;
}

const getCategoryFromPost = async (foodPostId: number) => {
    const newCategory = await db.category.findMany({
        where: {
            foodPostId: foodPostId
        }
    })
    return newCategory;
}

export { createCategory, editCategory, deleteCategory, getCategoryFromPost }