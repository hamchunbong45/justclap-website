'use client';

import { useParams } from 'next/navigation';
import { realGymsInSeoul } from '../../../data/gyms'; // Import the data
import Link from 'next/link';
import { MapPin, Phone, Clock, Dumbbell, List, ArrowLeft } from 'lucide-react';

export default function GymDetailPage() {
  const params = useParams();
  const { id } = params;

  const gym = realGymsInSeoul.find(g => g.id === parseInt(id));

  if (!gym) {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-400 mb-4">체육관을 찾을 수 없습니다.</h1>
        <Link href="/gym-search">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> 목록으로 돌아가기
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <Link href="/gym-search">
          <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 flex items-center mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> 목록으로 돌아가기
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{gym.title}</h1>
        <p className="text-gray-300 mb-6">{gym.description}</p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center text-lg">
            <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
            <span>{gym.roadAddress}</span>
          </div>
          <div className="flex items-center text-lg">
            <Phone className="w-5 h-5 mr-3 text-yellow-400" />
            <span>{gym.telephone !== '전화번호 정보 없음' ? gym.telephone : '문의: 네이버 상세보기'}</span>
          </div>
          <div className="flex items-center text-lg">
            <Clock className="w-5 h-5 mr-3 text-yellow-400" />
            <span>{gym.operatingHours}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-yellow-400 mb-3">주요 시설</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          {gym.facilities.map((facility, index) => (
            <li key={index} className="flex items-center"><Dumbbell className="w-4 h-4 mr-2" /> {facility}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-yellow-400 mb-3">주요 서비스</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          {gym.services.map((service, index) => (
            <li key={index} className="flex items-center"><List className="w-4 h-4 mr-2" /> {service}</li>
          ))}
        </ul>

        {/* Placeholder for Reviews and Matching */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">리뷰 및 매칭 (향후 구현 예정)</h2>
          <p className="text-gray-400">이 섹션에는 체육관 리뷰와 스파링 매칭 정보가 표시될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
}