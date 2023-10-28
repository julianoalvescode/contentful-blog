import { createClient } from "contentful";

const space_id = process.env.NEXT_PUBLIC_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_DELIVERY_TOKEN;

const client = createClient({
  space: space_id || "",
  accessToken: access_token || "",
  headers: {
    cache: "no-store",
  },
});

export default client;
