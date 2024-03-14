"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronDown } from 'lucide-react';

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
      <button className="flex bg-emerald-400 w-full rounded-xl hover:bg-orange-200" onClick={onClick}>
        <Image
          src={imageUrl}
          alt="commImage"
          width={50} height={25}
          className="rounded-full object-contain p-1"
        />
        <span className="mx-2 w-full h-full font-bold p-3">{name}</span>
        <button className="flex items-center justify-center m-3 ">
          <ChevronDown />
        </button>
      </button>
    </>
  )
}

export default NavigationItem