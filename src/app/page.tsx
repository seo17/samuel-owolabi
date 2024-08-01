import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import StickyProfile from "@/components/StickyProfile";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-w-full w-full">
      <div className=" w-full h-full">
        <Header />
        <div className=" w-full flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row w-full md:w-[85vw] lg:w-full px-5 md:px-[40px] pt-[120px] justify-center gap-x-10 gap-y-10">
            <StickyProfile />

            <HeroSection />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
