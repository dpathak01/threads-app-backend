export const resolvers = {
    Query: {
        hello: () => "Hello World 🚀",
        say(_, args) {
            const name = args.name || "Stranger";
            return `Hello, ${name}! 👋`;
        },
    },
};
//# sourceMappingURL=resolvers.js.map