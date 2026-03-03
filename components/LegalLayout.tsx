import Link from "next/link";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            FlowDesk Inbox
          </Link>
          <Link
            href="/"
            className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-2">
          {title}
        </h1>
        <p className="text-xs text-neutral-400 mb-10">Last updated: {updated}</p>
        <div className="prose-legal">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} FlowDesk. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
              Terms
            </Link>
            <Link href="/sms" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
              SMS Program
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
