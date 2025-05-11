import { sql } from "../../config/db";

export const authorResolvers = {
    Query: {
        getAuthors: async () => {
            return await sql`SELECT * FROM authors`;
        }
    },
    Mutation: {
        createAuthor: async (_: any, { name }: { name: string }) => {
            const [newAuthor] = await sql`
              INSERT INTO authors (name)
              VALUES (${name})
              RETURNING *`;
            return newAuthor;
        },
    },
    Author: {
        posts: async (author: any) => {
            return await sql`SELECT * FROM posts WHERE author_id = ${author.id}`;
        },
    },
};
