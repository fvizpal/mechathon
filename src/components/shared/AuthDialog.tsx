'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

const AuthDialog = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Enter</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isLogin ? (<>Login</>) : (<>Register</>)}</DialogTitle>
          {isLogin ? (
            <>
              <LoginForm setIsLogin={setIsLogin} />
            </>
          ) : (
            <>
              <RegisterForm setIsLogin={setIsLogin} />
            </>
          )
          }
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog