import React from 'react';
import 'reactflow/dist/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import DashboardLayout from './common/DashboardLayout';
import Dashboard from './containers/Dashboard'; // import your Analytics component
import RoutingList from './containers/RoutingList'; // import your RoutingList component
import NotFound from './common/NotFound'; // import your NotFound component
import WorkflowBuilder from './containers/WorkflowBuilder';
import TemplateList from './containers/TemplateList';
import EventList from './containers/EventList';
import Template from './containers/Template';
import CreateTemplate from './containers/CreateTemplate'


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />

          <Route path="/routings" element={
            <DashboardLayout>
              <RoutingList />
            </DashboardLayout>
          } />

          <Route path="/templates" element={
            <DashboardLayout>
              <TemplateList />
            </DashboardLayout>
          } />

          <Route path="/events" element={
            <DashboardLayout>
              <EventList />
            </DashboardLayout>
          } />

          <Route path="/routings/:id" element={
            <DashboardLayout>
              <ReactFlowProvider>
                <WorkflowBuilder />
              </ReactFlowProvider>
            </DashboardLayout>
          } />

          <Route path="/templates/create" element={
            <DashboardLayout>
              <CreateTemplate />
            </DashboardLayout>
          } />

          <Route path="/templates/:id" element={
            <DashboardLayout>
              <Template />
            </DashboardLayout>
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
