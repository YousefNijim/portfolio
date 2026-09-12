"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-[-0.04em]">
          YN
        </Link>

        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="type-meta text-fg-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>

      <div className="h-px bg-line" aria-hidden>
        <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-accent" />
      </div>
    </header>
  );
}
