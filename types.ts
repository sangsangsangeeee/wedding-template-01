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
  message: string;
  greeting: string;
  mapOptions: {
    lat: number;
    lng: number;
  };
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

export interface AccountInfo {
  role: string;
  name: string;
  bank: string;
  account: string;
}

export interface AccountGroup {
  side: 'groom' | 'bride';
  label: string;
  accounts: AccountInfo[];
}
