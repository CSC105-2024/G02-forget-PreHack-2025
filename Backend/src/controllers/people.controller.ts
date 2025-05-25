import type { Context } from "hono";
import * as peopleModel from "../models/people.model.ts";

const createPeople = async (c: Context) => {
    try {
        const { userId, commentId } = await c.req.json();
        const person = await peopleModel.createPeople(userId, commentId);
        return c.json({
            success: true,
            data: person,
            msg: "Create a person in this like !!"
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

const isAlreadyLike = async (c: Context) => {
    try {
        const userId = Number(c.req.param("userId"));
        const commentId = Number(c.req.param("commentId"));
        const person = await peopleModel.isAlreadyLike(userId, commentId);
        if (person) {
            return c.json({
                success: true,
                data: person,
                msg: "User already likes this comment !!"
            })
        } else {
            return c.json({
                success: true,
                data: person,
                msg: "User doesn't like this comment yet !!"
            })
        }
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

const getPeople = async (c: Context) => {
    try {
        const person = await peopleModel.getPeople();
        return c.json({
            success: true,
            data: person,
            msg: "All people are like"
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

const deletePeople = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const person = await peopleModel.deletePeople(id);
        return c.json({
            success: true,
            data: person,
            msg: "This person like already deleted"
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

export { createPeople, isAlreadyLike, getPeople, deletePeople }