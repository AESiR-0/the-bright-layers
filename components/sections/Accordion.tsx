"use client";
import React from "react";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  title: string;
  content: string;
  index: number;
}

const contentJson = [
  {
    title: "What is a social media agency, and why do I need one?",
    content:
      "A social media agency like The Bright Layers helps businesses build their brand presence on social media platforms through tailored strategies. We handle everything from branding to paid advertisements, ensuring your brand is consistently visible, engaging, and optimized for growth. You need a social media agency to cut through the digital noise and effectively connect with your target audience.",
  },
  {
    title: "What platforms do you specialize in?",
    content:
      "We specialize in Instagram, Facebook, YouTube, and LinkedIn, ensuring your brand reaches its audience on the most effective channels. Whether it's building your brand presence or running paid ads, we've got you covered across all major social media platforms.",
  },
  {
    title: "How will I know my brand is reaching digital success?",
    content:
      "We measure success through detailed data analysis and reporting. We track metrics like engagement, reach, impressions, and ROI. Based on this, we optimize future campaigns to ensure ongoing success and improved performance.",
  },
  {
    title: "How quickly can I expect results?",
    content:
      "Social media marketing is a long-term investment. While paid ads can bring immediate results in terms of reach and conversions, organic growth may take time to build momentum. Typically, you can expect to see noticeable results in 3-6 months, depending on your goals and strategy.",
  },
  {
    title: "Do you offer branding services?",
    content:
      "Yes, we provide comprehensive branding services. Whether you're starting from scratch or need to reimagine your brand, we help create brand guidelines, design assets, and execute content that truly represents your brand's essence.",
  },
];

const AccordionSet = ({ title, content, index }: AccordionItemProps) => {
  return (
    <Fade delay={index * 100} triggerOnce>
      <div className="border-b border-gray-200 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-start gap-6 text-left">
                <span className="text-sm font-medium text-orange-500 mt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pl-12">
              {content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Fade>
  );
};

const AccordionMain: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* FAQ Content */}
          <div className="w-full lg:w-[60%]">
            <Fade triggerOnce>
              <div className="space-y-4 mb-12">
                <span className="text-orange-500 font-medium">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Frequently Asked{" "}
                  <span className="text-gradient">Questions</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  If we haven't covered something here, feel free to shoot us an email
                  with your query!
                </p>
              </div>
            </Fade>

            <div className="space-y-2">
              {contentJson.map((item, index) => (
                <AccordionSet
                  key={index}
                  index={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          {/* Image Section */}
          <Slide direction="right" triggerOnce className="w-full lg:w-[40%] sticky top-24">
            <div className="relative">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                <Image
                  src="/images/faq-illustration.jpg" // Add your image
                  alt="FAQ Illustration"
                  fill
                  className="object-cover mix-blend-overlay"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gray-100 rounded-full -z-10" />
            </div>
          </Slide>
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center gap-3 pt-16">
          <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse delay-100" />
          <div className="h-2 w-2 rounded-full bg-orange-300 animate-pulse delay-200" />
        </div>
      </div>
    </section>
  );
};

export default AccordionMain;