export type Language = 'en' | 'ar';

export interface NavItem {
  label: { en: string; ar: string };
  href: string;
}

export interface Feature {
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}