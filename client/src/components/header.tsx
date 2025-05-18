import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full max-w-6xl flex flex-row justify-between items-center p-4 bg-white mx-auto">
      <div className="text-xl font-bold text-gray-800">FastAPI + NextJS + Clerk Integration</div>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}