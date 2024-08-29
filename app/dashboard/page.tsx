import Header from "@/components/Header"
import Vplayer from "@/components/Vplayer"

// video player dashboard
 const page = () => {
   return (
     <div className="bg-black h-full w-full">
      <Header/>
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent flex justify-center m-10 sm:text-4xl"
       >
        AI-Powered Subtitles
    </h1>
       {/* video palyer */}
        <Vplayer/>
        {/* features */}
        <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent flex justify-start mt-20 mx-10 sm:text-4xl"
       >
         Features
         
    </h1>
    <ul className="text-white text-lg mt-6 mx-14 tracking-widest pb-4" style={{ listStyleType: 'disc' }}>
          <li>Start/Pause button</li>
          <li>Speed control Options</li>
          <li >Enable/disable subtitles.</li>
          <li >Change the font size of subtitles</li>
          <li >Change the font color of subtitles </li>
          <li >Change background of subtitles </li>
          <li >Change font weight of subtitles</li>
          <li className="pb-10">Change font style of subtitles</li>
         </ul>
     </div>
      
   )
 }
 
 export default page
 
