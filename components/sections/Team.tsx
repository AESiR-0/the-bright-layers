import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  image: string;
  name: string;
  designation: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, designation }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={image} alt={name} width={128} height={128} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember
            image="/static/home/bg.jpg"
            name="John Doe"
            designation="CEO"
          />
          <TeamMember
            image="/static/home/bg.jpg"
            name="Jane Smith"
            designation="CTO"
          />
          <TeamMember
            image="/static/home/bg.jpg"
            name="Alice Johnson"
            designation="CFO"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;