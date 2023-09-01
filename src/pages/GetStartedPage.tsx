import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect"

const GetStartedPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[white] flex justify-center items-center ">
      {/* main */}
      <div className="w-[85%] h-[100vh]  rounded-md flex flex-col">
        <div className="bg-[#006F5C] rounded-tl-[10px] rounded-tr-[10px] w-full h-[70%] justify-center items-center flex flex-col px-[10px]">
          <p className="font-naston mr-[60px]  text-[40px] w-[850px] text-center text-[white] font-[700] flex  justify-between">Step<p className="text-[#FF6719]"> into</p> the <p className="text-[#FF6719]">World</p> of <p className="text-[#FF6719]">Blogging</p> Brilliance</p>
        <div className="text-white text-[20px]">
        <Typewriter
        
          options={{ loop: true }}
          onInit={(typewriter: any) => {
            
            typewriter

              .typeString(`Step into the world of Blogging Brilliance`)
              .pauseFor(1500)
              .deleteAll()

              .typeString("Health Insurance...")
              .pauseFor(1500)
              .deleteAll()

              .typeString("Emergency Hero...")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
        </div>
          <p className="font-poppins text-center text-[16px] font[500px] text-[white]">Congratulations on taking the first step to join our vibrant blogging community! Whether you're a seasoned wordsmith or just beginning your writing journey, we're thrilled to have you here. Our "Getting Started" guide will help you navigate your way through the exciting world of blogging and make the most of your experience.</p>
        </div>
        <div className="w-full h-[30%] bg-[#ddf5f1] rounded-br-[10px] rounded-bl-[10px] flex items-center justify-center flex-col">
            <p className="mb-[15px]  text-[30px] text-[#FF6719] font-astro">Sign-In</p>
          <div className="w-full flex items-center justify-center">
          <NavLink to="/adminSignIn">
          <button className="h-[40px] min-w-[150px] rounded-md flex items-center justify-center border border-[#FF6719] font-[500] text-[16px] text-[#FF6719] mr-[10px] font-astro">
            As An Admin
          </button>
          </NavLink>
          <NavLink to="/userSignIn">
          <button className="h-[40px] min-w-[150px] bg-[#FF6719] rounded-md flex items-center justify-center ml-[10px] font-astro text-[white] font-[500] text-[16px]">
            User
          </button>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;


