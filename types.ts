export interface WeddingInfo {
  groom: {
    name: string;
    parents: { father: string; mother: string };
    relation: string;
  };
  bride: {
    name: string;
    parents: { father: string; mother: string };
    relation: string;
  };
  date: string; // ISO string
  time: string;
  venue: string;
  hall: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TransportInfo {
  type: 'subway' | 'bus' | 'car';
  title: string;
  details: string[];
}