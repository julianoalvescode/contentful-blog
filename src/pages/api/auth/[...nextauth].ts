import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_ID || "",
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET || "",
    }),
  ],
};

export default NextAuth(authOptions);
