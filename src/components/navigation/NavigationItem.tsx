"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { SquareUser } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  id: string,
  imageUrl: string,
  name: string,
}
const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const router = useRouter();
  const params = useParams();

  const onClick = () => {
    router.push(`/community/${id}`);
  }

  return (
    <>
      {/* <button className=" mx-2 flex w-full rounded-xl bg-slate-300 dark:bg-blue-700 hover:bg-slate-400 " onClick={onClick}>
        <Avatar className="m-1" style={{ "height": "50px", "width": "50px" }}>
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="bg-sky-500">
            <SquareUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        <span className="mx-2 w-full h-full font-bold p-4 flex items-center justify-center overflow-auto">{name}</span> */}
      <button
        onClick={onClick}
        className={cn("group relative flex items-center w-full mx-2 rounded-md p-1", params?.communityId === id && "bg-red-400")}
      >
        <div className={cn(
          "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
          params?.communityId === id && "bg-primary/10 text-primary rounded-[16px]"
        )}>
          <Image
            fill
            src={imageUrl}
            alt="Channel"
          />
        </div>
        <div className=" font-bold">{name}</div>
      </button>
      {/* </button> */}
    </>
  )
}

export default NavigationItem