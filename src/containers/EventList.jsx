import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { AiOutlineNotification } from "react-icons/ai";


const events = [
  {
    name: 'pop_enrollment',
    title: 'POP Enrollment Communication Event',
    icon: '🚀'
  },

  {
    name: 'pop_redemption',
    title: 'POP Redemption Communication Event',
    icon: '🚀'
  },

  {
    name: 'pop_cancellation',
    title: 'POP Cancellation Communication Event',
    icon: '🚀',
  },
]

export default function EventList() {
  return (
    <div>
      <div className="flex items-center justify-between">
      <Heading title="Notification Events" subTitle="List of all available notification events!" icon={AiOutlineNotification} />
      <Link
          to="/events/create"
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Event
        </Link>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {events.map((event) => (
          <a
            href={`/events/${event.name}`}
            key={event.title}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow cursor-pointer"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {event.name}
                  </h3>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {event.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
}