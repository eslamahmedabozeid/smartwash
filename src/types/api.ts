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

export interface FooterContact {
  icon: string;
  text: string;
  url?: string;
}

export interface FooterSocial {
  icon: string;
  url: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SiteFooter {
  visible: boolean;
  logoUrl?: string;
  tagline?: string;
  linkGroups: FooterLinkGroup[];
  contact: FooterContact[];
  social: FooterSocial[];
  copyrightText: string;
  legalLinks?: FooterLink[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  faqs: FaqItem[];
}
