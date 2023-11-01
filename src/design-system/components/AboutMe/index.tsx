import { AboutMe } from "@/domain/models";

import styles from "./about-me.module.scss";
import Image from "next/image";
import { RenderRichText } from "@/design-system/components";

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
        <div className={styles["about-me__image_container"]}>
          <Image
            height={300}
            width={300}
            className={styles["about-me__image"]}
            src={`http:${url}`}
            alt=""
            quality={80}
          />
        </div>
        <div className={styles["about-me__rich-text_container"]}>
          <h1>{title}</h1>
          <RenderRichText richText={content[0]} />
        </div>
      </section>
    </>
  );
}
