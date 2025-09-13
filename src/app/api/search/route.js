import { NextResponse } from 'next/server';

export async function GET(request) {
  const naverApiUrl = 'https://openapi.naver.com/v1/search/local.json';
  const query = '주짓수'; // '주짓수'로 고정하여 검색합니다.
  const display = 50; // 검색 결과 50개까지 표시

  const clientId = 'ken4cfbqwd';
  const clientSecret = 'm2npfl40n2HmOp2FAcXpEgmPX9CrY62dpKuvNsYe';

  try {
    const response = await fetch(`${naverApiUrl}?query=${query}&display=${display}`,
     {
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
    });

    if (!response.ok) {
      // 네이버 API가 에러를 반환했을 경우
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
