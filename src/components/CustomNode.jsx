import React from 'react';
import { Handle, Position } from 'reactflow';
import PropTypes from 'prop-types';

function CustomNode({ data }) {
  const renderNodeContent = () => {
    if (data.configuration) {
      return (
        <div className="text-center">
          <div>{data.channelType?.toUpperCase()}</div>
          <div className="text-xs text-gray-200">
            {data.configuration.provider}
          </div>
          <div className="text-xs text-gray-200">
            {data.configuration.delay} {data.configuration.unit}
          </div>
          {data.configuration.successStatus && (
            <div className="text-xs text-gray-200 mt-1">
              Success: {data.configuration.successStatus.join(', ')}
            </div>
          )}
        </div>
      );
    }
    return data.channelType?.toUpperCase() || data.label;
  };

  return (
    <div className="bg-purple-600 text-white p-4 rounded-lg shadow-md">
      {data.label !== "Start" && <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#9333ea' }}
      />}
      <div className="text-center">
        {renderNodeContent()}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="success"
        style={{ background: 'green' }}
      />
      {data.label !== "Start" && <Handle
        type="source"
        position={Position.Right}
        id="failure"
        style={{ background: 'red' }}
      />}
    </div>
  );
}

CustomNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    channelType: PropTypes.string,
    configuration: PropTypes.object
  }).isRequired
};

export default CustomNode;
