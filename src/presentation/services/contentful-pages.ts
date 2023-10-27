import client from "@/connectors/contentful";
import { PageHome } from "@/domain/models";
import { GetStaticPropsContext } from "next";

class ContentfulPage {
  homePageId = "7crGJXefF4mDkLckuTKmHd";

  async getHomePage(): Promise<PageHome> {
    const entry = await client.getEntry(this.homePageId);

    return entry.fields as PageHome;
  }
}

const t = new ContentfulPage();

export default t;
