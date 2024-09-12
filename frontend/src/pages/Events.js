import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Event 1",
    image: "https://picsum.photos/seed/a/200/300",
    date: "10-02-2024",
  },
  {
    id: "e2",
    title: "Event 2",
    image: "https://picsum.photos/seed/ab/200/300",
    date: "10-02-2024",
  },
  {
    id: "e3",
    title: "Event 3",
    image: "https://picsum.photos/seed/abc/200/300",
    date: "10-02-2024",
  },
  {
    id: "e4",
    title: "Event 4",
    image: "https://picsum.photos/seed/abcd/200/300",
    date: "10-02-2024",
  },
  {
    id: "e5",
    title: "Event 5",
    image: "https://picsum.photos/seed/abcde/200/300",
    date: "10-02-2024",
  },
];

const EventsPage = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <EventsList events={DUMMY_EVENTS} />
    </div>
  );
};

export default EventsPage;
