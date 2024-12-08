import React, { useState } from 'react';


const CreateEvent = () => {
  const [formData, setFormData] = useState({
    event: '',
    template: '',
    routing: '',
  });

  const templateNames = ['Template 1', 'Template 2', 'Template 3']; // Replace with actual template names
  const routingNames = ['Routing 1', 'Routing 2', 'Routing 3']; // Replace with actual routing names

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveEvent = () => {
    console.log('Saved Event:', formData);
    alert(`Saved Event: ${JSON.stringify(formData)}`);
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-6">Create Event</div>

      <div className='w-1/2'>
        <div className="mb-4">
          <label
            htmlFor="routingName"
            className="block mb-1 font-medium text-gray-700"
          >
            Event Name
          </label>
          <input
            id="eventName"
            name="event"
            type="text"
            value={formData.event}
            onChange={handleInputChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="Enter Event Name"
          />
        </div>

        {/* Template Name Dropdown */}
        <div className="mb-4">
          <label htmlFor="template" className="block text-sm font-medium text-gray-900">
            Template Name
          </label>
          <select
            id="template"
            name="template"
            value={formData.template}
            onChange={handleInputChange}
            className="block w-full mt-2 rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select Template
            </option>
            {templateNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Routing Name Dropdown */}
        <div className="mb-6">
          <label htmlFor="routing" className="block text-sm font-medium text-gray-900">
            Routing Name
          </label>
          <select
            id="routing"
            name="routing"
            value={formData.routing}
            onChange={handleInputChange}
            className="block w-full mt-2 rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select Routing
            </option>
            {routingNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Save Event Button */}
      <button
        type="button"
        onClick={handleSaveEvent}
        className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none"
      >
        Save Event
      </button>
    </div>
  );
};

export default CreateEvent;
