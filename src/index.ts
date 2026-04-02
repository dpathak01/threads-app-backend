import express from "express";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

async function startServer() {
    const app = express();
    const PORT = Number(process.env.PORT) || 4000;

    const gqlServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // Start the Apollo Server
    await gqlServer.start();

    // Apply the Apollo Server middleware to the Express app
    app.use(
        "/graphql",
        // cors(),
        express.json(),
        expressMiddleware(gqlServer)
    );

    // Start the Express server
    app.listen(4000, () => {
        console.log("🚀 Server ready at http://localhost:4000/graphql");
    });
}

// Start the server and handle any startup errors
startServer().catch((err) => {
    console.error("❌ Server failed to start:", err);
});