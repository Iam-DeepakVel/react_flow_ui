import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PROVIDERS = {
  whatsapp: ['Freshchat'],
  sms: ['Karix'],
  email: ['SES']
};

const SUCCESS_STATUS_OPTIONS = {
  whatsapp: ['READ', 'DELIVERED', 'CLICKED'],
  sms: ['DELIVERED', 'CLICKED'],
  email: ['DELIVERED', 'CLICKED', 'OPEN']
};

function NodeSidebar({ node, onClose, onSave, onDelete }) {
  const [provider, setProvider] = useState('');
  const [delay, setDelay] = useState(60);
  const [unit, setUnit] = useState('minutes');
  const [successStatus, setSuccessStatus] = useState([]);

  useEffect(() => {
    if (node.data.configuration) {
      setProvider(node.data.configuration.provider);
      setDelay(node.data.configuration.delay);
      setUnit(node.data.configuration.unit);
      setSuccessStatus(node.data.configuration.successStatus || []);
    }
  }, [node]);

  const handleSave = () => {
    if (!provider) {
      alert('Please select a provider');
      return;
    }

    const config = {
      channelType: node.data.channelType,
      provider,
      delay,
      unit,
      successStatus
    };

    onSave(node.id, config);
  };

  const handleSuccessStatusChange = (status) => {
    setSuccessStatus(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="w-80 bg-purple-50 p-6 border-l border-purple-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-purple-700">
          {node.data.channelType?.toUpperCase()} Configuration
        </h2>
        <button
          onClick={onClose}
          className="text-purple-600 hover:text-purple-800"
        >
          Close
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-purple-700 mb-2">Provider</label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="w-full p-2 border rounded text-purple-700"
          >
            <option value="">Select Provider</option>
            {PROVIDERS[node.data.channelType]?.map(prov => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-purple-700 mb-2">Delay</label>
          <div className="flex">
            <input
              type="number"
              value={delay === null ? '' : delay}  
              onChange={(e) => {
                const value = e.target.value;
                setDelay(value === '' ? null : Number(value));  
              }}
              className="w-full p-2 border rounded mr-2 text-purple-700"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="p-2 border rounded text-purple-700"
            >
              <option value="minutes">Minutes</option>
              <option value="seconds">Seconds</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-purple-700 mb-2">Success Status</label>
          <div className="flex flex-wrap gap-2">
            {SUCCESS_STATUS_OPTIONS[node.data.channelType]?.map(status => (
              <button
                key={status}
                onClick={() => handleSuccessStatusChange(status)}
                className={`px-2 py-1 rounded ${successStatus.includes(status)
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-200 text-purple-700'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleSave}
            className="flex-grow py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Save Configuration
          </button>
          <button
            onClick={() => onDelete(node.id)}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

NodeSidebar.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      channelType: PropTypes.string,
      configuration: PropTypes.object
    }).isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default NodeSidebar;
