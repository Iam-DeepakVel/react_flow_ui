import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import WorkflowBuilder from './components/WorkflowBuilder';
import 'reactflow/dist/style.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Workflow Builder</h1>
        <ReactFlowProvider>
          <WorkflowBuilder />
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default App;