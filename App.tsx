import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import WikiPage from './components/WikiPage';
import { menuConfig } from './data/menu';
import { MenuIcon, XIcon } from './components/Icons';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:justify-end">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            {isSidebarOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
          <Routes>
            <Route path="/" element={<Navigate to="/introducao" replace />} />
            <Route path="/*" element={<WikiPage />} />
          </Routes>
        </div>
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;