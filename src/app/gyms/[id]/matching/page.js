// src/app/gyms/[id]/matching/page.js
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, Clock } from 'lucide-react';

export default function GymMatchingPage() {
  const params = useParams();
  const { id } = params;

  // Dummy data for matches
  const dummyMatches = [
    {
      id: 1,
      title: '초보자 복싱 스파링',
      date: '2025-09-20',
      time: '19:00',
      participants: '2/4',
      level: '초급',
    },
    {
      id: 2,
      title: '주짓수 롤링 (중급)',
      date: '2025-09-21',
      time: '14:00',
      participants: '3/6',
      level: '중급',
    },
    {
      id: 3,
      title: '고급 복싱 스파링',
      date: '2025-09-22',
      time: '20:00',
      participants: '1/2',
      level: '고급',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <Link href={`/gyms/${id}`}>
          <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 flex items-center mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> 상세 페이지로 돌아가기
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">매칭 목록 (체육관 ID: {id})</h1>

        {dummyMatches.length > 0 ? (
          <div className="space-y-4">
            {dummyMatches.map((match) => (
              <div key={match.id} className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-yellow-300 mb-2">{match.title}</h2>
                <p className="flex items-center text-gray-300 mb-1"><Calendar className="w-4 h-4 mr-2" /> {match.date}</p>
                <p className="flex items-center text-gray-300 mb-1"><Clock className="w-4 h-4 mr-2" /> {match.time}</p>
                <p className="flex items-center text-gray-300 mb-1"><Users className="w-4 h-4 mr-2" /> {match.participants} ({match.level})</p>
                <button className="mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
                  매칭 참여
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">현재 진행 중인 매칭이 없습니다.</p>
        )}
      </div>
    </div>
  );
}