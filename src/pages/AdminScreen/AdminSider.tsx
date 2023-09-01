import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsFolder } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CgLogOut } from "react-icons/cg";
import { IoMdContacts } from "react-icons/io";
import logox from "../../asset/bloggg.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeToggleFalse,
  changeToggleTrue,
  logOut,
} from "../../global/globalstate";

{
  /*
Blog/info sysytem


hotel/rentals/management system
* two screens(
    admin progress of the business
    how much have we made
    bookings

    user screen
    air bnb template
)

project management system
monday.com
slack

*/
}

const AdminSider = () => {
  const dispatch = useDispatch();
  const User = useSelector((state: any) => state.user);
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div>
      {toggle ? (
        <div className="h-[100vh] w-[65px] fixed bg-[darkorange] text-white pt-[10px]">
          <div
            className="
              flex
              flex-col
              w-full 
              h-[90px]
      hover:bg-[#f9bf548a]
       hover:text-[black]
              items-center
              justify-between
              px-[5px]
              hover:cursor-pointer 
              transition-all 
              duration-300 
              hover:rounded-md
              "
          >
            <div
              className="
                  my-[5px] 
                  h-[40px] 
                  w-[40px] 
                  flex 
                  items-center 
                  justify-center 
                  rounded 
                  bg-[white] 
                  "
            >
              <img src={logox} alt="" className="w-[35px] " />
            </div>
            {toggle ? (
              <HiChevronDoubleRight
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleFalse());
                }}
              />
            ) : (
              <HiChevronDoubleRight
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleTrue());
                }}
              />
            )}
          </div>

          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md"
          >
            <LuLayoutDashboard className="text-[23px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <IoMdContacts className="text-[23px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BiCategory className="text-[25px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <LiaFacebookMessenger className="text-[27px]" />
          </div>
          <hr className="mt-[200px]" />
          <div
            className="flex w-[64.5px]
              h-[50px]
               hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <div
              className="h-[40px] flex items-center  mb-[5px] w-[25px] rounded
              [50px]
      hover:text-[black] hover:cursor-pointer transition-all duration-300"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              <CgLogOut className="text-[25px]" />
            </div>
          </div>
          <hr />
          <div className="flex ml-[20px] items-center mt-[10px]">
            <img
              className="h-[25px] w-[25px] object-cover border-[1.5px] rounded-[50%] "
              src={User?.avatar}
            />
            <div className="flex flex-col ml-[10px] justify-center"></div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] w-[200px] fixed bg-[orange] text-white pt-[10px]">
          <div
            className="
      flex
      w-full 
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a]
       hover:text-[black]
      items-center
      justify-between
      px-[5px]
      hover:cursor-pointer 
      transition-all 
      duration-300 
      hover:rounded-md"
          >
            <div
              className="
          my-[5px] 
          h-[40px] 
          w-[40px] 
          flex 
          items-center 
          justify-center 
          rounded 
          bg-[white] 
          ml-[10px]"
            >
              <img src={logox} alt="" className="w-[35px] " />
            </div>
            <div className="text-[20px]">{User?.name}</div>
            {toggle ? (
              <HiChevronDoubleLeft
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleFalse());
                }}
              />
            ) : (
              <HiChevronDoubleLeft
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleTrue());
                }}
              />
            )}
          </div>

          <div
            className="flex w-full
      h-[50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md"
          >
            <LuLayoutDashboard className="text-[23px]" />
            <p className="ml-[15px]">Dashboard</p>
          </div>
          <div
            className="flex w-full
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <IoMdContacts className="text-[23px]" />
            <p className="ml-[15px]">All Users</p>
          </div>
          <div
            className="flex w-full
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BiCategory className="text-[25px]" />
            <p className="ml-[15px]">Add Category</p>
          </div>
          <div
            className="flex w-full
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <LiaFacebookMessenger className="text-[25px]" />
            <p className="ml-[15px]">Messages</p>
          </div>
          <hr className="mt-[200px]" />
          <div
            className="flex w-full
      h-[50px]
       hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center "
          >
            <div
              className="h-[50px] flex items-center justify-center mb-[5px] w-[40px] rounded
              [50px]
               hover:text-[black] hover:cursor-pointer transition-all duration-300"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              <CgLogOut className="text-[25px]" />
            </div>
            <span className="ml-[15px]">Log out</span>
          </div>
          <hr />
          <div className="flex items-center mt-[10px]">
            <img
              className="h-[40px] w-[40px] object-cover border-[1.5px] rounded-[50%] ml-[10px] "
              src={User?.avatar}
            />

            <div className="flex flex-col ml-[10px] justify-center">
              {/* <div className="text-[14px]">{User?.name}</div> */}
              <div className="text-[12px]">{User?.email}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSider;
