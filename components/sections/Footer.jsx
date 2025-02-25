import {DM_Sans} from "next/font/google";

const dmSans = DM_Sans({
  style: "normal",
  subsets: ["latin"],
});

const NAV_LINKS = [
  {href: "/", label: "Home"},
  {href: "/about", label: "About Us"},
  {href: "/features", label: "Features"},
  {href: "/events", label: "Events"},
  {href: "/contact", label: "Contact Us"},
];

const SOCIAL_LINKS = [
  {href: "#", src: "/images/facebook.svg", alt: "Facebook"},
  {href: "#", src: "/images/instagram.svg", alt: "Instagram"},
  {href: "#", src: "/images/github.svg", alt: "Github"},
];

const NavLinks = ({className = ""}) => (
  <nav>
    <ul className={`flex ${className}`}>
      {NAV_LINKS.map(({href, label}) => (
        <li key={href}>
          <a href={href} className={`nav-link ${dmSans.className}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const SocialLinks = ({className = ""}) => (
  <div className={`flex ${className}`}>
    {SOCIAL_LINKS.map(({href, src, alt}) => (
      <a
        key={alt}
        href={href}
        className="text-gray-500 hover:text-gray-900"
      >
        <img src={src} alt={alt} className="w-6 h-6"/>
      </a>
    ))}
  </div>
);

const Copyright = () => (
  <p className={`text-sm ${dmSans.className}`} style={{color: "#52525B"}}>
    © Copyright 2025, All Rights Reserved
  </p>
);

const DesktopFooter = () => (
  <div className="hidden md:block max-w-7xl mx-auto px-16 py-8">
    <div className="flex justify-between items-start">
      <div className="flex items-center space-x-6">
        <img
          src="/images/konnexion_logo.svg"
          alt="Konnexions"
          className="max-h-16 object-contain"
        />
        <img
          src="/images/campus_feed_logo.svg"
          alt="Campus Feed"
          className="max-h-7"
        />
      </div>
      <div className="flex flex-col space-y-6">
        <NavLinks className="justify-end space-x-9"/>
        <SocialLinks className="justify-end space-x-4"/>
      </div>
    </div>
    <div className="border-t-2 border-[#6DA27D] my-8"/>
    <div className="text-center">
      <Copyright/>
    </div>
  </div>
);

const MobileFooter = () => (
  <div className="md:hidden px-6 py-8">
    <div className="flex flex-col items-center space-y-6">
      <img
        src="/images/campus_feed_logo.svg"
        alt="Campus Feed Logo"
        className="max-h-8"
      />
    </div>
    <NavLinks className="mt-8 flex-wrap justify-center gap-6"/>
    <SocialLinks className="justify-center items-center space-x-8 mt-6"/>
    <div className="my-6 border-0 md:border-t-2"/>
    <div className="text-center">
      <Copyright/>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer id="contact us" className="w-full bg-white border-[#6DA27D] border-t-0 md:border-t-2">
      <DesktopFooter/>
      <MobileFooter/>
    </footer>
  );
}
