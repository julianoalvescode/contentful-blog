import { Post } from "..";
import { PostListProps } from "./types";

import styles from "./post-list.module.scss";

export function PostList({ posts }: PostListProps) {
  return (
    <section className={styles["post-list-container"]}>
      {posts?.fields?.posts?.map((post, index) => {
        return (
          <Post
            id={index + 1}
            resume={post?.fields?.resume}
            title={post?.fields?.title}
            key={index}
            createdAt={post?.sys?.createdAt}
            internalName={post?.fields?.internalName}
          />
        );
      })}
    </section>
  );
}
