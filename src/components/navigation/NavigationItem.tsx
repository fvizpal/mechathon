"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

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
      <button className="flex bg-emerald-400" onClick={onClick}>
        <Image
          src={imageUrl}
          alt="commImage"
          width={50} height={50}
          className=" rounded-xl object-contain"
        />
        <span className=" mx-2 w-full h-full font-bold"
        >{name}</span>
      </button>
    </>
  )
}

export default NavigationItem