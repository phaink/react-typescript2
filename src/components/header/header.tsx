

export default function Header({ siteTitle }: THeaderFooterProps) {
  return (
    <header className="h-48 bg-slate-900 grid place-items-center">
      <h1 className="text-5xl text-emerald-500 font-black">{siteTitle}</h1>
    </header>
  );
}
