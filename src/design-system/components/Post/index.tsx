import { formatDate, humanizeDate } from "@/presentation/helpers";
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
      <Link href={`/blog/${internalName}`}>
        <article className={styles.post}>
          <div className={styles["post__info-container"]}>
            <h1 className={styles["post__title"]}>{`${id}. ${title}`}</h1>
            <p className={styles["post__date"]}>
              {formatDate(createdAt)} - Postado {humanizeDate(createdAt)}
            </p>
          </div>
          <p className={styles["post__text"]}>{resume}</p>
        </article>
      </Link>
    </>
  );
}
