const services = [
  {
    title: "Social Media Marketing",
    description:
      "We help you reach your target audience and drive engagement on social media platforms.",
  },
  {
    title: "Social Media Marketing",
    description:
      "We help you reach your target audience and drive engagement on social media platforms.",
  },
  {
    title: "Social Media Marketing",
    description:
      "We help you reach your target audience and drive engagement on social media platforms.",
  },
  {
    title: "Social Media Marketing",
    description:
      "We help you reach your target audience and drive engagement on social media platforms.",
  },
];

export default function Services() {
  return (
    <div className="container flex flex-col justify-center my-10 items-center">
      <h1 className="text-center text-4xl">Our Services</h1>
      <div className="flex w-screen px-20 gap-10 h-full my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-grow flex flex-col w-52 transition-all hover:flex-grow-[4.3] h-96 bg-secondary "
          >
            \
          </div>
        ))}
      </div>
    </div>
  );
}
