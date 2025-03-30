import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { schema } from "./graphql";
import { authors } from "./graphql/author/author.resolvers";
import { posts } from "./graphql/post/post.resolvers";

const app = express();

const server = new ApolloServer({ schema });

(async () => {
    await server.start();

    app.use(cors());
    app.use(bodyParser.json());
    app.use("/graphql", expressMiddleware(server, {
        context: async () => ({ posts, authors }) // ✅ Now defined
    }));

    app.listen(4000, () => {
        console.log("🚀 Server ready at http://localhost:4000/graphql");
    });
})();
