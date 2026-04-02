export const resolvers = {
  Query: {
    hello: () => "Hello World 🚀",
    say(_: any, args: { name?: string }) {
      const name = args.name || "Stranger";
      return `Hello, ${name}! 👋`;
    },
  },
};