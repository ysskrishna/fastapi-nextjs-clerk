import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full max-w-6xl flex flex-row justify-between items-center p-4 bg-white mx-auto">
      <a
        href="https://github.com/ysskrishna/fastapi-nextjs-clerk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-gray-800 hover:underline"
      >
        FastAPI + NextJS + Clerk Integration
      </a>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}