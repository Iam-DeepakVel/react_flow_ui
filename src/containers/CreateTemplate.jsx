import React, { useState } from 'react';

const CreateTemplate = () => {
  const [selectedChannel, setSelectedChannel] = useState('sms');
  const [formData, setFormData] = useState({
    templateName: '',
    channels: {
      sms: {
        content: '',
        useTemplate: false,
      },
      whatsapp: {
        id: '',
        useTemplate: false,
      },
      email: {
        content: '',
        useTemplate: false,
      },
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'templateName') {
      setFormData((prevData) => ({
        ...prevData,
        templateName: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        channels: {
          ...prevData.channels,
          [selectedChannel]: {
            ...prevData.channels[selectedChannel],
            [selectedChannel === 'whatsapp' ? 'id' : 'content']: value,
          },
        },
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      channels: {
        ...prevData.channels,
        [selectedChannel]: {
          ...prevData.channels[selectedChannel],
          useTemplate: checked,
        },
      },
    }));
  };

  const handleSaveConfiguration = () => {
    console.log('Saved Configuration:', formData);
    alert(`Saved Configuration: ${JSON.stringify(formData, null, 2)}`);
  };

  const channels = ['sms', 'email', 'whatsapp'];

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className="text-2xl font-semibold mb-8">Create Template</div>
        <button
          type="button"
          className="mb-4 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
          onClick={handleSaveConfiguration}
        >
          Save Configuration
        </button>
      </div>

      {/* Template name input */}
      <div className='w-1/2'>
        <label htmlFor="templateName" className="block text-sm/6 font-medium text-gray-900">
          Template Name
        </label>
        <div className="mt-2">
          <input
            id="templateName"
            name="templateName"
            type="text"
            placeholder="Enter Template Name"
            value={formData.templateName}
            onChange={handleInputChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      {/* Channels & its content section */}
      <div className="flex items-center gap-12">
        <div>
          <h2 className='font-semibold text-lg mb-4'>Channels</h2>
          <div className="flex flex-col gap-4">
            {channels.map((channel) => (
              <button
                key={channel}
                type="button"
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ${selectedChannel === channel
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-200 text-indigo-600 hover:bg-indigo-300'
                  }`}
                onClick={() => setSelectedChannel(channel)}
              >
                {channel.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/2 mt-12">
          <div className="mb-3">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={formData.channels[selectedChannel].useTemplate}
                onChange={handleCheckboxChange}
                className="mr-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
              />
              Use Template
            </label>
          </div>

          {selectedChannel === 'whatsapp' ? (
            <div className="sm:col-span-4 mb-6">
              <label htmlFor="templateId" className="block text-sm/6 font-medium text-gray-900">
                Template Id
              </label>
              <div className="mt-2">
                <input
                  id="templateId"
                  name="templateId"
                  type="text"
                  placeholder="Enter Template Id"
                  value={formData.channels.whatsapp.id}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          ) : (
            <div className="col-span-full">
              <label htmlFor="content" className="block text-sm/6 font-medium text-gray-900">
                {selectedChannel.toUpperCase()} Template Content
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  rows={6}
                  value={formData.channels[selectedChannel].content}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder={`Enter your ${selectedChannel.toLowerCase()} content here`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateTemplate;
