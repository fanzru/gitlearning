import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">
          <Link href="/">CollabSpace</Link>
        </h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-indigo-500 transition">Git Learning</Link>
        </nav>
      </div>
    </header>
  );
}
