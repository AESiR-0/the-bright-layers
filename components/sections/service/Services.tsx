import { ModalButton } from "@/components/Modal";
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
    items: [
      "Instagram, Facebook, YouTube, and LinkedIn",
      "Reels & stories",
      "Influencer marketing",
      "Collaboration strategy & execution",
      "Copywriting & designing",
      "Content calendar",
      "Data & metric reporting & analysis"
    ]
  },
  {
    number: "02.",
    title: "Email marketing",
    content: `We'll help your brand be seen, known, and heard, from awareness all the way to purchase, with emails that demand action`,
    items: [
      "Copywriting",
      "Newsletters",
      "Analytics and tracking",
      "Lead opt-in suggestions",
      "Campaign design & execution"
    ]
  },
  {
    number: "03.",
    title: "Social media advertisements",
    content: `Convert, don't confuse – that's our strategy with paid ads. If we're putting money on your brand, we'll make sure it's worth it.
`, items: ["Meta ads",
      "Budget optimisation",
      "Campaign execution",
      "ROI tracking"]
  },
  {
    number: '04. ',
    title: 'Strategy development',
    content: " Aesthetic is nothing without substance, and creativity is futile without strategy. Keeping that in mind, we tailor packages with expertise, tools, and creative vision that tells your brand story."
    , items: ["Storyboards & mood boards",
      "Competitor analysis",
      "Target audience research",
      "Keyword & hashtag strategy",
      "Advised growth tactics"]
  },
  {
    number: '05.',
    title: 'Branding',
    content: `If you already have a brand guideline in place, we're happy to work with it! If you need us to create one for you from scratch, we're even happier to help out.`
    , items: ["Brand guideline & kit",
      "Moodboard",
      "Content planning & execution",
      "Engage prospects across channels",
      "Monitor results"]
  }
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
            <div className=""><ModalButton text="Read More" data={{ title: service.title, bullets: service.items, content: service.content }} key={service.number} /></div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ServicesSection;
