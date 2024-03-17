"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { SquareUser } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

interface NavigationItemProps {
  id: string,
  imageUrl: string,
  name: string,
}
const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/community/${id}`);
  }

  return (
    <>
      <button className=" mx-2 flex bg-gray-400 w-full rounded-xl hover:bg-gray-300 border-black border-b-2" onClick={onClick}>
        <Avatar className="m-1" style={{ "height": "50px", "width": "50px" }}>
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="bg-sky-500">
            <SquareUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        <span className="mx-2 w-full h-full font-bold p-4 flex items-center justify-center overflow-auto">{name}</span>
        {/* <button className="flex items-center justify-center m-3 ">
        </button>
        <Image
          src={imageUrl}
          alt="commImage"
          width={50} height={25}
          className="rounded-full object-contain p-1"
        />
        <span className="mx-2 w-full h-full font-bold p-3">{name}</span> */}
        {/* <button className="flex items-center justify-center m-3 ">
          <ChevronDown />
        </button> */}
      </button>
    </>
  )
}

export default NavigationItem