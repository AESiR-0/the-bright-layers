import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AccordionMain from "@/components/sections/Accordion";
import { CarouselSize } from "@/components/sections/Carousel";
import Services from "@/components/sections/Services";
import Blogs from "@/components/sections/Blogs";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden h-full  ">
        
        <Hero />
        <About />
        <AccordionMain />
        <CarouselSize />
        <Services />
        <Blogs />
      </div>
    </>
  );
}
