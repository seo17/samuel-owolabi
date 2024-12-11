import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import StickyProfile from "@/components/StickyProfile";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-w-full w-full">
      <div className=" w-full h-full">
        <Header />
        <div className=" w-full flex flex-col justify-center items-center pt-[130px]">
          <div className="flex flex-col lg:flex-row w-full md:w-[85vw] px-5 md:px-[40px]  justify-center gap-x-10 gap-y-10">
            <StickyProfile />

            <div id="main" className="w-full lg:w-[50%]">
              <HeroSection />
              <Experience />
              <Project />
              <Contact />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
