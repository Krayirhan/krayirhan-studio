import type { SVGProps } from "react";

// Gilded Stag (Deer) Studio Emblem
export function StagEmblem(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer subtle glow */}
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e4e4e7" />
          <stop offset="100%" stopColor="#a1a1aa" />
        </linearGradient>
        <linearGradient id="goldBright" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f4f4f5" />
        </linearGradient>
      </defs>

      {/* Antlers Left */}
      <path
        d="M44 38C40 32 35 24 28 22M35 27C32 20 25 15 17 17M30 33C24 30 18 29 12 32M24 23C23 15 19 10 12 8M37 21C38 14 36 9 32 4"
        stroke="url(#goldGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Antlers Right */}
      <path
        d="M56 38C60 32 65 24 72 22M65 27C68 20 75 15 83 17M70 33C76 30 82 29 88 32M76 23C77 15 81 10 88 8M63 21C62 14 64 9 68 4"
        stroke="url(#goldGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Deer Ears */}
      <path
        d="M38 42C33 39 27 41 24 46C29 47 34 46 38 45"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62 42C67 39 73 41 76 46C71 47 66 46 62 45"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Deer Head Forehead & Bridge */}
      <path
        d="M42 38H58L55 52L50 68L45 52L42 38Z"
        fill="url(#goldGrad)"
        fillOpacity="0.18"
        stroke="url(#goldGrad)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Eyes */}
      <ellipse cx="44.5" cy="46.5" rx="1.6" ry="2.2" fill="url(#goldBright)" />
      <ellipse cx="55.5" cy="46.5" rx="1.6" ry="2.2" fill="url(#goldBright)" />

      {/* Muzzle / Nose */}
      <path
        d="M47 64C48.5 65.5 51.5 65.5 53 64L50 68L47 64Z"
        fill="url(#goldBright)"
      />

      {/* Geometric Sacred Rune / Tamga Below */}
      <path
        d="M50 72L58 80H42L50 72Z"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M42 80L38 88H62L58 80"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 80V94M46 94H54"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


// Seljuk Interlocking Knot Icon for "Ürün Kişiliği"
export function SeljukKnotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24 4L44 24L24 44L4 24L24 4Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <rect
        x="12"
        y="12"
        width="24"
        height="24"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        transform="rotate(45 24 24)"
      />
      <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2" />
      <path d="M24 10V38M10 24H38" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

// Calm Radiant Sun / Hands Icon for "Sade ve Saygılı Akış"
export function CalmFlowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="18" r="7" stroke="white" strokeWidth="2" />
      <path
        d="M24 6V9M24 27V30M12 18H15M33 18H36M15.5 9.5L17.5 11.5M30.5 24.5L32.5 26.5M15.5 26.5L17.5 24.5M30.5 11.5L32.5 9.5"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 36C14 31 20 33 24 35C28 37 34 39 40 34"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10 42C16 37 22 39 26 41C30 43 36 43 40 40"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Social Icons
export function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function IconYouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Hayat Ağacı (Tree of Life) - Anatolian Carpet & Kilim Motif for "Ölümsüzlük & Kadim Kökler"
export function HayatAgaciMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 160"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Central Spine / Trunk */}
      <rect x="42" y="14" width="16" height="118" />

      {/* Top Crown / Tier 1 Chevron */}
      <polygon points="0,0 26,26 50,8 74,26 100,0 100,18 58,60 42,60 0,18" />

      {/* Tier 2 Chevron Branches */}
      <polygon points="0,48 42,90 42,72 0,30" />
      <polygon points="100,48 58,90 58,72 100,30" />

      {/* Tier 3 Chevron Branches */}
      <polygon points="0,78 42,120 42,102 0,60" />
      <polygon points="100,78 58,120 58,102 100,60" />

      {/* Tier 4 Bottom Chevron / Base */}
      <polygon points="0,108 50,158 100,108 100,90 58,132 42,132 0,90" />
    </svg>
  );
}
