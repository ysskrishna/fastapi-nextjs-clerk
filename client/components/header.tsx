"use client"
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export function Header() {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <header className="w-full max-w-6xl flex flex-row justify-between items-center p-4 bg-background mx-auto">
        <a
          href="https://github.com/ysskrishna/fastapi-nextjs-clerk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-foreground hover:underline"
        >
          FastAPI + NextJS + Clerk Integration
        </a>
        <UserButton afterSignOutUrl="/" appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }} />
      </header>
      <hr className="w-full border-t" />
    </div>
  );
}