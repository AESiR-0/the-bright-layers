"use client"

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem = ({ title, content }:AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 my-5">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
        <div className={`px-6  ${isOpen? 'h-full ': 'h-0 '} overflow-hidden  transition-all text-gray-700`}>
          <span className='pb-5'>{content}</span>
        </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">How we can help</h2>
        <div className="border-t border-gray-300">
          <AccordionItem
            title="Strategy Development"
            content="You can't just post on social media and call it good anymore. An effective content media strategy tells a story and brings your brand to life. We dig deep into your current situation and help you build a strategy that's aligned to your business and delivers ROI."
          />
          <AccordionItem
            title="Content Creation"
            content="We create engaging and high-quality content that resonates with your audience and drives engagement. Our team of experts ensures that your content is not only visually appealing but also strategically aligned with your marketing goals."
          />
          <AccordionItem
            title="Social Media Management"
            content="Our social media management services help you maintain a strong and consistent presence on social media platforms. We handle everything from content planning and creation to posting and engagement, ensuring your brand stays top-of-mind with your audience."
          />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
