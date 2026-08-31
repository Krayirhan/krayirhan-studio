import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";
import { LegacyV2Home } from "@/components/home/LegacyV2Home";

export default function V2HomePage() {
  return <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb]"><V2Header /><LegacyV2Home /><V2Footer /></div>;
}
