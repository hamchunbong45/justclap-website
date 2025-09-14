'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { Phone, MapPin, Copy } from 'lucide-react';

import { realGymsInSeoul } from '../../data/gyms';

const NaverMapComponent = ({ gyms, onGymClick, userLocation }) => {
  const mapElement = useRef(null);
  const mapInstance = useRef(null);
  const markers = useRef({});
  const infoWindow = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도 생성
    const initialCenter = userLocation ? new naver.maps.LatLng(userLocation.lat, userLocation.lng) : new naver.maps.LatLng(37.52, 127.05); // 서울 중심부 또는 사용자 위치
    const map = new naver.maps.Map(mapElement.current, {
      center: initialCenter,
      zoom: 11,
    });
    mapInstance.current = map;

    // InfoWindow 생성
    infoWindow.current = new naver.maps.InfoWindow({
      content: '',
      maxWidth: 200,
      backgroundColor: '#eee',
      borderColor: '#2db400',
      borderWidth: 1,
      anchorSkew: true,
    });

    // 마커 생성
    gyms.forEach((gym) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(gym.lat, gym.lng),
        map: map,
        title: gym.title,
      });

      markers.current[gym.id] = marker;

      naver.maps.Event.addListener(marker, 'click', () => {
        if (infoWindow.current.getMap()) {
          infoWindow.current.close();
        } else {
          infoWindow.current.setContent(`<div style="padding:10px;"><b>${gym.title}</b><br>${gym.roadAddress}</div>`);
          infoWindow.current.open(map, marker);
        }
      });
    });
  }, [gyms]);

  useEffect(() => {
    const { naver } = window;
    if (!naver || !mapInstance.current || !infoWindow.current) return;

    // onGymClick prop이 변경될 때마다 호출될 함수
    if (onGymClick) {
      const gym = gyms.find(g => g.id === onGymClick.gymId);
      if (gym) {
        const marker = markers.current[gym.id];
        if (marker) {
          mapInstance.current.panTo(marker.getPosition());
          infoWindow.current.setContent(`<div style="padding:10px;"><b>${gym.title}</b><br>${gym.roadAddress}</div>`);
          infoWindow.current.open(mapInstance.current, marker);
        }
      }
    }
  }, [onGymClick, gyms]);

  return <div ref={mapElement} style={{ width: '100%', height: '100%' }} />;
};

export default function GymSearchPage() {
  const clientId = 'ken4cfbqwd';
  const [selectedGymId, setSelectedGymId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('all'); // 'all', 'boxing', 'jiujitsu'

  const handleGymClick = (gymId) => {
    setSelectedGymId({ gymId });
  };

  const [userLocation, setUserLocation] = useState(null); // { lat, lng }

  // Haversine formula to calculate distance between two lat/lng points
  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Earth's radius in kilometers

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
          // Optionally set a default location or show an error message
        }
      );
    }
  }, []);

  const filteredGyms = realGymsInSeoul.filter(gym => {
    const matchesSearchTerm = gym.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              gym.roadAddress.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === 'all' || gym.sports.includes(selectedSport);

    const isInRange = true; // Temporarily disable distance filtering for debugging

    return matchesSearchTerm && matchesSport && isInRange;
  });

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`}
      />
      <div className="bg-gray-900 text-white min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Search and Filter Controls */}
        <div className="md:col-span-3 bg-gray-800 rounded-lg p-4 mb-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="체육관 이름 또는 주소 검색..."
            className="flex-1 p-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              className={`py-2 px-4 rounded-md font-bold ${selectedSport === 'all' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              onClick={() => setSelectedSport('all')}
            >
              전체
            </button>
            <button
              className={`py-2 px-4 rounded-md font-bold ${selectedSport === 'boxing' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              onClick={() => setSelectedSport('boxing')}
            >
              복싱
            </button>
            <button
              className={`py-2 px-4 rounded-md font-bold ${selectedSport === 'jiujitsu' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              onClick={() => setSelectedSport('jiujitsu')}
            >
              주짓수
            </button>
          </div>
        </div>

        {/* Left: List */}
        <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">서울 복싱 체육관 목록</h2>
          <div className="space-y-4">
            {filteredGyms.map((gym) => (
              <div
                key={gym.id}
                className="bg-gray-700 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-600 transition-colors"
                onClick={() => handleGymClick(gym.id)}
              >
                <h3 className="text-xl font-bold">{gym.title}</h3>
                <p className="text-gray-400 flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-2" /> {gym.roadAddress}
                  <Copy
                    className="w-4 h-4 ml-2 cursor-pointer text-gray-500 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering gym click
                      navigator.clipboard.writeText(gym.roadAddress);
                      alert('주소가 복사되었습니다!'); // Simple feedback
                    }}
                  />
                </p>
                <p className="text-gray-400 flex items-center mt-1">
                  <Phone className="w-4 h-4 mr-2" />
                  {gym.telephone !== '전화번호 정보 없음' ? gym.telephone : '문의: 네이버 상세보기'}
                </p>
                <div className="mt-2 flex space-x-2">
                  <a href={`/gyms/${gym.id}`} className="flex-1 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
                    상세설명
                  </a>
                  <a href={`/gyms/${gym.id}/review`} className="flex-1 text-center bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600">
                    리뷰
                  </a>
                  <a href={`/gyms/${gym.id}/matching`} className="flex-1 text-center bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600">
                    매칭
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Map */}
        <div className="md:col-span-2 rounded-lg overflow-hidden h-full">
          <NaverMapComponent
            gyms={filteredGyms}
            onGymClick={selectedGymId}
            userLocation={userLocation}
          />
        </div>
      </div>
    </>
  );
}
