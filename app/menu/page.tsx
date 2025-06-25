'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdReport, MdLocationOn } from 'react-icons/md';
import { FaBusAlt, FaMapMarkedAlt } from 'react-icons/fa';

export default function MenuPage() {
  const router = useRouter();
  const [lang, setLang] = useState<'th' | 'en'>('en');

  // ตรวจจับภาษาเบราว์เซอร์
  useEffect(() => {
    const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
    setLang(browserLang as 'th' | 'en');
  }, []);

  const t = (en: string, th: string) => (lang === 'th' ? th : en);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            {t('Tourist Assistance Menu', 'เมนูช่วยเหลือนักท่องเที่ยว')}
          </h1>
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="bg-gray-200 text-sm px-4 py-1 rounded-lg hover:bg-gray-300"
          >
            {lang === 'th' ? 'EN' : 'TH'}
          </button>
        </div>

        <p className="text-gray-600 text-base sm:text-lg mb-10">
          {t('Please select the service you need', 'เลือกบริการที่คุณต้องการ')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-10">
          <MenuCard
            title={t('Emergency Help', 'แจ้งเหตุ')}
            subtitle={t('Call Tourist Police (1155)', 'โทรหาตำรวจท่องเที่ยว (1155)')}
            icon={<MdReport />}
            color="bg-red-500"
            onClick={() => router.push('/sos')}
          />
          <MenuCard
            title={t('Bus Route Finder', 'ดูรถเมล์')}
            subtitle={t('Find public bus routes near you', 'ค้นหาเส้นทางรถโดยสาร')}
            icon={<FaBusAlt />}
            color="bg-yellow-500"
            onClick={() => router.push('/bus')}
          />
          <MenuCard
            title={t('Share GPS Location', 'เช็กอิน')}
            subtitle={t('Send your position for assistance', 'ส่งพิกัดให้เจ้าหน้าที่')}
            icon={<MdLocationOn />}
            color="bg-green-500"
            onClick={() => router.push('/checkin')}
          />
          <MenuCard
            title={t('Tourist Info & Map', 'หน่วยงานที่เกี่ยวข้อง')}
            subtitle={t('Agencies and local map', 'แผนที่ + หน่วยงานท้องถิ่น')}
            icon={<FaMapMarkedAlt />}
            color="bg-blue-500"
            onClick={() => router.push('/tat')}
          />
        </div>
      </div>
    </main>
  );
}

type CardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
};

function MenuCard({ title, subtitle, icon, color, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center min-h-[160px] rounded-2xl px-6 py-8 text-white shadow-xl hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-200 ease-in-out ${color}`}
      aria-label={title}
    >
      <div className="text-6xl mb-4">{icon}</div>
      <div className="text-xl font-bold tracking-wide">{title}</div>
      <div className="text-sm opacity-90 text-center">{subtitle}</div>
    </button>
  );
}
