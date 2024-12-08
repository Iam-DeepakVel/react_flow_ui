import { IoGitNetworkSharp } from "react-icons/io5";
import Heading from "../components/Heading";

const workflows = [
  {
    name: 'pop_enrollment_workflow',
    title: 'POP Enrollment Communication Workflow',
    icon: '🚀'
  },

  {
    name: 'pop_redemption_workflow',
    title: 'POP Redemption Communication Workflow',
    icon: '🚀'
  },

  {
    name: 'pop_cancellation_workflow',
    title: 'POP Cancellation Communication Workflow',
    icon: '🚀',
  },
]

export default function RoutingList() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading title="Routings" subTitle="List of workflows!" icon={IoGitNetworkSharp} />
        <button
          type="button"
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Routing
        </button>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {workflows.map((workflow) => (
          <a
            href={`/routings/${workflow.name}`}
            key={workflow.title}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow cursor-pointer"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {workflow.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {workflow.icon}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {workflow.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
}