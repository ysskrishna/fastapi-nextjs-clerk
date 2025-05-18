import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full flex justify-end items-center p-4">
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}