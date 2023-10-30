import { humanizeDate } from "@/presentation/helpers";
import styles from "./post.module.scss";

import { PostProps } from "./types";

export function Post({ resume, title, createdAt }: PostProps) {
  return (
    <>
      <article className={styles.post}>
        <div>
          <h1 className={styles["post__title"]}>{title}</h1>
          <p className={styles["post__date"]}>{humanizeDate(createdAt)}</p>
        </div>
        <p className={styles["post__text"]}>{resume}</p>
      </article>
    </>
  );
}
