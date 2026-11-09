'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-display text-brand-red mb-4">Something went wrong</h1>
      <p className="text-lg text-brand-yellow mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-block border border-brand-yellow px-5 py-2 font-display uppercase tracking-wider text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
