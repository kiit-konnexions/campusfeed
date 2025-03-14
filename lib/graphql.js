import fetch from "cross-fetch";

/**
 * Send GraphQL query to HyGraph API
 * Docs: https://hygraph.com/docs/implementations/next/next
 */
export function sendGraphQlRequest(requestQuery) {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT;

  if (!NEXT_HYGRAPH_ENDPOINT) {
    throw new Error("Provide hygraph endpoint!");
  }

  return fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: requestQuery,
    }),
  });
}
