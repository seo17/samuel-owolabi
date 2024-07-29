import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import StickyProfile from "@/components/StickyProfile";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <div className="flex flex-col lg:flex-row w-full px-[40px] pt-[120px] justify-center gap-x-12">
        <div className="h-full">
          <StickyProfile />
        </div>
        <HeroSection />
      </div>

      <Footer />
    </main>
  );
}
