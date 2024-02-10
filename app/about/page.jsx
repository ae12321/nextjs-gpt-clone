import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-5xl mb-4">about page</h1>
      <Link href="/" className="underline text-blue-400">
        back to home
      </Link>
    </div>
  );
}
