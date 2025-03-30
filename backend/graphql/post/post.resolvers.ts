export const posts = [
    { id: "1", title: "First Post", content: "Hello World", authorId: "1" }
];

export const postResolvers = {
    Query: {
        getPosts: () => posts,
    },
    Mutation: {
        createPost: (_: any, { title, content, authorId }: { title: string; content: string; authorId: string }) => {
            const newPost = { id: (posts.length + 1).toString(), title, content, authorId };
            posts.push(newPost);
            return newPost;
        },
    },
    Post: {
        author: (post: any, _: any, { authors }: any) => authors.find((a: any) => a.id === post.authorId),
    },
};
