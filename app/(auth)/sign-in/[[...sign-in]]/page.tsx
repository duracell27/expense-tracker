import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import {Loader2} from 'lucide-react'
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center spacey-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">Welcome Back</h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or Craete accont to get back to your dashboard
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>

          <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin tetx-muted-foreground" size={32} />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src='/logoipsum2.svg' width={100} height={100} alt="logo"/>
      </div>
    </div>
  );
}
