'use client'

import { signIn } from "next-auth/react";
import { Button } from "../ui/button"

export const SocialLogin = () => {

  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: '/home'
    })
  }

  return (
    <div>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        SIGNIN WITH GOOGLE
      </Button>
    </div>
  )
}