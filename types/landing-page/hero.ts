export interface HeroAnnouncement {
  label: string;
  text: string;
  href: string;
}

export interface HeroTitle {
  prefix: string;
  highlight: string;
  suffix: string;
}

export interface HeroCTA {
  primary: {
    text: string;
    href: string;
  };
  secondary: {
    text: string;
    href: string;
  };
}

export interface HeroData {
  title: HeroTitle;
  description: string;
  cta: HeroCTA;
  announcement?: HeroAnnouncement;
} 