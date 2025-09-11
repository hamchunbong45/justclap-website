import { MapPin, Building, BarChart } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">JustClap</h1>
          <ul className="flex space-x-6">
            <li><a href="#intro" className="hover:text-yellow-400">법인 소개</a></li>
            <li><a href="#services" className="hover:text-yellow-400">사업 영역</a></li>
            <li><a href="#ceo" className="hover:text-yellow-400">대표이사 인사말</a></li>
            <li><a href="#location" className="hover:text-yellow-400">사무실 위치</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          <div className="relative z-20 px-4">
            <h2 className="text-5xl font-extrabold mb-4">격투기 스포츠의 새로운 기준, JustClap</h2>
            <p className="text-xl text-gray-200">
              전국의 모든 격투기 도장을 연결하고, 최고의 파트너를 만나고, 당신의 기량을 한 단계 끌어올리세요.
            </p>
          </div>
        </section>

        {/* 법인 소개 */}
        <section id="intro" className="py-16 bg-gray-800 rounded-lg mb-16 scroll-mt-20">
          <div className="text-center px-4">
            <Building className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold mb-4">법인 소개</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-400">
              (주)저스트클랩은 격투기 스포츠를 사랑하는 모든 이들을 위한 혁신적인 IT 솔루션을 제공하기 위해 설립되었습니다. 우리는 파편화된 격투기 시장을 하나로 묶고, 선수와 지도자, 그리고 팬들이 더 나은 환경에서 스포츠를 즐길 수 있도록 돕는 것을 목표로 합니다.
            </p>
          </div>
        </section>

        {/* 사업 영역 */}
        <section id="services" className="py-16 scroll-mt-20">
          <div className="text-center px-4">
            <BarChart className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold mb-8">주요 사업 영역</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <h4 className="text-xl font-bold mb-2">1. 전국 도장 검색 & 예약</h4>
              <p className="text-gray-400">MMA, 킥복싱, 주짓수, 복싱 등 전국의 모든 도장을 쉽게 찾고, 투어 예약과 멤버십 가입까지 한번에 해결하세요.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <h4 className="text-xl font-bold mb-2">2. 도장 대여</h4>
              <p className="text-gray-400">개인 훈련이나 소규모 그룹을 위한 도장 공간을 필요한 시간만큼 대여하고 이용할 수 있습니다.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <h4 className="text-xl font-bold mb-2">3. 스파링 파트너 매칭</h4>
              <p className="text-gray-400">나와 실력이 비슷한 스파링 파트너를 찾아 함께 훈련하며 실력을 향상시킬 수 있는 기회를 제공합니다.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <h4 className="text-xl font-bold mb-2">4. 온라인 클래스</h4>
              <p className="text-gray-400">최고 수준의 지도자들에게 언제 어디서든 기술을 배울 수 있는 고품질 온라인 클래스를 제공합니다.</p>
            </div>
          </div>
        </section>

        {/* 대표이사 인사말 */}
        <section id="ceo" className="py-16 bg-gray-800 rounded-lg mb-16 scroll-mt-20">
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

        {/* 사무실 위치 */}
        <section id="location" className="py-16 text-center scroll-mt-20">
          <div className="px-4">
            <MapPin className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold mb-4">사무실 위치</h3>
            <p className="text-lg text-gray-400 mb-8">
              서울특별시 강남구 테헤란로 123, 45층 (가상 주소)
            </p>
            <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">(지도 API 연동 예정)</p>
            </div>
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
