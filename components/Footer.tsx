import type { ReactElement } from "react";

export default function Footer(): ReactElement {
  const year = 2015;
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="text-sm text-muted pt-3 md:pt-0">
          <a href="/transparency-in-coverage" className="text-gray-600">Transparency in Coverage</a>
        </div>
      </div>
    </footer>
  );
}
