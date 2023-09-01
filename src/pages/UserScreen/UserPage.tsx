import {AiOutlineClose, AiOutlineSearch} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"
import img1 from "../../asset/avatar1.png";
import boxImg2 from "../../asset/image2.png";
import { useState } from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Link } from "react-router-dom";

const UserPage = () => {
    const [show,setshow] = useState<boolean>(false)
    const toggle = () => {
        setshow(!show)
    }
  return (
    <div className="w-full h-[100%] flex items-center flex-col">
        {/* main */}
        <div className="flex w-[100%]"> 
            {/* hold */}
            <div className="w-[100%] h-[70px] flex items-center justify-center border-[1px] border-b-[silver]">
                <div className="w-[90%] h-[70px] flex items-center justify-between">
               <div className="flex gap-[10px] items-center">
               <div>logo</div>
               <div className="flex items-center h-[35px] rounded-[20px] border-[1px] border-b-[silver]">
                <div className="ml-[5px] text-[18px] text-[silver]">
                <AiOutlineSearch/> 
                </div>
                <input placeholder="search" className="placeholder:text-[14px] outline-none h-[80%] mx-[5px] text-[14px]"/>
               </div>
               </div>
              <div className="flex gap-6 items-center">
           <Link to="/article">
           <div className="text-[30px] text-[#6b6666] cursor-pointer"><HiOutlineBookOpen/></div>
           </Link>
               <div className="flex items-center  rounded-[20px] border-[1px] gap-[10px] border-b-[silver] py-[3px] px-[5px]">
                
               <div className="ml-[5px] text-[18px] text-[silver] "onClick={toggle}>
              {
                show ? <div> 
                <AiOutlineClose/></div> : <AiOutlineMenu />
              }
                </div>
                <div className="w-[30px] h-[30px] bg-[gold] rounded-[50%] " />
                {/* box */}
             {
                show ?   <div className="py-[8px] w-[150px] flex flex-col items-center absolute top-[70px] right-10  gap-[10px] border-[1px] border-[silver]">
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px]">hhhhh</nav>
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px]">hhhhh</nav>
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px]">hhhhh</nav>
                <nav className="hover:bg-[#ebebebc5] hover:cursor-pointer transition-all duration-400 w-[100%] flex justify-center
                 py-[4px]">hhhhh</nav>
                
            </div> : null
             }
                {/* box */}
               </div>
              </div>
            </div>
            </div>
            </div>
            <br/>
            <br/>
            <div className="w-[100%] h-[80vh] flex justify-center">
               <div className="w-[90%] h-[100%] bg-slate-300 flex">
               <div className="w-[70%] h-[100%]">
               <div className="w-[90%] my-[30px] border-[#d5d4d4ae] border-b-[1px] py-[10px]">
        {/* main */}
        <div className="flex">
            {/* left */}
            <div className="">
                {/* hold */}
                <div className="flex items-center gap-[10px]">
                    <img src={img1} className="w-[25px] h-[25px] object-cover rounded-[50%]"/>
                    <div className="text-[14px] font-[500] ">Barak Obama</div>
                </div>
                <div className="text-[20px] leading-6 font-[600] w-[90%] my-[3px]">Thank You to America's Librarians for Protecting Our Freedom to Read</div>
                <div className="w-[90%] font-[400] text-[#7c7c7c] my-[10px] leading-4 text-[15px]">I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read</div>
                {/* hold */}
                <div className="text-14px flex justify-between w-[95%]">
                    <div>Jul 17 . 4 min read</div>
                </div>
            </div>
            {/* right */}
            <img src={boxImg2} />
        </div>
        {/* main */}
    </div>
               </div>
               <br/>
            <br/>
            <br/>
            <br/>
                <div className="w-[30%] h-[100%] bg-[red]"></div>
               </div>
            </div>
    </div>
  )
}

export default UserPage