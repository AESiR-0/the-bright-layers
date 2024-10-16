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
    title: "1. Explore the bright layers of our services.",
    content:
      "Browse through our offerings and see what aligns with your brand's needs. If you're unsure of where to start, we can always get on a free scheduled call to help you out!",
  },
  {
    title: "2. Get in touch!",
    content:
      "Fill up the form under our “hire us” tab, and we can take it from there. While we love working for all small & medium businesses, we want to make sure we're the right fit to deliver your brand's core objectives. We'll contact you within 48 hours to schedule our discovery call.",
  },
  {
    title: "3. Take a (discovery) call.",
    content:
      "After the discovery call, we'll know whether we're on the same page for this potential partnership. Then, we'll craft a personalized blueprint with tailored solutions for your business. If you're convinced, we're at your service! We'll draw out the contract, process the initial payment, and then make it official.",
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

const WhyUs: React.FC = () => {
  return (
    <section className="container h-screen py-20 flex gap-10 justify-center">
      <div className="w-full px-10 text-center  flex flex-col justify-center items-start ">
        <h2 className="text-5xl w-full   text-center font-serif mb-4 ">
          Interested? Curious? Here's How It Works.{" "}
        </h2>

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
    </section>
  );
};

export default WhyUs;
