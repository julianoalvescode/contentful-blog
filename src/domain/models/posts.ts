import { Post } from ".";

export type Posts = {
  fields: {
    internalName: string;
    posts: Post[];
  };
};
