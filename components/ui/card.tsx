import Image from "next/image";
import type { ReactElement, ReactNode } from "react";

interface CardProps {
  title: string;
  image?: string;
  href?: string;
  children?: ReactNode;
}

export default function Card({ title, image, href, children }: CardProps): ReactElement {
  const safeSrc = image ? encodeURI(image) : null;
  return (
    <article className="card flex flex-col">
      {safeSrc ? (
        <div className="aspect-[4/3] rounded-md overflow-hidden border border-gray-100 bg-gray-50 mb-3">
          <Image src={safeSrc} alt={title} width={800} height={600} className="object-cover w-full h-full" unoptimized />
        </div>
      ) : (
        <div className="aspect-[4/3] rounded-md overflow-hidden border border-gray-100 bg-gray-50 mb-3" />
      )}
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-700 flex-1">{children}</p>
      <div className="mt-4">
        {href ? <a href={href} className="inline-flex items-center h-9 px-3 bg-primary text-black rounded-md text-sm">Learn More</a> : null}
      </div>
    </article>
  );
}
