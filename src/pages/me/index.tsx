import Head from "next/head";
import contentfulService from "@/presentation/services/contentful-pages";
import { AboutMe } from "@/design-system/components";
import styles from "./me.module.scss";
import { PageHome } from "@/domain/models";

export default function Me({ title, sections }: PageHome) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <AboutMe {...sections[0]} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { title, sections } = await contentfulService.getHomePage();

  if (!title || !sections) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title,
      sections,
    },
    revalidate: 60,
  };
}
