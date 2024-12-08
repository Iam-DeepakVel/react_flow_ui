import Heading from "../components/Heading";
import { AiOutlineNotification } from "react-icons/ai";

const EventList = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Notification Events" subTitle="List of all available notification events!" icon={AiOutlineNotification} />
        <button
          type="button"
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Event
        </button>
      </div>
      <div>Events</div>
    </>
  )
}

export default EventList