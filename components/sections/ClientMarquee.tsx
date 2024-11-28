"use client";
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

// Client logos data
const clients = [
    {
        name: "Client 1",
        logo: "/static/clients/1.webp"
    },
    {
        name: "Client 3",
        logo: "/static/clients/3.webp"
    },
    {
        name: "Client 2",
        logo: "/static/clients/2.png"
    },
    // Add more clients as needed
];

const ClientMarquee = () => {
    return (
        <div className="py-2 bg-gradient-to-b from-white to-gray-50">

            {/* Marquee Container */}
            <div className="py-8">
                <Marquee
                    gradient={false}
                    speed={40}
                    pauseOnHover={true}
                    className="overflow-hidden"
                >
                    {/* First Row */}
                    <div className="flex items-center gap-16 mx-8">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[200px] h-[100px]"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={250}
                                    height={120}
                                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default ClientMarquee; 