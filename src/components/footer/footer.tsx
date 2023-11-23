import { THeaderFooteProps } from "../../types/types";

export default function Footer({ siteTitle }: THeaderFooteProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="h-48 grid place-items-center bg-slate-900 text-emerald-300">
      <p className="text-md font-light subpixel-antialiased">
        &copy; {year} {siteTitle}. All rights reserved. | Designed by{" "}
        <a
          href="https://www.yourdesigner.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-300"
        >
          MK Designs
        </a>
      </p>
    </footer>
  );
}
