import React from "react";

const FounderSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://pplx-res.cloudinary.com/image/upload/v1722801317/user_uploads/wsssbrcea/image.jpg"
            alt="Founder"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-[45%] text-center px-4">
          <h3 className="text-lg italic mb-2">Say Hi! To the </h3>
          <h2 className="text-3xl font-bold mb-4">FOUNDER</h2>
          <p className="mb-4 ">
            Full time overthinker and part time Founder, Pooja Bhadoriya
            launched The Bright Layers in 2019 as a tribute to her experience of
            working in social media - be it as a designer, writer, creative
            director, or just as a consultant to her uncle who really wanted his
            mithai business to go viral on Instagram. As a business owner
            herself, she understands the passion that fuels a brand. Her goal is
            to bring that passion to the forefront, and to make businesses feel
            more human. Oh also, she's really excited to meet you, fellow
            business-owner.
          </p>
        </div>
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://pplx-res.cloudinary.com/image/upload/v1722801317/user_uploads/wsssbrcea/image.jpg"
            alt="Founder"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
