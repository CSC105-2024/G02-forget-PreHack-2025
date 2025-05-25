import { db } from "../index.ts";

const createPeople = async (userId: number, commentId: number) => {
    const people = await db.people.create({
        data: {
            userId: userId,
            commentId: commentId
        }
    })
    return people;
}

const isAlreadyLike = async (userId: number, commentId: number) => {
    const people = await db.people.findFirst({
        where: {
            AND: [
                {userId: userId},
                {commentId: commentId}
            ]
        }
    })
    return people;
}

const getPeople = async () => {
    const people = await db.people.findMany();
    return people;
}

const deletePeople = async (id: number) => {
    const people = await db.people.delete({
        where: {
            id: id
        }
    })
}

export { createPeople, isAlreadyLike, getPeople, deletePeople }