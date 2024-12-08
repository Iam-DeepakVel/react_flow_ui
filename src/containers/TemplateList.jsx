import { TbTemplate } from "react-icons/tb";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const templates = [
  {
    name: 'pop_enrollment',
    title: 'POP Enrollment Communication Template',
    icon: '🚀'
  },

  {
    name: 'pop_redemption',
    title: 'POP Redemption Communication Template',
    icon: '🚀'
  },

  {
    name: 'pop_cancellation',
    title: 'POP Cancellation Communication Template',
    icon: '🚀',
  },
]

export default function TemplateList() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading title="Templates" subTitle="List of templates!" icon={TbTemplate} />
        <Link
          to="/templates/create"
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Template
        </Link>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {templates.map((template) => (
          <a
            href={`/templates/${template.name}`}
            key={template.title}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow cursor-pointer"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {template.name}
                  </h3>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {template.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
}