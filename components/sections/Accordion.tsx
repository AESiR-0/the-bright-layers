import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import vercel from "@/public/vercel.svg";

interface AccordionItemProps {
  title: string;
  content: string;
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

const AccordionSet = ({ title, content }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-300 w-full my-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const AccordionMain: React.FC = () => {
  return (
    <section className="container py-20 flex gap-10 justify-center flex-col lg:flex-row">
      {/* FAQ Section */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-start">
        <h2 className="text-4xl w-full sm:text-left  lg:text-6xl font-serif mb-4 text-center">
          FAQs
        </h2>
        <p className="text-lg mb-4 text-center lg:text-left">
          If we haven't covered something here, feel free to shoot us an email
          with your query!
        </p>
        <div className="border-t w-full border-gray-300">
          {contentJson.map((item, index) => {
            return (
              <AccordionSet
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-md:hidden lg:w-1/3 h-full flex justify-center items-center">
        <Image
          alt="Image"
          src={vercel}
          layout="intrinsic"
          className="w-full max-w-[300px] lg:max-w-none object-cover"
        />
      </div>
    </section>
  );
};

export default AccordionMain;
