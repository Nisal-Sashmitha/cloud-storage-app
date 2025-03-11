import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-center text-5xl font-bold">Google Drive Clone</h1>
        <p className="text-center text-lg">
          This is a clone of Google Drive using Next.js, Tailwind CSS, and
          Firebase.
        </p>
        <div className="flex gap-4">
          <Link href="/drive">Go to Drive</Link>
          <Link href="/auth">Login</Link>
        </div>
      </div>
    </main>
  );
}
