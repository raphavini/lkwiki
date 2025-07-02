import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../types';
import { ChevronDownIcon } from './Icons';

interface SidebarItemProps {
  item: MenuItem;
  level: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, level }) => {
  const [isExpanded, setIsExpanded] = useState(item.defaultExpanded ?? false);

  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = `${1 + level * 1}rem`;

  const baseClasses = 'w-full text-left flex items-center justify-between p-2 my-1 rounded-md text-sm transition-colors duration-200';
  const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';
  const activeClasses = 'bg-indigo-600 text-white font-semibold';

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      {item.path ? (
        <NavLink
          to={`/${item.path}`}
          className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          style={{ paddingLeft }}
        >
          {item.title}
          {hasChildren && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggle();
              }}
              className="p-1 rounded-full hover:bg-gray-600"
            >
              <ChevronDownIcon isExpanded={isExpanded} />
            </button>
          )}
        </NavLink>
      ) : (
        <button
          onClick={handleToggle}
          className={`${baseClasses} ${inactiveClasses}`}
          style={{ paddingLeft }}
        >
          <span className="font-semibold">{item.title}</span>
          {hasChildren && <ChevronDownIcon isExpanded={isExpanded} />}
        </button>
      )}

      {hasChildren && isExpanded && (
        <ul className="pl-4 border-l border-gray-600">
          {item.children.map((child, index) => (
            <SidebarItem key={index} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
