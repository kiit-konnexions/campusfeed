import { getEvents } from "./action";
import EventsHomePage from "./event";

export default async function Home() {
  const eventsData = await getEvents();
  return <EventsHomePage events={eventsData.data} />;
}
