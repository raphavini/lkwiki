import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../types';
import { menuConfig } from '../data/menu';
import SidebarItem from './SidebarItem';
import { BookIcon } from './Icons';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        flex flex-col bg-gray-800 text-gray-300 transition-all duration-300 ease-in-out
        ${isOpen ? 'w-72' : 'w-0'} overflow-hidden
      `}
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-700 flex-shrink-0 px-4">
         <BookIcon />
        <h1 className="text-xl font-bold text-white ml-2 whitespace-nowrap">Rad Wiki</h1>
      </div>
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4">
        <ul>
          {menuConfig.map((item, index) => (
            <SidebarItem key={index} item={item} level={0} />
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700 flex-shrink-0">
        <p className="text-xs text-center text-gray-500 whitespace-nowrap">© 2025 Radhark Corp</p>
      </div>
    </aside>
  );
};

export default Sidebar;
