import { NavLink } from "react-router-dom"


const GetStarted = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
        
        <div className="w-[50%] px-[20px] py-[50px] bg-white shadow-2xl flex items-center justify-center flex-col">
        <p className="flex gap-[10px] font-naston font-[600] text-[30px] my-[10px]">Step<p className="text-[#FF6719]"> into</p> the <p className="text-[#FF6719]">World</p> of <p className="text-[#FF6719]">Blogging</p> Brilliance</p>

        <p className="text-[15px] font-poppins text-center text-[#949393] mt-[10px]">Congratulations on taking the first step to join our vibrant blogging community! Whether you're a seasoned wordsmith or just beginning your writing journey, we're thrilled to have you here. Our "Getting Started" guide will help you navigate your way through the exciting world of blogging and make the most of your experience.</p>

        <p className="text-[24px] text-[#FF6719] mt-2 font-main2">Sign-In</p>
      <div className="flex mt-4 gap-[10px]">
      <NavLink to="/adminSign-in">
          <button className="h-[40px] min-w-[150px] rounded-md flex items-center justify-center border border-[#FF6719] font-[500] text-[16px] text-[#FF6719] font-poppins">
            As An Admin
          </button>
          </NavLink>
          <NavLink to="/userSignIn">
          <button className="h-[40px] min-w-[150px] bg-[#FF6719] rounded-md flex items-center justify-center ml-[5px] font-poppins text-[white] font-[500] text-[16px]">
            User
          </button>
          </NavLink>
      </div>
        </div>
    </div>
  )
}

export default GetStarted