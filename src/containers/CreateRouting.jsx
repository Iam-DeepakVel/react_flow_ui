import WorkflowBuilder from "./WorkflowBuilder"
import { useState } from "react";

const CreateRouting = () => {
  const [routingName, setRoutingName] = useState('');

  return (
    <>
      <div className="text-xl font-bold mb-4">Create Routing</div>
      {/* Input for Routing Name */}
      <div className="w-1/2 mb-8">
        <label
          htmlFor="routingName"
          className="block mb-1 font-medium text-gray-700"
        >
          Routing Name
        </label>
        <input
          id="routingName"
          type="text"
          value={routingName}
          onChange={(e) => setRoutingName(e.target.value)}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          placeholder="Enter routing name"
        />
      </div>
      <WorkflowBuilder routingName={routingName}/>
    </>
  )
}

export default CreateRouting