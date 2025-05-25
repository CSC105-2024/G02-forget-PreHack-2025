import type { Context } from "hono";
import * as commentModel from "../models/comment.model.ts";

const creatComment = async (c: Context) => {
    try {
        const { rating, content, day, month, year, foodPostId, userId } = await c.req.json();
        const comment = await commentModel.creatComment(rating, content, day, month, year, foodPostId, userId);
        return c.json({
            success: true,
            data: comment,
            msg: "Create a new comment !!"
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

const editComment = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { userId, rating, content, day, month, year } = await c.req.json();
        const comment = await commentModel.editComment(id, userId, rating, content, day, month, year);
        return c.json({
            success: true,
            data: comment,
            msg: "Edit a comment successfully"
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

const editLike = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { like } = await c.req.json();
        const comment = await commentModel.editLike(id, like);
        return c.json({
            success: true,
            data: comment,
            msg: "Edit a like successfully"
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


const deleteComment = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const userId = Number(c.req.param("userId"));
        const comment = await commentModel.deleteComment(id, userId);
        return c.json({
            success: true,
            data: comment,
            msg: "This comment is delected"
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


const getCommentFromPost = async (c: Context) => {
    try {
        const foodPostId = Number(c.req.param("foodPostId"));
        const comment = await commentModel.getCommentFromPost(foodPostId);
        return c.json({
            success: true,
            data: comment,
            msg: "All comments of this post are here"
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


const getCommentFromUser = async (c: Context) => {
    try {
        const userId = Number(c.req.param("userId"));
        const comment = await commentModel.getCommentFromUser(userId);
        return c.json({
            success: true,
            data: comment,
            msg: "All comments of this user are here"
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

export { creatComment, editComment, editLike, deleteComment, getCommentFromPost, getCommentFromUser }