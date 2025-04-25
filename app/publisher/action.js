"use server";
import { EventSchema } from "../../lib/schema";

export async function addEvent(formData) {
  const eventData = EventSchema.safeParse(formData);
  const GRAPHQL_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT;
  const GRAPHQL_API_TOKEN = process.env.HYGRAPH_API_TOKEN;

  if (!eventData.success) {
    console.log("error", eventData.error.errors);
    return {
      success: false,
      message: "Invalid data",
    };
  }

  try {
    const mutation = `
      mutation CreateEvent($data: EventCreateInput!) {
        createEvent(data: $data) {
          id
          title
        }
      }
    `;

    const variables = {
      data: {
        title: eventData.data.title,
        school: eventData.data.school,
        venue: eventData.data.venue,
        startDate: eventData.data.startDate,
        endDate: eventData.data.endDate,
        socialLinks: eventData.data.socialLinks,
        registrationLinks: eventData.data.registrationLinks,
        guideLinePdfLink: eventData.data.guideLinePdfLink,
        image: eventData.data.image,
        description: eventData.data.description,
      },
    };

    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GRAPHQL_API_TOKEN}`,
      },
      body: JSON.stringify({ query: mutation, variables }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      return {
        success: false,
        message: "Failed to submit event",
      };
    }

    // telegram verification message

    const text = JSON.stringify(eventData.data, null, 2);
    const POST_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${text}`;
    await fetch(POST_URL);

    // true if all execution is successful
    return {
      success: true,
      message: "Event submitted successfully",
      data: result.data.createEvent,
    };
  } catch (error) {
    console.error("Error submitting event:", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
