import React from 'react'
import Image from 'next/image'

const Portfolio1 = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image height={400} width={400} alt="hero" src={"/assets/images/photo6.jpg"} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-4xl title-font font-medium mb-5">Interactive Real-time Chat Support Feature</h1>
            <p className="leading-relaxed">The "Live Chat Feature" delivers swift, personalized assistance for website users. This dynamic tool enables seamless, real-time communication with dedicated support agents, ensuring rapid query resolution and optimal user satisfaction. Its integration enhances customer engagement, providing immediate access to tailored guidance and problem-solving. Effortlessly exchange messages, files, and ideas in a secure environment, making collaboration a breeze. With our Realtime Chat, communication is instant, effective, and hassle-free.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio1