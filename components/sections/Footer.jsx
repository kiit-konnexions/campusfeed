import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  style: "normal",
  subsets: ["latin"],
});

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "/events", label: "Events" },
  { href: "#contact us", label: "Contact Us" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/kiitkonnexions/",
    src: "/images/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/kiitkonnexions/",
    src: "/images/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://github.com/kiit-konnexions/",
    src: "/images/github.svg",
    alt: "Github",
  },
];

const NavLinks = ({ className = "" }) => (
  <nav>
    <ul className={`flex ${className}`}>
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className={`nav-link ${dmSans.className}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const SocialLinks = ({ className = "" }) => (
  <div className={`flex ${className}`}>
    {SOCIAL_LINKS.map(({ href, src, alt }) => (
      <a key={alt} href={href} className="text-gray-500 hover:text-gray-900">
        <img src={src} alt={alt} className="h-6 w-6" />
      </a>
    ))}
  </div>
);

const Copyright = () => (
  <p className={`text-sm ${dmSans.className}`} style={{ color: "#52525B" }}>
    © Copyright 2025, All Rights Reserved
  </p>
);

const DesktopFooter = () => (
  <div className="mx-auto hidden max-w-7xl px-16 py-8 md:block">
    <div className="flex items-start justify-between">
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
        <NavLinks className="justify-end space-x-9" />
        <SocialLinks className="justify-end space-x-4" />
      </div>
    </div>
    <div className="my-8 border-t-2 border-[#6DA27D]" />
    <div className="text-center">
      <Copyright />
    </div>
  </div>
);

const MobileFooter = () => (
  <div className="px-6 py-8 md:hidden">
    <div className="flex flex-col items-center space-y-6">
      <a href="/">
        <img
          src="/images/campus_feed_logo.svg"
          alt="Campus Feed Logo"
          className="max-h-8"
        />
      </a>
    </div>
    <NavLinks className="mt-8 flex-wrap justify-center gap-6" />
    <SocialLinks className="mt-6 items-center justify-center space-x-8" />
    <div className="my-6 border-0 md:border-t-2" />
    <div className="text-center">
      <Copyright />
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer
      id="contact us"
      className="w-full border-t-0 border-[#6DA27D] bg-white md:border-t-2"
    >
      <DesktopFooter />
      <MobileFooter />
    </footer>
  );
}
