import React from "react";
import FounderSection from "@/components/sections/Founder";
import TeamSection from "@/components/sections/Team";
import MarketingSection from "@/components/sections/AboutSecond";
import WhyUs from "@/components/sections/about/WhyUs";
import Hero from "@/components/sections/about/Hero";
import AccordionMain from "@/components/sections/Accordion";

export default function page() {
  return (
    <div>
      <Hero />
      <MarketingSection />
      <FounderSection />
      <AccordionMain />

      <TeamSection />
      <WhyUs />
    </div>
  );
}
