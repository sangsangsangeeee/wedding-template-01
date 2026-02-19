import { GalleryImage, TransportInfo, WeddingInfo } from './types';

export const WEDDING_DATA: WeddingInfo = {
  groom: {
    name: "남상이",
    parents: { father: "남충우", mother: "이일순" },
    relation: "장남"
  },
  bride: {
    name: "김현아",
    parents: { father: "김용호", mother: "최수진" },
    relation: "차녀"
  },
  date: "2026-06-07T13:00:00",
  time: "2026년 6월 7일 일요일 오후 3시",
  venue: "장소1",
  hall: "장소2"
};

// Generate placeholder images using picsum
export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/800/${i % 2 === 0 ? 1200 : 800}?random=${i + 10}`,
  alt: `Wedding Photo ${i + 1}`,
  width: 800,
  height: i % 2 === 0 ? 1200 : 800,
}));

export const TRANSPORT_DATA: TransportInfo[] = [
  {
    type: 'subway',
    title: '지하철',
    details: [
      '3호선 동대입구역 5번 출구',
      '정문 방향으로 도보 약 5분'
    ]
  },
  {
    type: 'bus',
    title: '버스',
    details: [
      '간선: 144, 301, 407',
      '지선: 7212, N13 (심야)',
      '장충체육관 앞 하차'
    ]
  },
  {
    type: 'car',
    title: '자가용',
    details: [
      '네비게이션: "신라호텔" 또는 "서울 중구 동호로 249"',
      '호텔 주차타워 이용 (3시간 무료)'
    ]
  }
];