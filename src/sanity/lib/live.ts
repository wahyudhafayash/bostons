// Import necessary methods from `next-sanity`
import { defineLive } from "next-sanity";
import { client } from "./client"; // Assuming you have the Sanity client configured in client.js

// Get the Sanity API token from environment variables (read token)
const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  // Throw an error if the token is missing
  throw new Error("SANITY_API_READ_TOKEN is not set");
}

// Define live fetching using Sanity's `defineLive`
export const { sanityFetch, SanityLive } = defineLive({
  client, // The Sanity client configured with projectId and dataset
  serverToken: token, // The token for server-side access to content
  browserToken: token, // The token for client-side access to content
});
