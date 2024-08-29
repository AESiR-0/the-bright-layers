import React from 'react';

const ServiceCards: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Not seeing what you need?</h2>
          <p className="mb-4">
            We offer custom packages based on individual client needs. Because we know every business needs something unique!
          </p>
        </div>
        <div className="md:w-1/3 mt-10 text-center md:text-right">
          <h3 className="text-2xl font-semibold mb-4">Add Ons:</h3>
          <ul className="space-y-2">
            <div className="flex justify-between">
            <li>BLOG COPY</li>
            <li>INFLUENCER MANAGEMENT</li>
            </div>
            <div className="flex justify-between">
            <li>SMS MARKETING</li>
            <li className='text-left'> BRAND DESIGN</li>
            </div>
          </ul>
          <button className="mt-6 border border-red-600 text-red-600 py-2 px-6 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;