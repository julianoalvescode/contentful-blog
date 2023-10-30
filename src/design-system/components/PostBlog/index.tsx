import { PostBlogProps } from "./types";

import styles from "./post-blog.module.scss";

import Image from "next/image";
import { AvatarInfo } from "..";

export function PostBlog({
  fields: {
    title,
    resume,
    postContent,
    cover: {
      fields: {
        file: { url },
        description,
      },
    },
  },
}: PostBlogProps) {
  return (
    <>
      <div className={styles["post-blog"]}>
        <div className={styles.__background}>
          <Image
            src={`http:${url}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
            alt={description}
          />
        </div>
        <div className={styles["post-blog__container"]}>
          <h1 className={styles["post-blog__title"]}>{title}</h1>
          <div>
            <AvatarInfo />
          </div>
          <p className={styles["post-blog__text"]}>{resume}</p>

          <div
            dangerouslySetInnerHTML={{
              __html: postContent?.content[0].content?.value,
            }}
          />
        </div>
      </div>
    </>
  );
}
