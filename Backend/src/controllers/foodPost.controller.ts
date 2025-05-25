import type { Context } from "hono";
import * as foodPostModel from "../models/foodPost.model.ts";

const createPost = async (c: Context) => {
    try {
        const { name, price, location, phoneNumber, resNumber, userId } = await c.req.json();
        const post = await foodPostModel.createPost(name, price, location, phoneNumber, resNumber, userId);
        return c.json({
            success: true,
            data: post,
            msg: "Create a new post !!"
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

const editPost =  async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { name, price, location, phoneNumber, resNumber } = await c.req.json();
        const post = await foodPostModel.editPost(id, name, price, location, phoneNumber, resNumber);
        return c.json({
            success: true,
            data: post,
            msg: "Edit a post successfully"
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

const editImage =  async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { userId, image } = await c.req.json();
        const post = await foodPostModel.editImage(id, userId, image);
        return c.json({
            success: true,
            data: post,
            msg: "Edit a post image successfully"
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

const getAllPost =  async (c: Context) => {
    try {
        const post = await foodPostModel.getAllPost();
        return c.json({
            success: true,
            data: post,
            msg: "All posts are here"
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

const getDetailPost = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const post = await foodPostModel.getDetailPost(id);
        return c.json({
            success: true,
            data: post,
            msg: "Details post is here"
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

const getPostFromUser = async (c: Context) => {
    try {
        const userId = Number(c.req.param("id"));
        const post = await foodPostModel.getPostFromUser(userId);
        return c.json({
            success: true,
            data: post,
            msg: "All posts of this user are here"
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

const deletePost = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const post = await foodPostModel.deletePost(id);
        return c.json({
            success: true,
            data: post,
            msg: "This post is delected"
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

export { createPost, editPost, editImage, getAllPost, getDetailPost, getPostFromUser, deletePost }