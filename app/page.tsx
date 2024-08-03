import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <div className="w-screen ">
        <Navbar />
        <Hero />
        <p>Hey I am garet</p>
        <p className="font-bold">hey I am garet bold</p>
      </div>
    </>
  );
}
