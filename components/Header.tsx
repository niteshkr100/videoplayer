'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
 

const Header = () => {

  // router hook for navigation
  const route =  useRouter();

  return (
    <div className="p-5 flex justify-between item-center bg-dark-1">
      <Image
        src={"/logo.webp"}
        alt='logo'
        width={100}
        height={100}
        onClick={()=>route.push("/")}
        className="hover:cursor-pointer"
      />
       <button className='px-6 border-4  border-purple-500 rounded-tr-xl text-white bg-black'>Sign in</button>
    </div>
  )
}

export default Header
