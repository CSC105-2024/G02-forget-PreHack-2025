import type { Context } from "hono";
import * as categoryModel from "../models/category.model.ts";

const createCategory = async (c: Context) => {
    try {
        const { category, foodPostId } = await c.req.json();
        const newCategory = await categoryModel.createCategory(category, foodPostId);
        return c.json({
            success: true,
            data: newCategory,
            msg: "Create a new category !!"
        })
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const editCategory = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { category } = await c.req.json();
        const newCategory = await categoryModel.editCategory(id, category);
        return c.json({
            success: true,
            data: newCategory,
            msg: "Edit a category successfully"
        })
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const deleteCategory = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const newCategory = await categoryModel.deleteCategory(id);
        return c.json({
            success: true,
            data: newCategory,
            msg: "This category is delected"
        })
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getCategoryFromPost = async (c: Context) => {
    try {
        const foodPostId = Number(c.req.param("foodPostId"));
        const newCategory = await categoryModel.getCategoryFromPost(foodPostId);
        return c.json({
            success: true,
            data: newCategory,
            msg: "All categories of this post are here"
        })
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

export { createCategory, editCategory, deleteCategory, getCategoryFromPost }