import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import StickyProfile from "@/components/StickyProfile";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full px-[40px] pt-[120px] justify-center">
        <StickyProfile />
        <HeroSection />
      </div>
    </main>
  );
}
