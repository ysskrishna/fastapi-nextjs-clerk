"use client"
import { SignIn } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes"

export default function SignInPage() {
  const { resolvedTheme } = useTheme();

  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignIn 
          path="/signin" 
          routing="path" 
          signUpUrl="/signup" 
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined
          }}
        />
      </div>
    </main>
  )
}
