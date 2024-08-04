import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import Accordion from "@/components/sections/Accordion";
export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden h-full  ">
        <Banner />
        <Navbar />
        <Hero />
        <About />
        <Accordion />
      </div>
    </>
  );
}
