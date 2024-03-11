'use client'

import { signIn } from "next-auth/react";
import { Button } from "../ui/button"
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";

export const SocialLogin = () => {

  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
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