import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-3xl font-bold">Welcome to your Dashboard!</h1>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/signin" />
      </SignedOut>
    </>
  );
} 