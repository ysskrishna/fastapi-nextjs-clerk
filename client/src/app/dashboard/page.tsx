import { auth } from '@clerk/nextjs/server'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default async function DashboardPage() {
  const { getToken } = await auth()
  const token = await getToken({ template: 'backend' })
  console.log("token", token)
  return (
    <>
      <SignedIn>
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard!</h1>
            <p className="break-all max-w-2xl text-sm text-gray-600">
              <span className="font-mono">{token}</span>
            </p>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/signin" />
      </SignedOut>
    </>
  );
}