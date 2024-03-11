import React from 'react'
import Image from 'next/image'
import photo2 from '../../../public/Images/photo2.jpg'

const PortFolio4 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Connectivity Made Easy with Trusted Tech</h1>
          <p className="mb-8 leading-relaxed">Connectivity made effortless with trusted tech, linking us with loved ones across any distance. From sharing our passions to messaging about hobbies, reliable devices keep us close at heart.</p>
        </div>
        <Image height={600} width={720} alt="hero" src={"/assets/images/photo2.jpg"} />
      </div>
    </section>
  )
}

export default PortFolio4