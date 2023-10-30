import { Footer } from ".";
import { AboutMe } from "./about-me";
import { Posts } from "./posts";

export type PageHome = {
  title: string;
  slug: string;
  headline: string;
  sections: AboutMe[];
  posts: Posts;
  footer: Footer;
};
