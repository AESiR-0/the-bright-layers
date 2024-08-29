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
    <footer className="w-full h-80 bg-secondary items-center flex justify-around">
      <div className="list-none text-center">
        <li className="text-accent py-1">Social</li>
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="text-decoration-none underline underline-offset-2 py-1 hover:text-accent transition-colors text-secondary-4"
          >
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </div>
      <div className="">
        <Image alt="logo" height={256} width={256} src={logo} />
      </div>
      <div className="list-none text-center">
        <li className="text-accent py-1">Navigate</li>
        {navigation.map((link, index) => (
          <li
            key={index}
            className="text-decoration-none underline underline-offset-2 py-1 hover:text-accent transition-colors text-secondary-4"
          >
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </div>
    </footer>
  );
}
