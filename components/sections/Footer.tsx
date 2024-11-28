import Image from "next/image";
import logo from "@/public/static/logo/logo.png";
import Link from "next/link";

const socialLinks = [
  { title: "Instagram", link: "" },
  { title: "Facebook", link: "" },
  { title: "Twitter", link: "" },
  { title: "LinkedIn", link: "" },
];

const navigation = [
  { title: "Home", link: "" },
  { title: "About", link: "" },
  { title: "Services", link: "" },
  { title: "Contact", link: "" },
];

export default function Footer() {
  return (
    <div className="w-full bg-secondary py-8 flex list-none flex-col sm:flex-row justify-between items-center px-4 md:px-16">
      {/* Social Links Section */}
      <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
        <li className="text-orange-500 py-1 text-lg sm:text-xl">Social</li>
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="py-1 text-white hover:text-orange-500 transition-colors"
          >
            <Link href={link.link} className="text-decoration-none underline underline-offset-2">
              {link.title}
            </Link>
          </li>
        ))}
      </div>

      {/* Logo Section */}
      <div className="mb-8 max-md:h-20 max-md:w-20 sm:mb-0">
        <Image alt="logo" height={256} width={256} src={logo} />
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col items-center sm:items-end">
        <li className="text-orange-500 py-1 text-lg sm:text-xl">Navigate</li>
        {navigation.map((link, index) => (
          <li
            key={index}
            className="py-1 text-white hover:text-orange-500 transition-colors"
          >
            <Link href={link.link} className="text-decoration-none underline underline-offset-2">
              {link.title}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
