"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useModal } from "@/hooks/useModalStore"
import { UserRound} from "lucide-react";
import { useSession } from "next-auth/react";
import {Pencil} from 'lucide-react'
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
  } from "@/components/ui/avatar";

export const UserSettings = ()=> {
    
    const { onOpen, isOpen, onClose, type, } = useModal(); 
    const isModalOpen = isOpen && type === 'usersettings';
    
    const session = useSession();
    const user = session.data?.user

    return (
    <>
     <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Avatar style={{"height":"60px" , "width":"60px"}}>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <UserRound className="text-white" />
          </AvatarFallback>
        </Avatar>
        </div>
        <span style={{fontSize:"13px", color:"gray",display: "flex", justifyContent: "center",alignItems: "center"}}>{user?.email}</span>

        <div className="grid gap-4 py-4">
        
        <div>
            <div style={{ padding: '1px' }}>
                <span style={{ fontSize: '12px', color: "green", fontWeight: "bold"}}>Your Name</span>
            </div>
            <div className="d-flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <span style={{ fontSize: '18px', marginRight: '10px' }}>{user?.name}</span>
            {/* <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}><Pencil /></button> */}
            </div>
        </div>

        {/* <div>
            <div style={{ padding: '1px' }}>
                <span style={{ fontSize: '12px', color: "green", fontWeight: "bold"}}>About</span>
            </div>
            <div className="d-flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <span style={{ fontSize: '18px', marginRight: '10px' }}>{user?.name}</span>
            <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}><Pencil /></button>
            </div>
        </div> */}

        </div>

        
        <DialogFooter>
          <Button type="submit">Change PassWord</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}
