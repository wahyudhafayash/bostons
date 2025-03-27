export interface NewsItem {
  _id: string;
  headline: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  tanggalPenerbitan: string;
  gambar1?: {
    asset: {
      _ref?: string;
      url?: string;
      _id?: string;
    };
  };
  gambar2?: {
    asset: {
      _ref?: string;
      url?: string;
      _id?: string;
    };
  };
  gambar3?: {
    asset: {
      _ref?: string;
      url?: string;
      _id?: string;
    };
  };
  gambar4?: {
    asset: {
      _ref?: string;
      url?: string;
      _id?: string;
    };
  };
  gambar5?: {
    asset: {
      _ref?: string;
      url?: string;
      _id?: string;
    };
  };
  deskripsigambar1?: string;
  deskripsigambar2?: string;
  deskripsigambar3?: string;
  deskripsigambar4?: string;
  deskripsigambar5?: string;
  imagesource1?: string;
  imagesource2?: string;
  imagesource3?: string;
  imagesource4?: string;
  imagesource5?: string;
  penulis: string;
  slug: {
    current: string;
  };
}

export interface TestimoniProps {
  _id: string;
  testimoni?: string;
}

export interface ImageProps {
  asset?: {
    _ref?: string;
    url?: string;
    _id?: string;
  };
}

export interface NewsDetailProps {
  params: {
    slug: string;
  };
}
