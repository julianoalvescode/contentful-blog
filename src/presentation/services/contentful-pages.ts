import client from "@/connectors/contentful";
import { PageHome } from "@/domain/models";

class ContentfulPage {
  homePageId = "7crGJXefF4mDkLckuTKmHd";
  postsId = "1YD9XPxtXBu4BBEqODsYrv";
  footerId = "1PCXWqZPPzPGdZcZpMHXKq";

  async getHomePage(): Promise<PageHome> {
    const entry = await client.getEntry(this.homePageId);

    return entry.fields as PageHome;
  }

  async getPosts(): Promise<any> {
    const posts = await client.getEntry(this.postsId);

    return posts;
  }

  async getFooter(): Promise<any> {
    const footer = await client.getEntry(this.footerId);

    return footer.fields;
  }
}

const t = new ContentfulPage();

export default t;
