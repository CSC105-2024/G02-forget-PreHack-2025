import { connect } from "http2";
import { db } from "../index.ts";


const createPost = async (name: string, price: number, location: string, phoneNumber: string, resNumber: string, userId: number) => {
    const post = await db.foodPost.create({
        data: {
            name: name,
            price: price,
            location: location,
            phoneNumber: phoneNumber,
            resNumber: resNumber,
            image: "",
            rating: 0.0,
            user: {
                connect: {id: userId}
            }
        },
    });
    return post;
}

const editPost = async (id: number, name: string, price: number, location: string, phoneNumber: string, resNumber: string) => {
    const post = await db.foodPost.update({
        where: {
            id: id
        },
        data: {
            name: name,
            price: price,
            location: location,
            phoneNumber: phoneNumber,
            resNumber: resNumber,
        }
    });
    return post;
}

const editImage = async (id: number, userId: number, image: string) => {
    const post = await db.foodPost.update({
        where: {
            id: id,
            userId: userId
        },
        data: {
            image: image
        }
    });
    return post;
}

const getAllPost = async () => {
    const post = await db.foodPost.findMany({
        include: {
            comment: true,
            category: true
        }
    });
    return post;
}

const getDetailPost = async (id: number) => {
    const post = await db.foodPost.findFirst({
        where: {
            id: id
        },
        include: {
            category: true
        }
    });
    return post;
}

const getPostFromUser = async (userId: number) => {
    const post = await db.foodPost.findMany({
        where: {
            userId: userId
        },
        include: {
            comment: true
        }
    })
    return post;
}

const deletePost = async (id: number) => {
    const post = await db.foodPost.delete({
        where: {
            id: id
        }
    })
    return post;
}

export { createPost, editPost, editImage, getAllPost, getDetailPost, getPostFromUser, deletePost }