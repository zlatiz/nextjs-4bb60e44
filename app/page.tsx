import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import type { ReactElement } from "react";

const IMAGES: string[] = [
  "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg"
];

export default function HomePage(): ReactElement {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[1] ?? images[0];
  const galleryPrimary = images.slice(1, 4);
  const galleryRemaining = images.slice(4);

  return (
    <>
      <section className="container max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Garber Bros, Inc.</h1>
            <p className="text-gray-800 leading-relaxed mb-6">
              For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of
              marine transportation services for the offshore oil and gas industry. We pride ourselves on
              supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc.
              for all your marine transportation and service needs.
            </p>
            <div className="flex gap-3">
              <Button href="/vessels">View Our Fleet of Vessels</Button>
              <a href="javascript:previousSlide6347994()" className="inline-flex items-center justify-center h-10 px-3 rounded-md border border-gray-200 text-sm">Prev</a>
              <a href="javascript:nextSlide6347994()" className="inline-flex items-center justify-center h-10 px-3 rounded-md border border-gray-200 text-sm">Next</a>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[16/9] rounded-md overflow-hidden border border-gray-100 bg-gray-50">
              {heroImage && (
                (() => {
                  const safeSrc = encodeURI(heroImage);
                  return (
                    <Image
                      src={safeSrc}
                      alt="Garber Bros vessel hero"
                      width={1200}
                      height={675}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  );
                })()
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto py-10 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Our Vessels" image={images[2]} href="/vessels">
            Garber Bros Inc has an elite fleet of vessels of use in all types of projects.
          </Card>

          <Card title="Employment" image={images[3]} href="/websites/garberbrosinc/images/application.pdf">
            Interested in working at Garber Bros? Download our employment application.
            <div className="mt-3 flex gap-2">
              <a href="/websites/garberbrosinc/images/application.pdf" className="text-sm text-primary underline">View Our Employment Application »</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-sm text-gray-700 underline">Apply (GoodHiring)</a>
            </div>
          </Card>

          <Card title="Contact Us" image={images[3]} href="/contact">
            To contact Garber Bros Inc regarding vessel availability, click here.
            <div className="mt-3">
              <a href="/contact" className="text-sm text-primary underline">Contact Garber Bros Inc »</a>
            </div>
          </Card>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-xl font-medium mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.isArray(galleryPrimary) && (Array.isArray(galleryPrimary) ? galleryPrimary : []).map((src, idx) => {
            const safeSrc = encodeURI(src);
            return (
              <div key={safeSrc} className="aspect-[4/3] rounded-md overflow-hidden border border-gray-100 bg-gray-50">
                <Image src={safeSrc} alt={`Gallery image ${idx + 1}`} width={800} height={600} className="object-cover" unoptimized />
              </div>
            );
          })}
        </div>

        {Array.isArray(galleryRemaining) && galleryRemaining.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">More Images</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(Array.isArray(galleryRemaining) ? galleryRemaining : []).map((src) => {
                const safeSrc = encodeURI(src);
                return (
                  <div key={safeSrc} className="aspect-[4/3] rounded-md overflow-hidden border border-gray-100 bg-gray-50">
                    <Image src={safeSrc} alt="Gallery additional" width={400} height={300} className="object-cover" unoptimized />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <section className="container max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-lg font-medium mb-3">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/" className="text-sm text-gray-800 underline">Home</a>
          <a href="/about" className="text-sm text-gray-800 underline">About Us</a>
          <a href="/lock-status" className="text-sm text-gray-800 underline">Lock Status</a>
          <a href="/vessels" className="text-sm text-gray-800 underline">Vessels</a>
          <a href="/barges" className="text-sm text-gray-800 underline">Barges</a>
          <a href="/websites/garberbrosinc/images/application.pdf" className="text-sm text-gray-800 underline">Employment</a>
          <a href="/contact" className="text-sm text-gray-800 underline">Contact Us</a>
          <a href="contact.aspx" className="text-sm text-gray-800 underline">Contact</a>
          <a href="/transparency-in-coverage" className="text-sm text-gray-800 underline">Transparency in Coverage</a>
          <a href="#" className="text-sm text-gray-800 underline">Back to Top</a>
        </div>
      </section>
    </>
  );
}
