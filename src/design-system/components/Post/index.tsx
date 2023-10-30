import { humanizeDate } from "@/presentation/helpers";
import styles from "./post.module.scss";

import { PostProps } from "./types";
import Link from "next/link";

export function Post({
  resume,
  title,
  createdAt,
  internalName,
  id,
}: PostProps) {
  return (
    <>
      <article className={styles.post}>
        <div className={styles["post__info-container"]}>
          <Link href={`/blog/${internalName}`}>
            <h1 className={styles["post__title"]}>{`${id}. ${title}`}</h1>
          </Link>
          <p className={styles["post__date"]}>{humanizeDate(createdAt)}</p>
        </div>
        <p className={styles["post__text"]}>{resume}</p>
      </article>
    </>
  );
}
