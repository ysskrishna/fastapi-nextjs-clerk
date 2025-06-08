"use client"
import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes"

export default function SignUpPage() {
  const { resolvedTheme } = useTheme();

  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignUp 
          path="/signup" 
          routing="path" 
          signInUrl="/signin" 
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined
          }}
        />
      </div>
    </main>
  )
}
