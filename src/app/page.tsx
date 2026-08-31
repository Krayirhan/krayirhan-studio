import { V2Header } from "@/components/v2/V2Header";
import { V2Hero } from "@/components/v2/V2Hero";
import { V2Projects } from "@/components/v2/V2Projects";
import { V2Philosophy } from "@/components/v2/V2Philosophy";
import { V2FinalCta } from "@/components/v2/V2FinalCta";
import { V2SectionDivider } from "@/components/v2/V2SectionDivider";
import { V2Footer } from "@/components/v2/V2Footer";

export default function HomePage() {
  return <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb]"><V2Header /><div className="v2-content"><V2Hero /><V2SectionDivider /><V2Projects /><V2SectionDivider /><V2Philosophy /><V2FinalCta /></div><V2Footer /></div>;
}
