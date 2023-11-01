import { formatDate, humanizeDate } from "@/presentation/helpers";
import styles from "./post.module.scss";

import { PostProps } from "./types";
import Link from "next/link";
import { CreatedInfo } from "..";

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
            <h1>{`${id}. ${title}`}</h1>
            <CreatedInfo date={createdAt} />
          </div>
          <p>{resume}</p>
        </article>
      </Link>
    </>
  );
}
