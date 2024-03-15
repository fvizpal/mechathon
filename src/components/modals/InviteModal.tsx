'use client'

import { useModal } from "@/hooks/useModalStore"
import { Dialog, DialogContent, DialogDescription, DialogClose, DialogHeader, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { Check, Copy, RefreshCw } from "lucide-react";
import { useOrigin } from "@/hooks/useOrigin";
import { useState } from "react";
import axios from "axios";


export const InviteModal = () => {

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { onOpen, isOpen, onClose, type, data } = useModal();

  const origin = useOrigin();
  const isModalOpen = isOpen && type === 'invite';

  const { community } = data;
  const inviteUrl = `${origin}/invite/${community?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(`/api/communities/${community?.id}/invite`);

      onOpen("invite", { community: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }



  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            People with the link can join this community
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input
              disabled={isLoading}
              value={inviteUrl}
            />
          </div>
          <Button disabled={isLoading} onClick={onCopy} size="icon">
            {copied
              ? <Check className="w-4 h-4" />
              : <Copy className="w-4 h-4" />
            }
          </Button>
        </div>
        <div>
          <Button
            onClick={onNew}
            disabled={isLoading}
            variant="link"
            size="sm"
            className="text-s  text-zinc-500 mt-4"
          >
            Reset community invite link
            <RefreshCw className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
