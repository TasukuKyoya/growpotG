'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'ホーム' },
    { href: '/posts', label: '投稿一覧' },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <div className="text-xl font-bold mb-8 p-2">GrowPot</div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block p-2 mb-2 rounded hover:bg-gray-700 ${
              pathname === item.href ? 'bg-gray-700' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
} 