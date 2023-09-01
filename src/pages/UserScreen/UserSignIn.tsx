
import img from "../../asset/bloggg.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignInuserApi } from "../../api/UserAuthApi";
import { useDispatch } from "react-redux";
import { signInUser } from "../../global/globalstate";

const UserSignIn = () => {
  const dispatch = useDispatch()
  
  const navigate = useNavigate();

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),

  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;

  SignInuserApi({email,password}).then((res) => {
    console.log(res)
    dispatch(signInUser(res))
  navigate("/user")
})
  })

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="h-full w-full flex  items-center justify-center ">
        <form
           onSubmit={onSubmit}
          className="flex-col justify-center mr-[20px]  flex w-[250px] h-[300px] pl-[5px] pr-[15px]"
        >
          {/*bg-[#cfcaca] border-[1.5px]*/}
          <p className="text-center w-full pb-[30px] font-main text-[19px] font-[600]">
            Welcome Back.....
          </p>

          <div className="flex flex-col ">
            {/* input-holder */}
            {/* <div className="bg-[whitesmoke] rounded-md h-[35px] w-full"> */}
            <input
              type="text"
              placeholder="Enter you email"
              className="placeholder:text-[12px] border-b-[1px] border-b-[#5f5d5d] placeholder:text-[#1b1a1a]  pl-[5px] h-[35px] w-full text-[12px] outline-none"
              {...register("email")}
            />
            {/* </div> */}
            {errors?.email?.message && (
              <label className="text-right text-[11px] text-[#c74848] font-main">
                Please input this field....
              </label>
            )}
          </div>

          <div className="flex flex-col mt-[10px] ">
            {/* input-holder */}
            {/* <div className="bg-[whitesmoke] border-b-[1.5px] rounded-md h-[35px] w-full"> */}
            <input
              type="password"
              placeholder="Enter your password"
              className="text-[12px] placeholder:text-[12px] border-b-[1px] border-b-[#5f5d5d]  placeholder:text-[#1b1a1a]  pl-[5px] h-[35px] w-full outline-none"
              {...register("password")}
            />
            {/* </div> */}
            {errors?.password?.message && (
              <label className="text-right text-[11px] text-[#c74848] font-main">
                Please input this field....
              </label>
            )}
          </div>

          <div className="w-full flex justify-center mt-[10px]">
            <button
              className="w-[100px] text-[14px] font-[500] h-[30px] p-[5px] rounded-[20px] bg-[darkorange] mt-[20px]"
              type="submit"
            >
              Sign-in
            </button>
          </div>
        </form>

        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
          }}
          className="w-[300px] h-[300px] ml-[20px]  rounded-tr-[20px] rounded-br-[20px]"
        >
          <div className="bg-[rgba(0,0,0,0.6)] h-full w-full rounded-tr-[20px] rounded-br-[20px]">
            <p className="text-center w-full pb-[30px] font-main text-[19px] text-[white] font-[600] pt-[40px]">
              New here ?
            </p>
            <p className="text-center w-full pb-[30px] font-main text-[12px] text-[white] font-[400] ">
              Sign up and discover great amount of new opportunities!
            </p>

            <div className="w-full flex justify-center">
              <Link to="/userSignUp">
                <button className="text-center w-[100px] h-[30px] border border-[white] text-[14px] rounded-[20px] text-[white] font-[500] mt-[40px] flex items-center justify-center p-[5px] ">
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
          {/* <img
          src={jkdf}
          alt=""
          className="w-[200px] h-[300px] rounded-tr-[20px] rounded-br-[20px]"
        /> */}
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;

