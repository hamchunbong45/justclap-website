'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { Phone, MapPin } from 'lucide-react';

// --- 실제 서울 복싱 체육관 데이터 ---
const realGymsInSeoul = [
  {
    id: 1,
    title: '홍수환스타복싱체육관',
    roadAddress: '서울 강남구 대치동 897-10',
    telephone: '전화번호 정보 없음',
    link: 'https://map.naver.com/p/entry/place/11592930',
    lat: 37.499505,
    lng: 127.052380,
  },
  {
    id: 2,
    title: '복싱스페이스 압구정점',
    roadAddress: '서울 강남구 압구정로 114',
    telephone: '전화번호 정보 없음',
    link: 'https://map.naver.com/p/entry/place/13146549',
    lat: 37.527661,
    lng: 127.040704,
  },
  {
    id: 3,
    title: '김정범 파워 복싱클럽',
    roadAddress: '서울 강동구 성내동 384-18',
    telephone: '전화번호 정보 없음',
    link: 'https://map.naver.com/p/entry/place/18884959',
    lat: 37.532957,
    lng: 127.133074,
  },
  {
    id: 4,
    title: '대원권투체육관',
    roadAddress: '서울 관악구 봉천동 40-67',
    telephone: '전화번호 정보 없음',
    link: 'https://map.naver.com/p/entry/place/11722937',
    lat: 37.486368,
    lng: 126.956418,
  },
  {
    id: 5,
    title: '숭민권투체육관',
    roadAddress: '서울 광진구 광나루로 404',
    telephone: '전화번호 정보 없음',
    link: 'https://map.naver.com/p/entry/place/19882021',
    lat: 37.545338,
    lng: 127.080996,
  },
];

const NaverMapComponent = ({ gyms }) => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도 생성
    const map = new naver.maps.Map(mapElement.current, {
      center: new naver.maps.LatLng(37.52, 127.05), // 서울 중심부로 변경
      zoom: 11,
    });

    // 마커 생성
    gyms.forEach((gym) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(gym.lat, gym.lng),
        map: map,
        title: gym.title,
      });
    });
  }, [gyms]);

  return <div ref={mapElement} style={{ width: '100%', height: '100%' }} />;
};

export default function GymSearchPage() {
  const clientId = 'ken4cfbqwd';

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`}
      />
      <div className="bg-gray-900 text-white min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Left: List */}
        <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">서울 복싱 체육관 목록</h2>
          <div className="space-y-4">
            {realGymsInSeoul.map((gym) => (
              <div key={gym.id} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{gym.title}</h3>
                <p className="text-gray-400 flex items-center mt-2"><MapPin className="w-4 h-4 mr-2" /> {gym.roadAddress}</p>
                <p className="text-gray-400 flex items-center mt-1"><Phone className="w-4 h-4 mr-2" /> {gym.telephone}</p>
                <div className="mt-2 flex space-x-2">
                    <a href={gym.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600">네이버 지도에서 보기</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Map */}
        <div className="md:col-span-2 rounded-lg overflow-hidden">
          <NaverMapComponent gyms={realGymsInSeoul} />
        </div>
      </div>
    </>
  );
}
