'use client'

import Image from 'next/image'
import React from 'react'
import Marketing from './Marketing'
import Price from './Price'
import Footer from './Footer'
import { useRouter } from 'next/navigation'

const Hero = () => {

  const route = useRouter();

  return (
     <section className="bg-black text-white flex items-center flex-col">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
            <h1
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl"
            >
                AI-Powered Subtitles To

                <span className="sm:block"> Enhance Every Word </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                className="block w-full rounded   bg-gradient-to-r from-primary via-purple-600  to-purple-400  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:cursor-pointer"
               onClick={()=>route.push("/dashboard")}

                >
                Get Started
                </a>
            </div>
            </div>
        </div>
        <Image src={"/imagehero.png"} alt='heroimage' width={1000} height={700} className='rounded-xl border-2 border-purple-300 '/>
        <Marketing/>
        <Price/>
        {/* <Footer/> */}
        </section>
  )
}

export default Hero
