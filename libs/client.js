import { createClient } from "microcms";

export const client = createClient({
  serviceDomain: "service-domain",
  apiKey: process.env.API_KEY,
});
