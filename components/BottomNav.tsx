"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { icon: "🏠", label: "Home", href: "/" },
  { icon: "🗓️", label: "Timeline", href: "/timeline" },
  { icon: "🏆", label: "Badges", href: "/badges" },
  { icon: "👤", label: "Profile", href: "/profile" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-white bg-white">
      <div className="mx-auto flex max-w-lg items-stretch">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 pb-[env(safe-area-inset-bottom)] text-xs transition-colors ${
                active ? "text-terracotta" : "text-stone-light"
              }`}
            >
              <span className="text-xl leading-none">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
