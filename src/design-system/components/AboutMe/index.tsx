import { AboutMe } from "@/domain/models";

import styles from "./about-me.module.scss";

export function AboutMe({
  fields: {
    title,
    avatar: {
      fields: {
        file: { url },
      },
    },
    description: { content },
  },
}: AboutMe) {
  if (!title || !url || !content) {
    return;
  }

  return (
    <>
      <section className={styles["about-me"]}>
        <div>
          <img className={styles["about-me__image"]} src={url} alt="" />
        </div>
        <div className={styles["about-me__rich-text_container"]}>
          <h1 className={styles["about-me__title"]}>{title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: content[0].content[0].value }}
          />
        </div>
      </section>
    </>
  );
}
