import React from 'react'
import Image from 'next/image'

const PortFolio2 = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-4xl title-font font-medium mb-5">Community Management Admin Functionality</h1>
            <p className="leading-relaxed mb-4">"Community Management Admin Functionality" feature puts the control of our community in capable hands. The designated admin has the exclusive ability to share various content types such as text, files, and photos, fostering a rich and engaging environment. This central figure also holds the power to manage the community membership by adding or removing users, ensuring a safe and inclusive space for all. </p>
          </div>
          <Image height={400} width={400} alt="hero" src={"/assets/images/photo5.jpg"} />
        </div>
      </div>
    </section>
  )
}

export default PortFolio2