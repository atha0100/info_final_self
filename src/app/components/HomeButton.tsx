'use client';

import { useRouter } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function HomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="fixed top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
      title="Go to Home"
    >
      <HomeIcon className="w-6 h-6 text-gray-600" />
    </button>
  );
}
