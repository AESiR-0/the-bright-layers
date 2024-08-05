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
    title: "Strategy Development",
    content:
      "You can't just post on social media and call it good anymore. An effective content media strategy tells a story and brings your brand to life. We dig deep into your current situation and help you build a strategy that's aligned to your business and delivers ROI.",
  },
  {
    title: "Content Creation",
    content:
      "We create engaging and high-quality content that resonates with your audience and drives engagement. Our team of experts ensures that your content is not only visually appealing but also strategically aligned with your marketing goals.",
  },
  {
    title: "Social Media Management",
    content:
      "Our social media management services help you maintain a strong and consistent presence on social media platforms. We handle everything from content planning and creation to posting and engagement, ensuring your brand stays top-of-mind with your audience.",
  },
  {
    title: "Social Media Management",
    content:
      "Our social media management services help you maintain a strong and consistent presence on social media platforms. We handle everything from content planning and creation to posting and engagement, ensuring your brand stays top-of-mind with your audience.",
  },
  {
    title: "Social Media Management",
    content:
      "Our social media management services help you maintain a strong and consistent presence on social media platforms. We handle everything from content planning and creation to posting and engagement, ensuring your brand stays top-of-mind with your audience.",
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
    <section className="container h-screen py-20 flex gap-10 justify-center">
      <div className="w-1/2 flex flex-col justify-center items-start ">
        <h2 className="text-6xl font-serif mb-8">Our Services</h2>
        <div className="border-t w-full border-gray-300">
          {contentJson.map((item, index) => {
            return (
              <AccordionSet
              key={index}
                title="Strategy Development"
                content="You can't just post on social media and call it good anymore. An effective content media strategy tells a story and brings your brand to life. We dig deep into your current situation and help you build a strategy that's aligned to your business and delivers ROI."
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/3 h-full border border-red-200">
        <Image alt="Image " src={vercel} objectFit="cover" />
      </div>
    </section>
  );
};

export default AccordionMain;
