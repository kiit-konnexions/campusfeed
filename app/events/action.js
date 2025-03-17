"use server";

import { graphQLclient } from "@/lib/graphql";
import { gql } from "@apollo/client";

const GET_EVENTS = gql`
  query EventData {
    eventModels {
      title
      eventPrize
      description {
        html
      }
      posterImage
      start
      end
      venue
      organizingSchoolOrSociety
      socialMedia
      contactNumber
      emailId
      registrationLink
      guideLinePdfLink
      relationToUser
    }
  }
`;

export async function getEvents() {
  const {
    data: { eventModels },
  } = await graphQLclient.query({
    query: GET_EVENTS,
  });

  const events = eventModels.map((record) => {
    return {
      eventPoster: record.posterImage,
      eventName: record.title,
      eventLocation: record.venue,
      eventDate: new Date(record.start)
        .toLocaleString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(",", "")
        .replaceAll(" ", "-"),
      eventPrize: parseFloat(record.eventPrize),

      eventDescription: record.description.html,
      registrationLink: record.registrationLink,
      guideLinePdfLink: record.guideLinePdfLink,
    };
  });

  console.log(events);

  return { data: events };
}
