import EventList from "@/components/events/event-list";
import { getAllEvents } from "../../../dummy-data";
import EventsSearch from "@/components/events/events-search";

export default function AllEventsPage() {
  const eventList = getAllEvents();

  return (
    <div>
      <EventsSearch />
      <EventList items={eventList} />
    </div>
  );
}
