// src/components/layout/footer.tsx
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border px-5">
      <div className="container flex flex-col items-center justify-between gap-4 py-12 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by the DevSolve community. Source code available on{' '}
            <Link
              href="https://github.com/pran2805/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/pran2805/" className="text-muted-foreground hover:text-foreground">
            <Github className="size-5" />
          </a>
          <a href="mailto:pranavshinde.as@gmail.com" className="text-muted-foreground hover:text-foreground">
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}