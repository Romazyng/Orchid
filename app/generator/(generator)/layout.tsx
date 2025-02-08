'use client';

import Background from '@/app/ui/background';
import { useState } from 'react';

export default function GeneratorLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="flex h-screen">
      <Background/>
      <aside
        className={`bg-[#343541] bg-opacity-50 text-white p-4 transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-64'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="mb-4 p-2 bg-[#343541] hover:bg-[#393b4a] rounded w-full"
        >
          {collapsed ? '>' : '<'}
        </button>
        <nav>
          <ul className="space-y-2">
            <li className="hover:bg-[#484b52] p-2 rounded">
              {!collapsed ? <span>Новый чат</span> : <span>+</span>}
            </li>
            <li className="hover:bg-[#484b52] p-2 rounded">
              {!collapsed ? <span>Чат 1</span> : <span>1</span>}
            </li>
            <li className="hover:bg-[#484b52] p-2 rounded">
              {!collapsed ? <span>Чат 2</span> : <span>2</span>}
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
