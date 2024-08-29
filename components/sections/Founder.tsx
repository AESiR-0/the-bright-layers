import React from 'react';

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
        <div className="md:w-1/3 text-center px-4">
          <h3 className="text-lg italic mb-2">Meet our</h3>
          <h2 className="text-3xl font-bold mb-4">FOUNDER</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae accusantium ipsam provident sapiente voluptatum distinctio aspernatur numquam corporis, voluptatem sed cum tempore aliquid totam recusandae corrupti eum est rerum nisi commodi. Ipsam nihil possimus perferendis molestiae explicabo quas molestias maxime, voluptatum doloremque porro rerum sunt. Et tenetur aut omnis minima. Reiciendis laboriosam obcaecati dignissimos magni nesciunt illo ducimus molestias harum mollitia. Enim eos illo quasi, velit quibusdam debitis sed incidunt doloribus fuga quam cum eligendi neque iure non quaerat deserunt.
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