'use client';

import { SignedIn, SignedOut, RedirectToSignIn, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ShowcaseCard from "@/components/dashboard/ShowcaseCard";
import ActionButton from "@/components/dashboard/ActionButton";
import ApiResponseDisplay from "@/components/dashboard/ApiResponseDisplay";
import { useApiCall } from "@/hooks/useApiCall";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { fetchApi } from "@/common/api";


export default function DashboardPage() {
  const { getToken, isSignedIn } = useAuth();
  const [jwtToken, setJwtToken] = useState<string | null>(null);

  useEffect(() => {
    if (isSignedIn) {
      const fetchToken = async () => {
        const token = await getToken({ template: 'backend' });
        setJwtToken(token);
        console.log("Clerk JWT (backend template):", token);
      };
      fetchToken();
    }
  }, [isSignedIn, getToken]);

  // API call hooks
  const publicApi = useApiCall(() => fetchApi("/public"));
  const privateApi = useApiCall(() => jwtToken ? fetchApi("/private", jwtToken) : Promise.resolve({ error: { message: "JWT Token not available. Please wait or sign in again." }, status: 400 }));
  const greetApi = useApiCall(() => jwtToken ? fetchApi("/greet", jwtToken) : Promise.resolve({ error: { message: "JWT Token not available. Please wait or sign in again." }, status: 400 }));
  const noTokenApi = useApiCall(() => fetchApi("/private"));

  return (
    <>
      <SignedIn>
        <div>
        <Header />
        <div className="flex  flex-col items-center justify-start bg-gray-50 p-4 sm:p-8 space-y-10">
          <div className="text-center w-full max-w-6xl">
            {jwtToken ? (
              <>
                <p className="text-md text-gray-600 mb-2">
                  Your current JWT (Session Token from Clerk):
                </p>
                <p className="font-mono break-all text-xs bg-gray-100  text-gray-700 dark:text-gray-300 p-3 rounded-md shadow-sm border border-gray-200 ">
                  {jwtToken}
                </p>
              </>
            ) : (
              <p className="text-md text-gray-600  p-3 bg-yellow-50  border border-yellow-300  rounded-md">
                Loading JWT token...
              </p>
            )}
          </div>

          {/* Showcase Sections Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Showcase 1: Public Endpoint */}
            <ShowcaseCard title="1. Public Endpoint Access">
              <p className="text-sm text-gray-600  mb-3">
                Calls an endpoint that requires no authentication.
              </p>
              <ActionButton onClick={publicApi.trigger} isLoading={publicApi.isLoading}>
                Call <code className="text-xs">/public</code>
              </ActionButton>
              <ApiResponseDisplay response={publicApi.response} />
            </ShowcaseCard>

            {/* Showcase 2: Private Endpoint (Success) */}
            <ShowcaseCard title="2. Private Endpoint Access (with JWT)">
              <p className="text-sm text-gray-600  mb-3">
                Calls a protected endpoint, sending the JWT in the Authorization header.
              </p>
              <ActionButton onClick={privateApi.trigger} isLoading={privateApi.isLoading} disabled={!jwtToken}>
                Call <code className="text-xs">/private</code>
              </ActionButton>
              <ApiResponseDisplay response={privateApi.response} />
            </ShowcaseCard>

            {/* Showcase 3: Personalized Content */}
            <ShowcaseCard title="3. Personalized Content (using JWT)">
              <p className="text-sm text-gray-600  mb-3">
                Backend uses JWT claims to return personalized data.
              </p>
              <ActionButton onClick={greetApi.trigger} isLoading={greetApi.isLoading} disabled={!jwtToken}>
                Call <code className="text-xs">/greet</code>
              </ActionButton>
              <ApiResponseDisplay response={greetApi.response} />
            </ShowcaseCard>

            {/* Showcase 4: Private Access Without JWT */}
            <ShowcaseCard title="4. Private Access Attempt (NO JWT)">
              <p className="text-sm text-gray-600  mb-3">
                Attempts to call a protected endpoint without sending the JWT. Expect an error.
              </p>
              <ActionButton
                onClick={noTokenApi.trigger}
                isLoading={noTokenApi.isLoading}
                className="bg-red-600 hover:bg-red-700 focus:ring-red-500  dark:hover:bg-red-800"
              >
                Call <code className="text-xs">/private</code> (No Token)
              </ActionButton>
              <ApiResponseDisplay response={noTokenApi.response} defaultToError={true} />
            </ShowcaseCard>
          </div>
        </div>
        <Footer />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/signin" />
      </SignedOut>
    </>
  );
}