import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { CarouselSize } from "@/components/sections/Carousel";
import Services from "@/components/sections/Services";
import Blogs from "@/components/sections/Blogs";

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <CarouselSize />
        <Services />
        <Blogs />
    </div>
  );
}
