import React, { useState, useCallback } from 'react';
import ReactFlow, { 
  Controls, 
  Background, 
  addEdge, 
  useEdgesState, 
  useNodesState 
} from 'reactflow';
import CustomNode from './CustomNode';
import NodeSidebar from './NodeSidebar';

const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
  {
    id: 'branch_0',
    type: 'customNode',
    position: { x: 250, y: 50 },
    data: { 
      label: 'Start', 
      channelType: null 
    },
  }
];

function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback((params) => {
    const connectionType = params.sourceHandle || 'success';
    setEdges((eds) => addEdge({...params, type: connectionType}, eds));
  }, [setEdges]);

  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const handleAddNode = (channelType) => {
    const newNodeId = `id_${nodes.length}`;
    const newNode = {
      id: newNodeId,
      type: 'customNode',
      position: { 
        x: Math.random() * 500, 
        y: Math.random() * 500 
      },
      data: { 
        label: channelType, 
        channelType,
        configuration: null
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  const handleNodeConfigSave = (nodeId, config) => {
    setNodes((nds) => 
      nds.map((node) => 
        node.id === nodeId 
          ? { 
              ...node, 
              data: { 
                ...node.data, 
                configuration: config 
              } 
            }
          : node
      )
    );
    setSelectedNode(null);
  };

  const handleNodeDelete = (nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => 
      edge.source !== nodeId && edge.target !== nodeId
    ));
    setSelectedNode(null);
  };

  const handleFinalSave = () => {
    const workflow = {
      start: 'branch_0',
      branch_0: {
        branch: edges
          .filter(edge => edge.source === 'branch_0')
          .map(edge => edge.target),
      },
    };
  
    // Iterate over all nodes to build the final workflow
    nodes.forEach(node => {
      console.log("Each node", node)
      if (node.data.configuration && node.id !== 'branch_0') {
        const config = node.data.configuration;
        const connectingEdges = edges.filter(edge => edge.source === node.id);
  
        const successEdge = connectingEdges.find(edge => edge.type === 'success');
        const failureEdge = connectingEdges.find(edge => edge.type === 'failure');

        console.log(`Failure Edge ${node.id}`, failureEdge)
  
        // Build node object with correct success and failure conditions
        workflow[node.id] = {
          channels: {
            channel: config.channelType,
            delay: config.delay,
            unit: config.unit,
            provider: [
              {
                integration_id: `I_${Math.random().toString(36).substr(2, 9)}`,
                provider_name: config.provider,
              },
            ],
            height: 142,
            width: 254,
            position: node.position,
            previous_id: '0',
            success: {
              status: {
                in: config.successStatus || [],
              },
              stop: {},
            },
            fail: failureEdge && failureEdge.target
              ? {
                  next: {
                    id: failureEdge.target,
                  },
                }
              : {}, // Ensure fail is set as empty object if no target is available
          },
        };
      }
    });
  
    // Create final payload
    const payload = {
      routing_id: 'RU1B78F7F3',
      routing_name: 'life_time_exchange_common_routing',
      routing_description: '',
      channel_id: 'CROSSCHNL',
      json_data: { workflow },
    };
  
    console.log('Final Workflow Payload:', JSON.stringify(payload, null, 2));
    return payload;
  };

  console.log("edges", edges);
  console.log("nodes", nodes);
  

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-purple-100 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Workflow Builder</h1>
        <button 
          onClick={handleFinalSave}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save Workflow
        </button>
      </div>
      
      <div className="flex flex-grow">
        <div className="w-64 bg-purple-50 p-4 border-r border-purple-200">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Channels</h2>
          <div className="space-y-2">
            {['whatsapp', 'sms', 'email'].map((channel) => (
              <button 
                key={channel}
                onClick={() => handleAddNode(channel)}
                className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                {channel.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-grow h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onNodeClick={handleNodeClick}
            fitView
          >
            <Controls />
            <Background color="#9333ea" variant="dots" />
          </ReactFlow>
        </div>

        {selectedNode && (
          <NodeSidebar 
            node={selectedNode} 
            onClose={() => setSelectedNode(null)}
            onSave={handleNodeConfigSave}
            onDelete={handleNodeDelete}
          />
        )}
      </div>
    </div>
  );
}

export default WorkflowBuilder;
