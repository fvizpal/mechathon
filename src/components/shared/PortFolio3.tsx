import React from 'react'
import Image from 'next/image'

const PortFolio3 = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image height={400} width={400} alt="hero" src="/assets/images/photo1.jpg" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-4xl title-font font-medium mb-5 dark:text-white">Join and create your ideal community</h1>
            <p className="leading-relaxed dark:text-white">"Join communities where you belong"
              allows users to create and join communities tailored to their
              passions and interests, be it photography, cooking, gaming, or any
              other pursuit. Users can start fresh groups or become part of existing
              ones, forging connections with like-minded individuals. This feature empowers
              users to curate spaces where they can share insights, learn new things,
              and foster meaningful relationships within a vibrant ecosystem of diverse
              interests and interactions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortFolio3