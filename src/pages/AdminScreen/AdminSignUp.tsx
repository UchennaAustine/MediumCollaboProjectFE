import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AdminSignUp = () => {
    const navigate = useNavigate();


    const schema = yup
      .object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(5),
        confirmPassword: yup
          .string()
          .required()
          .oneOf([yup.ref("password")]),
      })
      .required();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = handleSubmit(async (res: any) => {
      console.log("submit", res);
  
      navigate("/userSignIn");
    });
  return (
    <div className=" w-full h-[100vh] flex items-center justify-center">
        {/*  */}
        <div className="w-[45%] py-[50px] bg-white shadow-2xl flex items-center justify-center flex-col">
            <div className="text-[32px] font-[600]">Join Medium</div>
            {/* inputHolder */}
            <div className="w-[50%] mt-[10px]">
                <div className="text-[14px] font-[500]">Name</div>
                <input placeholder="Enter your name" className="w-[100%] h-[40px] pl-[10px] placeholder:text-[14px] outline-none rounded border-[1px] border-[rgb(255,192,23)]"
                {...register("name")}
                />
            </div>
            {/* inputHolder */}
            <div className="w-[50%] mt-[10px]">
                <div className="text-[14px] font-[500]">Email</div>
                <input placeholder="Enter your email" className="w-[100%] h-[40px] pl-[10px] placeholder:text-[14px] outline-none rounded border-[1px] border-[rgb(255,192,23)]"
                {...register("email")}
                />
            </div>
            {/* inputHolder */}
            <div className="w-[50%] mt-[10px]">
                <div className="text-[14px] font-[500]">Password</div>
                <input placeholder="Enter your password" className="w-[100%] h-[40px] pl-[10px] placeholder:text-[14px] outline-none rounded border-[1px] border-[rgb(255,192,23)]"
                {...register("password")}
                />
            </div>
            {/* inputHolder */}
            <div className="w-[50%] mt-[10px]">
                <div className="text-[14px] font-[500]">Confirm Password</div>
                <input placeholder="confirm password" className="w-[100%] h-[40px] pl-[10px] placeholder:text-[14px] outline-none rounded border-[1px] border-[rgb(255,192,23)]"
                {...register("confirmPassword")}
                />
            </div>
            <nav className="text-[14px] font-[4s00] mt-[20px]">Already have an account?
                   <Link to="/adminSign-in">
                   <span className="text-[rgb(255,192,23)] text-[16px]"> Sign-in</span>
                   </Link>
                </nav>
            <div className="w-[50%] mt-[10px]">
            <button className="w-[100%] mt-[10px] rounded h-[45px] bg-[rgb(255,192,23)] text-white">Sign-Up</button>
            </div>
            <div>
               
            </div>
        </div>
        {/*  */}
    </div>
  )
}

export default AdminSignUp