import Image from "next/image";
import type { ReactElement } from "react";

export default function Header(): ReactElement {
  const logo = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeSrc = encodeURI(logo);
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <a href="/" aria-label="Home" className="inline-flex items-center">
          <div className="h-10 w-auto">
            <Image src={safeSrc} alt="Garber Bros logo" width={160} height={40} unoptimized />
          </div>
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm">
            <li><a href="/" className="text-gray-800">Home</a></li>
            <li><a href="/about" className="text-gray-800">About Us</a></li>
            <li><a href="/lock-status" className="text-gray-800">Lock Status</a></li>
            <li><a href="/vessels" className="text-gray-800">Vessels</a></li>
            <li><a href="/barges" className="text-gray-800">Barges</a></li>
            <li><a href="/websites/garberbrosinc/images/application.pdf" className="text-gray-800">Employment</a></li>
            <li><a href="/contact" className="text-gray-800">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden">
        <div className="container py-2 flex gap-3 text-sm">
          <a href="/about" className="text-gray-700">About</a>
          <a href="/vessels" className="text-gray-700">Vessels</a>
          <a href="/contact" className="text-gray-700">Contact</a>
        </div>
      </div>
    </header>
  );
}
