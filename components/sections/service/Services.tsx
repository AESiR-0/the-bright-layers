import { title } from "process";
import React from "react";

const ServicesData = [
  {
    number: "01.",
    title: "Social Media Marketing",
    content: ` Giving your brand the social media oomph it deserves, while aligning
          with your ethos, principles, and goals. Instagram, Facebook, YouTube,
          and LinkedIn Reels & stories Influencer marketing Collaboration
          strategy & execution Copywriting & designing Content calendar Data &
          metric reporting & analysis`,
  },
  {
    number: "02.",
    title: "Search Engine Optimization",
    content: `We help you rank higher on Google, Bing, and Yahoo search engines. We
          optimize your website, blog, and social media platforms to increase
          visibility and drive organic traffic to your website.`,
  },
  {
    number: "03.",
    title: "Content Marketing",
    content: `We help you
        create and distribute valuable, relevant, and consistent content to
        attract and retain a clearly defined audience — and, ultimately, to drive
        profitable customer action.`,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="flex-col flex  w-screen">
      {ServicesData.map((service) => (
        <>
          <div className="flex items-center  h-[30vh] w-full px-10 ">
            <div className="text-orange-500 w-[5%] ">{service.number}</div>
            <div className="text-4xl text-center leading-tight w-1/2 px-32  font-bold">
              {service.title}
            </div>
            <div className="w-1/2">{service.content}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ServicesSection;
