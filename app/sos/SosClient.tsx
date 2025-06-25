'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SosPage() {
  const [lang, setLang] = useState<'th' | 'en'>('en');
  const t = (en: string, th: string) => (lang === 'th' ? th : en);

  useEffect(() => {
    const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
    setLang(browserLang as 'th' | 'en');
  }, []);

  return (
    <main className="p-6 text-center relative min-h-screen bg-gradient-to-b from-white to-red-50">
      {/* Language Switch */}
      <button
        onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
        className="absolute top-4 right-4 bg-gray-200 text-sm px-3 py-1 rounded-lg hover:bg-gray-300"
      >
        {lang === 'th' ? 'EN' : 'TH'}
      </button>

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
        🚨 {t('Emergency Reporting', 'แจ้งเหตุฉุกเฉิน')}
      </h1>
      <p className="mb-6 text-gray-700">
        {t(
          'If you are in danger or need assistance, please use the Tourist Police Thailand mobile app.',
          'หากคุณพบเหตุฉุกเฉินหรือต้องการขอความช่วยเหลือ โปรดใช้แอป Tourist Police Thailand'
        )}
      </p>

      {/* App Logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/picture/TPB-LOGO.png"
          alt="Tourist Police App Logo"
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
      </div>

      {/* Download Buttons */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mt-6">
        <a
          href="https://apps.apple.com/th/app/thailand-tourist-police/id6479636779"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-lg shadow hover:scale-105 transition-transform"
        >
          📱 {t('Download on iOS', 'ดาวน์โหลดบน iOS')}
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=tourist.police.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:scale-105 transition-transform"
        >
          🤖 {t('Download on Android', 'ดาวน์โหลดบน Android')}
        </a>
        <a
          href="https://appgallery.huawei.com/app/C112570773"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg shadow hover:scale-105 transition-transform"
        >
          🅷 Huawei AppGallery
        </a>
      </div>

      {/* Step-by-Step Screens */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6 border-b pb-2">
          {t('Step-by-Step Screens', 'ขั้นตอนการใช้งานแบบภาพหน้าจอ')}
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step}>
              <Image
                src={`/picture/TPB${step}.jpg`}
                alt={`Step ${step}`}
                width={300}
                height={500}
                className="mx-auto rounded-xl shadow-md"
              />
              <p className="text-center text-sm mt-2 text-gray-700 font-medium">
                {step}. {
                  t(
                    [
                      'Language Selection Screen',
                      'Sign In Screen',
                      'Create Account Screen (1)',
                      'Create Account Screen (2)',
                      'Emergency Report Screen (1)',
                      'Emergency Report Screen (2)',
                    ][step - 1],
                    [
                      'หน้าจอเลือกภาษา',
                      'หน้าจอเข้าสู่ระบบ',
                      'หน้าจอสร้างบัญชีผู้ใช้ (1)',
                      'หน้าจอสร้างบัญชีผู้ใช้ (2)',
                      'หน้าจอแจ้งเหตุฉุกเฉิน (1)',
                      'หน้าจอแจ้งเหตุฉุกเฉิน (2)',
                    ][step - 1]
                  )
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Use */}
      <div className="mt-14 text-left max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-3">
          {t('How to Use the App', 'วิธีใช้งานเบื้องต้น')}
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>{t('Open the app and allow location access.', 'เปิดแอปและให้สิทธิ์เข้าถึงตำแหน่ง')}</li>
          <li>{t('Tap "Emergency Help" and follow the instructions.', 'แตะ “แจ้งเหตุฉุกเฉิน” แล้วทำตามขั้นตอน')}</li>
          <li>{t('You can also call 1155 directly.', 'สามารถโทร 1155 ได้โดยตรง')}</li>
        </ul>
      </div>

      {/* Back to Menu */}
      <div className="mt-10">
        <a href="/menu" className="text-blue-500 hover:underline text-sm">
          ← {t('Back to Menu', 'ย้อนกลับไปยังเมนู')}
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-xs text-gray-400">
        {t('Powered by Royal Thai Police', 'จัดทำโดยสำนักงานตำรวจแห่งชาติ')}
      </footer>
    </main>
  );
}
