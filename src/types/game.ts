export type GameStatus = "Released" | "Early Access" | "In Development" | "Prototype";

export type Platform = "Steam" | "Epic Games" | "itch.io" | "PlayStation" | "Xbox" | "Nintendo Switch" | "Web" | "Mobile";

export interface SystemRequirements {
  os?: string;
  processor?: string;
  memory?: string;
  graphics?: string;
  storage?: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  genre: string[];
  status: GameStatus;
  releaseDate?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  platforms: Platform[];
  engine: "Unity" | "Unreal Engine 5" | "Godot" | "Custom / WebGL";
  steamUrl?: string;
  epicUrl?: string;
  itchUrl?: string;
  trailerEmbedUrl?: string;
  coverImage: string;
  bannerImage: string;
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
    itch?: string;
  };
  contactEmail: string;
  pressEmail: string;
}

export interface PressAsset {
  title: string;
  type: "Logo" | "Screenshots" | "Key Art" | "Full Press Kit";
  format: string;
  fileSize: string;
  downloadUrl: string;
}
