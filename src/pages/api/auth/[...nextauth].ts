import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "42f66d109c7eebff001a",
      clientSecret:
        process.env.GITHUB_SECRET || "857060d3a84bb39c6bf90452d650b1540e188d0c",
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOptions);
