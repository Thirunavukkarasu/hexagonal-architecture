import { sql } from "../../config/db";

export const postResolvers = {
    Query: {
        getPosts: async () => {
            return await sql`SELECT * FROM posts`;
        },
    },

    Mutation: {
        createPost: async (
            _: any,
            {
                title,
                content,
                authorId,
            }: { title: string; content: string; authorId: number }
        ) => {
            const [newPost] = await sql`
        INSERT INTO posts (title, content, author_id)
        VALUES (${title}, ${content}, ${authorId})
        RETURNING *`;
            return newPost;
        },
    },

    Post: {
        author: async (post: any) => {
            const [author] = await sql`SELECT * FROM authors WHERE id = ${post.author_id}`;
            return author;
        },
    },
};
