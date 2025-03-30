import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

import { postTypeDefs } from "./post/post.typeDefs";
import { postResolvers } from "./post/post.resolvers";
import { authorTypeDefs } from "./author/author.typeDefs";
import { authorResolvers } from "./author/author.resolvers";

export const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([postTypeDefs, authorTypeDefs]),
    resolvers: mergeResolvers([postResolvers, authorResolvers]),
});
