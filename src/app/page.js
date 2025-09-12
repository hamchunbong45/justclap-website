'use client';

import { MapPin, Building, Users, BarChart, Search, Handshake, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">JustClap</h1>
          <ul className="flex space-x-6">
            <li><a href="#intro" className="hover:text-yellow-400">법인 소개</a></li>
            <li><a href="#services" className="hover:text-yellow-400">핵심 기능</a></li>
            <li><a href="#partner" className="hover:text-yellow-400">파트너십</a></li>
            <li><a href="#ceo" className="hover:text-yellow-400">대표이사 인사말</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden -mt-24">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          <div className="relative z-20 px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight uppercase">
              "JUST CLAP
              <br />
              WITH YOUR LIMIT."
            </h2>
            <p className="text-lg md:text-xl text-gray-200 tracking-widest mt-6">
              매칭 / 예약 / 클럽 / 레슨
            </p>
          </div>
        </section>

        {/* Trust Elements Section */}
        <section className="py-16">
          {/* Partner Logos */}
          <div className="bg-gray-800 rounded-lg py-8 mb-12">
            <div className="container mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-400 tracking-widest">
                런칭 준비 중 · 파트너 모집
              </h3>
            </div>
          </div>

          {/* User Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">검증된 도장</h4>
              <p className="text-gray-400 max-w-xs">
                등록된 도장은 사전 심사 과정을 거쳐 신뢰할 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">레벨 매칭</h4>
              <p className="text-gray-400 max-w-xs">
                실력·체급·연령에 맞는 파트너와 안전하게 스파링.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-12 h-12 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">보험/안전 가이드</h4>
              <p className="text-gray-400 max-w-xs">
                이용자 보호를 위한 안전 가이드라인과 선택적 보험 제공.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 scroll-mt-20">
          <div className="text-center px-4">
            <BarChart className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold mb-8">핵심 기능</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-800 p-8 rounded-lg text-center flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">1. 전국 도장 검색 & 예약</h4>
                <p className="text-gray-400">MMA, 킥복싱, 주짓수, 복싱 등 전국의 모든 도장을 쉽게 찾고, 투어 예약과 멤버십 가입까지 한번에 해결하세요.</p>
              </div>
              <button onClick={() => alert('Coming Soon!')} className="mt-6 bg-gray-700 text-yellow-400 font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors w-full">도장 검색 열기</button>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">2. 도장 대여</h4>
                <p className="text-gray-400">개인 훈련이나 소규모 그룹을 위한 도장 공간을 필요한 시간만큼 대여하고 이용할 수 있습니다.</p>
              </div>
              <a href="#partner" className="mt-6 bg-gray-700 text-yellow-400 font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors w-full block">대여 문의</a>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">3. 스파링 파트너 매칭</h4>
                <p className="text-gray-400">나와 실력이 비슷한 스파링 파트너를 찾아 함께 훈련하며 실력을 향상시킬 수 있는 기회를 제공합니다.</p>
              </div>
              <button onClick={() => alert('Coming Soon!')} className="mt-6 bg-gray-700 text-yellow-400 font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors w-full">매칭 베타 신청</button>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">4. 온라인 클래스</h4>
                <p className="text-gray-400">최고 수준의 지도자들에게 언제 어디서든 기술을 배울 수 있는 고품질 온라인 클래스를 제공합니다.</p>
              </div>
              <button onClick={() => alert('오픈 시 알림을 보내드리겠습니다!')} className="mt-6 bg-gray-700 text-yellow-400 font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors w-full">오픈 알림 신청</button>
            </div>
          </div>

          {/* Gym Search MVP */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-4 text-center text-yellow-400">도장 바로 검색하기</h4>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="flex flex-col">
                <label htmlFor="region" className="mb-2 text-sm font-medium text-gray-400">지역</label>
                <select id="region" className="bg-gray-700 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>서울</option>
                  <option>경기</option>
                  <option>인천</option>
                  <option>부산</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="type" className="mb-2 text-sm font-medium text-gray-400">종목</label>
                <select id="type" className="bg-gray-700 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>MMA</option>
                  <option>킥복싱</option>
                  <option>주짓수</option>
                  <option>복싱</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="time" className="mb-2 text-sm font-medium text-gray-400">시간대</label>
                <select id="time" className="bg-gray-700 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>오전</option>
                  <option>오후</option>
                  <option>저녁</option>
                  <option>무관</option>
                </select>
              </div>
              <button type="button" className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-500 flex items-center justify-center">
                <Search className="mr-2 h-5 w-5"/> 검색하기
              </button>
            </form>
          </div>
        </section>

        {/* Partner Onboarding Form */}
        <section id="partner" className="py-16 bg-gray-800 rounded-lg mb-16 scroll-mt-20">
          <div className="text-center px-4">
            <Handshake className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">도장 파트너 모집</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-8">JustClap과 함께 더 많은 회원을 만나고, 도장 운영을 효율화하세요.</p>
          </div>
          <form className="max-w-2xl mx-auto space-y-6 px-4">
            <div>
              <label htmlFor="gym-name" className="block mb-2 text-sm font-medium text-gray-300">사업자명 (도장 이름)</label>
              <input type="text" id="gym-name" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="예: 강남 저스트클랩 복싱짐" />
            </div>
            <div>
              <label htmlFor="gym-location" className="block mb-2 text-sm font-medium text-gray-300">도장 위치</label>
              <input type="text" id="gym-location" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="예: 서울시 강남구 테헤란로 123" />
            </div>
            <div>
              <label htmlFor="rental-info" className="block mb-2 text-sm font-medium text-gray-300">대여 가능 시간 및 요금</label>
              <textarea id="rental-info" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="예: 평일 14:00 - 17:00 (시간당 20,000원), 주말 09:00 - 12:00 (시간당 30,000원)"></textarea>
            </div>
            <fieldset>
              <legend className="block mb-2 text-sm font-medium text-gray-300">스파링 심판 지원 여부</legend>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input id="referee-yes" type="radio" name="referee" value="yes" className="w-4 h-4 text-yellow-400 bg-gray-700 border-gray-600 focus:ring-yellow-500" />
                  <label htmlFor="referee-yes" className="ml-2 text-sm text-gray-300">지원 가능</label>
                </div>
                <div className="flex items-center">
                  <input id="referee-no" type="radio" name="referee" value="no" className="w-4 h-4 text-yellow-400 bg-gray-700 border-gray-600 focus:ring-yellow-500" />
                  <label htmlFor="referee-no" className="ml-2 text-sm text-gray-300">지원 불가</label>
                </div>
              </div>
            </fieldset>
            <button type="button" className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-5 rounded-lg hover:bg-yellow-500 transition-colors">파트너십 신청하기</button>
          </form>
        </section>

        {/* CEO Greeting */}
        <section id="ceo" className="py-16 scroll-mt-20">
          <div className="text-center px-4">
            <img
              src="/ceo-photo.jpg"
              alt="대표이사 민수홍 사진"
              width="128"
              height="128"
              className="rounded-full mx-auto mb-6 border-4 border-gray-700"
            />
            <h3 className="text-3xl font-bold mb-4">대표이사 인사말</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-400">
              "격투기 스포츠에 대한 열정 하나로 이 길을 걸어왔습니다. '저스트클랩'은 선수와 지도자, 그리고 팬 모두가 상생할 수 있는 건강한 생태계를 만드는 첫걸음이 될 것입니다. 많은 관심과 응원 부탁드립니다."
              <br />
              <br />
              - 대표이사 민수홍
            </p>
          </div>
        </section>

        {/* Location Section (Previously Intro) */}
        <section id="intro" className="py-16 bg-gray-800 rounded-lg mb-16 scroll-mt-20">
          <div className="text-center px-4">
            <Building className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold mb-4">법인 소개</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-400">
              (주)저스트클랩은 격투기 스포츠를 사랑하는 모든 이들을 위한 혁신적인 IT 솔루션을 제공하기 위해 설립되었습니다. 우리는 파편화된 격투기 시장을 하나로 묶고, 선수와 지도자, 그리고 팬들이 더 나은 환경에서 스포츠를 즐길 수 있도록 돕는 것을 목표로 합니다.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-16 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JustClap Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
