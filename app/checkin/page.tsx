'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CheckinPage() {
  const [lang, setLang] = useState<'en' | 'th'>('en');
  const t = (en: string, th: string) => (lang === 'th' ? th : en);

  // ตรวจภาษาจาก browser
  useEffect(() => {
    const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
    setLang(browserLang as 'th' | 'en');
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50 px-4 text-center relative">
      {/* Language Switch */}
      <button
        onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
        className="absolute top-4 right-4 bg-gray-200 text-sm px-3 py-1 rounded-lg hover:bg-gray-300"
      >
        {lang === 'th' ? 'EN' : 'TH'}
      </button>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
        📍 {t('Check In to This Location', 'เช็กอินที่นี่')}
      </h1>

      {/* Description */}
      <p className="text-gray-700 max-w-md text-sm mb-6">
        {t(
          'When you check in at your current location, you’ll get a chance to win free gifts from local stores!',
          'เมื่อคุณเช็กอินที่สถานที่นี้ คุณจะได้รับสิทธิ์ลุ้นรับของรางวัลฟรีจากร้านค้าท้องถิ่น!'
        )}
      </p>

      {/* Image */}
      <div className="mb-6">
        <Image
          src="/picture/checkin-gift.png"
          alt="Check-In Gift"
          width={300}
          height={200}
          className="rounded-xl shadow"
        />
      </div>

      {/* Button */}
      <button
        onClick={() => alert(t('✅ Checked in! You have a chance to win!', '✅ เช็กอินสำเร็จ! คุณได้รับสิทธิ์ลุ้นรางวัล!'))}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md text-lg transition-transform hover:scale-105"
      >
        🎉 {t('Check In Now', 'เช็กอินเลย')}
      </button>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-8 max-w-xs">
        {t(
          'Location data is used only to verify you are near a partnered tourist attraction.',
          'ข้อมูลตำแหน่งจะถูกใช้เพื่อยืนยันว่าคุณอยู่ใกล้สถานที่ท่องเที่ยวที่ร่วมรายการเท่านั้น'
        )}
      </p>
    </main>
  );
}
