'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/menu');
    }, 4000); // Auto navigate to menu in 4 sec

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-100 px-4">
      {/* App Name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6 tracking-tight">
        Yindee Hub
      </h1>

      {/* Ad Box */}
      <div className="bg-white border border-blue-200 shadow-xl rounded-2xl p-6 w-full max-w-md text-center animate-fade-in">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">
          🌟 Advertising Available Now!
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Promote your shop or service to international travelers via Yindee Hub right here!
        </p>

        <div className="w-full flex justify-center">
          <Image
            src="/picture/ad-slot-demo.png"
            alt="Ad Slot Demo"
            width={300}
            height={180}
            className="rounded-lg object-cover border shadow-md"
          />
        </div>

        <p className="text-xs text-gray-500 mt-4">
          * Contact us at: <strong>yindeehub@gmail.com</strong>
        </p>
      </div>

      {/* Loading or fallback button */}
      <p className="text-sm text-gray-500 mt-6">Redirecting to main menu...</p>
      <a
        href="/menu"
        className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm shadow"
      >
        Go to Main Menu Now
      </a>
    </main>
  );
}
