import React from "react";

const MarketingSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Create. Perform. Grow.</h2>
        <div className="text-center gap-2 flex flex-col items-center">
          <p className="text-xl mb-4 text-red-600">
            Leave behind the Lorem Ipsums, and hire an agency (us) that
            transforms your brand communication for good!
          </p>

          <p className="w-[800px] text-center">
            Our approach is different - a boutique-style agency that prioritizes
            understanding our clients as intimately as our own business. This
            approach has not only made us experts in our field but has allowed
            us to build genuine partnerships. <br />
            <br />
            At Hello Media, we're more than just your agency; we're an integral
            part of your team, invested in your success. Your victories are our
            celebrations, and together, we aim to not only achieve but surpass
            your goals. This is our commitment, our ethos, and the driving force
            behind everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
