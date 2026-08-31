export type ProductType = "game" | "app";

export type ProductStatus =
  | "Yayında"
  | "Kapalı Testte"
  | "Beta Yayında"
  | "Geliştirme Aşamasında"
  | "Released"
  | "Early Access"
  | "In Development"
  | "Beta"
  | "Prototype";

export type Platform =
  | "Steam"
  | "Epic Games"
  | "App Store"
  | "Google Play"
  | "Web App"
  | "Web"
  | "Android"
  | "iOS"
  | "Windows"
  | "macOS"
  | "itch.io";

export interface SystemRequirements {
  os?: string;
  processor?: string;
  memory?: string;
  graphics?: string;
  storage?: string;
}

export interface Product {
  id: string;
  slug: string;
  type: ProductType;
  title: string;
  tagline: string;
  category: string[];
  status: ProductStatus;
  releaseDate?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  platforms: Platform[];
  techStack: string[];
  links: {
    steam?: string;
    epic?: string;
    appStore?: string;
    playStore?: string;
    webApp?: string;
    github?: string;
    itch?: string;
  };
  coverImage: string;
  bannerImage: string;
  iconImage?: string;
  screenshots: string[];
  featured?: boolean;
  systemRequirements?: {
    minimum?: SystemRequirements;
    recommended?: SystemRequirements;
  };
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: string;
  location: string;
  founder: {
    name: string;
    role: string;
    portfolioUrl: string;
  };
  socials: {
    steam?: string;
    discord?: string;
    twitter?: string;
    youtube?: string;
    github?: string;
    appStore?: string;
    playStore?: string;
  };
  contactEmail: string;
  pressEmail: string;
}

export interface PressAsset {
  title: string;
  type: "Logo" | "Screenshots" | "Key Art" | "App Assets" | "Full Press Kit";
  format: string;
  fileSize: string;
  downloadUrl: string;
}
