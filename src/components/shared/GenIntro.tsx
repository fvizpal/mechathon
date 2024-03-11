import React from 'react'
import Image from 'next/image'

const GenIntro = () => {
  return (
    <section className ="text-gray-600 body-font">
    <div className ="container px-5 py-24 mx-auto flex flex-wrap">
      <div className ="flex w-full mb-20 flex-wrap">
        <h1 className ="sm:text-4xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Discover Your Community....</h1>
        <p className ="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Discover and connect with like-minded individuals effortlessly with ConnectHub. Our app is your gateway to meeting people who share your interests, hobbies, or goals. Whether it's art, fitness, or travel, ConnectHub helps you find your tribe. Download now and start connecting!.</p>
      </div>
      {/* <div className ="flex flex-wrap md:-m-2 -m-1">
        <div className ="flex flex-wrap w-1/2">
          <div className ="md:p-2 p-1 w-1/2">
            <Image alt="gallery" className ="w-full object-cover h-full object-center block" width={500} height={300} src={photo4}/>
          </div>
          <div className ="md:p-2 p-1 w-1/2">
            <Image alt="gallery" className ="w-full object-cover h-full object-center block" width={501} height={301} src="/photo1.jpg"/>
          </div>
          <div className ="md:p-2 p-1 w-full">
            <Image alt="gallery" className ="w-full h-full object-cover object-center block" width={360} height={600} src="/photo1.jpg"/>
          </div>
        </div>
        <div className ="flex flex-wrap w-1/2">
          <div className ="md:p-2 p-1 w-full">
            <Image alt="gallery" className ="w-full h-full object-cover object-center block" width={601} height={361} src={photo4}/>
          </div>
          <div className ="md:p-2 p-1 w-1/2">
            <Image alt="gallery" className ="w-full object-cover h-full object-center block" width={502} height={302} src="/photo1.jpg"/>
          </div>
          <div className ="md:p-2 p-1 w-1/2">
            <Image alt="gallery" className ="w-full object-cover h-full object-center block" width={503} height={303} src="/photo1.jpg"/>
          </div>
        </div>
      </div> */}
    </div>
  </section>
  )
}

export default GenIntro