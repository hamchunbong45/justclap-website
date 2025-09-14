import { NextResponse } from 'next/server';

export async function GET(request) {
  const naverApiUrl = 'https://openapi.naver.com/v1/search/local.json';
  
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || ''; // 검색 키워드
  const lat = searchParams.get('lat'); // 위도
  const lng = searchParams.get('lng'); // 경도
  const radius = searchParams.get('radius') || 5000; // 반경 (기본값 5km)
  const display = searchParams.get('display') || 50; // 결과 개수

  const clientId = 'ken4cfbqwd';
  const clientSecret = 'm2npfl40n2HmOp2FAcXpEgmPX9CrY62dpKuvNsYe';

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  let requestUrl = `${naverApiUrl}?query=${encodeURIComponent(query)}&display=${display}`;

  // 위도, 경도, 반경이 제공되면 지역 기반 검색 추가
  if (lat && lng) {
    // 네이버 Local Search API는 x(경도), y(위도) 순서로 받습니다.
    // 또한, x, y는 WGS84 좌표계여야 합니다.
    requestUrl += `&x=${lng}&y=${lat}&radius=${radius}`;
  }

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Naver API Error:', errorData);
      return NextResponse.json({ error: 'Naver API request failed', details: errorData }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}