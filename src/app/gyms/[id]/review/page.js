// src/app/gyms/[id]/review/page.js
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';
import { useState } from 'react';

export default function GymReviewPage() {
  const params = useParams();
  const { id } = params;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmitReview = () => {
    // Here you would typically send the review data (rating, comment, photo) to a backend API
    console.log('Submitting review for gym ID:', id);
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    console.log('Photo:', photo);
    alert('리뷰가 제출되었습니다! (실제 기능은 구현되지 않았습니다)');
    // Reset form
    setRating(0);
    setComment('');
    setPhoto(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <Link href={`/gyms/${id}`}>
          <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 flex items-center mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> 상세 페이지로 돌아가기
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">리뷰 작성 (체육관 ID: {id})</h1>

        <div className="mb-6">
          <label className="block text-xl font-bold text-gray-200 mb-2">평점</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                onClick={() => handleRatingClick(star)}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="comment" className="block text-xl font-bold text-gray-200 mb-2">의견</label>
          <textarea
            id="comment"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            rows="5"
            placeholder="체육관에 대한 의견을 작성해주세요."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="photo" className="block text-xl font-bold text-gray-200 mb-2">사진 업로드</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
            onChange={handleFileChange}
          />
          {photo && <p className="text-gray-400 mt-2">선택된 파일: {photo.name}</p>}
        </div>

        <button
          className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-600 transition-colors text-xl"
          onClick={handleSubmitReview}
        >
          리뷰 제출
        </button>
      </div>
    </div>
  );
}