import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import Heading from "../components/Heading";

const stats = [
  { name: 'Total Templates', stat: '12' },
  { name: 'Total Routings', stat: '8' },
  { name: 'Total Events', stat: '10' },
]

const Dashboard = () => {
  return (
    <>
      <Heading title="Dashboard" subTitle="Welcome to communications dashboard!" icon={LuLayoutDashboard} />
      <div>
        <h3 className="text-base font-semibold text-gray-900">Communication Dashboard Stats</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>

  )
}

export default Dashboard

