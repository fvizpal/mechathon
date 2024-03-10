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
import { useModal } from "@/hooks/useModalStore"
import LoginForm from "../shared/LoginForm"
import RegisterForm from "../shared/RegisterForm"

const AuthModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'auth';

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleClose = () => {
    onClose();
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
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

export default AuthModal