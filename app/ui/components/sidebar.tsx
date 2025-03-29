'use client';

import { useState } from 'react';

export default function GeneratorLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="h-full fixed top-0 left-0">
      <aside
        className={`bg-[#EDE2D6] h-full text-[#1E1E26] p-4 transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-64'
        } flex flex-col justify-between`}
      >
        <div>
          <button
            onClick={toggleSidebar}
            className="mb-4 p-2 bg-[#F6ECE1] hover:bg-[#E2D4C4] rounded w-full"
          >
            {collapsed ? '>' : '<'}
          </button>
          <nav>
            <ul className="space-y-2 text-[#1E1E26]">
              <li className="hover:bg-[#F6ECE1] p-2 rounded">
                {!collapsed ? <span>Новый чат</span> : <span>+</span>}
              </li>
              <li className="hover:bg-[#F6ECE1] p-2 rounded">
                {!collapsed ? <span>Чат 1</span> : <span>1</span>}
              </li>
              <li className="hover:bg-[#F6ECE1] p-2 rounded">
                {!collapsed ? <span>Чат 2</span> : <span>2</span>}
              </li>
            </ul>
          </nav>
        </div>
        <div>
        </div>
      </aside>
    </div>
  );
}
