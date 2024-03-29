import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import { getAllEvents } from "../../../dummy-data";
import EventsSearch from "@/components/events/events-search";

export default function AllEventsPage() {
  const router = useRouter();
  const eventList = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={eventList} />
    </>
  );
}
