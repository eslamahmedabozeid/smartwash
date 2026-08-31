export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export interface SiteLink {
  label: string;
  url: string;
}

export interface SiteImage {
  id: string;
  mediaId: string;
  url: string;
  role: string;
  alt: string;
}

export interface SiteSubsection {
  id: string;
  title: string;
  content: string;
  order: number;
  subtitle?: string | null;
  rating?: number;
  price?: number | null;
  link?: SiteLink | null;
  images?: SiteImage[];
}

export interface SiteSection {
  id: string;
  type: string;
  title: string;
  content: string;
  subtitle?: string;
  order: number;
  links?: SiteLink[];
  images?: SiteImage[];
  subsections?: SiteSubsection[];
}

export interface SitePage {
  id: string;
  pageName: string;
  updatedAt: string;
  sections: SiteSection[];
}
