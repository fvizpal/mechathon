"use client"

interface NavigationItemProps {
  id: string,
  imageUrl: string,
  name: string,
}
const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  return (
    <>
      {id} {imageUrl} {name}
    </>
  )
}

export default NavigationItem