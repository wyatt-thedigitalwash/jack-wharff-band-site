import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-display text-brand-red mb-4">Page not found</h1>
      <p className="text-lg text-brand-yellow mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="btn-primary"
      >
        Go Home
      </Link>
    </main>
  );
}
