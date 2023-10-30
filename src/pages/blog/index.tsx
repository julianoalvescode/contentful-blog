import Head from "next/head";
import contentfulService from "@/presentation/services/contentful-pages";
import { AboutMe, PostList } from "@/design-system/components";
import styles from "./blog.module.scss";
import { PageHome } from "@/domain/models";

export default function Blog({ title, sections, posts }: PageHome) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <AboutMe {...sections[0]} />
        <PostList posts={posts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await contentfulService.getPosts();
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
      posts,
    },
    revalidate: 60,
  };
}
