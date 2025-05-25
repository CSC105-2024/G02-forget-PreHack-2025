import { db } from "../index.ts";

const creatComment = async (rating: number, content: string, day: number, month: number, year: number, foodPostId: number, userId: number) => {
    const comment = await db.comment.create({
        data: {
            rating: rating,
            content: content,
            day: day,
            month: month,
            year: year,
            foodPostId: foodPostId,
            userId: userId
        }
    })
    return comment;
}

const editComment = async (id: number, userId: number, rating: number, content: string, day: number, month: number, year: number) => {
    const comment = await db.comment.update({
        where: {
            id: id,
            userId: userId
        },
        data: {
            rating: rating,
            content: content,
            day: day,
            month: month,
            year: year
        }
    })
    return comment;
}

const editLike = async (id: number, like: number) => {
    const comment = await db.comment.update({
        where: {
            id: id,
        },
        data: {
            like: like
        }
    })
    return comment;
}

const deleteComment = async (id: number, userId: number) => {
    const comment = await db.comment.delete({
        where: {
            id: id,
            userId: userId
        }
    })
    return comment;
}

const getCommentFromPost = async (foodPostId: number) => {
    const comment = await db.comment.findMany({
        where: {
            foodPostId: foodPostId
        },
        include: {
            user: true,
            people: true,
            foodPost: true
        }
    })
    return comment;
}

const getCommentFromUser = async (userId: number) => {
    const comment = await db.comment.findMany({
        where: {
            userId: userId
        }
    })
    return comment;
}

export { creatComment, editComment, editLike, deleteComment, getCommentFromPost, getCommentFromUser }