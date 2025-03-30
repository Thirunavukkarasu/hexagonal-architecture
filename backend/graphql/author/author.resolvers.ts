export const authors = [{ id: "1", name: "John Doe" }];

export const authorResolvers = {
    Query: {
        getAuthors: () => authors,
    },
    Mutation: {
        createAuthor: (_: any, { name }: { name: string }) => {
            const newAuthor = { id: (authors.length + 1).toString(), name };
            authors.push(newAuthor);
            return newAuthor;
        },
    },
    Author: {
        posts: (author: any, _: any, { posts }: any) => posts.filter((p: any) => p.authorId === author.id),
    },
};
