import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <>
      <Heading title="Dashboard" subTitle="Welcome to communications dashboard!" icon={LuLayoutDashboard} />
      <div>Welcome to communications dashboard!</div>
    </>

  )
}

export default Dashboard