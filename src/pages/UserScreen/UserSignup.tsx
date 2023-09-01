import img from "../../asset/bloggg.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { registerApi } from "../../api/UserAuthApi";

const UserSignUp = () => {
  const navigate = useNavigate();

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmission = handleSubmit(async (data) => {
    const { name, email, password } = data;

    registerApi({ name, email, password }).then((res) => {
      console.log(res);
      navigate("/userSignIn");
    });
  });

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="h-full w-full flex items-center justify-center ">
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
          }}
          className="w-[300px] h-[350px] mr-[20px]  rounded-tr-[20px] rounded-br-[20px]"
        >
          <div className="bg-[rgba(0,0,0,0.6)] px-[5px] h-full w-full rounded-tr-[20px] rounded-br-[20px]">
            <p className="text-center w-full pb-[30px] font-main text-[19px] text-[white] font-[600] pt-[40px]">
              Already part of the community ?
            </p>
            <p className="text-center w-full pb-[30px] font-main text-[12px] text-[white] font-[400] ">
              Enjoy full access to all our resources!
            </p>

            <div className="w-full flex justify-center">
              <Link to="/userSignIn">
                <button className="text-center w-[100px] h-[30px] border border-[white] text-[14px] rounded-[20px] text-[white] font-[500] mt-[40px] flex items-center justify-center p-[5px] ">
                  SIGN IN
                </button>
              </Link>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmission}
          className="flex-col justify-center ml-[20px] flex w-[250px] h-[350px] pl-[5px] pr-[15px]"
        >
          {/*bg-[#cfcaca] border-[1.5px]*/}
          <p className="text-center w-full pb-[30px] font-main text-[20px] font-[700]">
            Registration
          </p>
          {/* avatar */}

          <div className="flex flex-col ">
            {/* input-holder */}
            {/* <div className="bg-[whitesmoke] rounded-md h-[35px] w-full"> */}
            <input
              type="text"
              placeholder="Enter your name"
              className="placeholder:text-[12px] border-b-[1px] border-b-[#5f5d5d] placeholder:text-[#1b1a1a]  pl-[5px] h-[35px] w-full text-[12px] outline-none"
              {...register("name")}
            />
            {/* </div> */}
            {errors?.name?.message && (
              <label className="text-right text-[11px] text-[#c74848] font-main">
                Please input this field....
              </label>
            )}
          </div>

          <div className="flex flex-col mt-[10px]">
            {/* input-holder */}
            {/* <div className="bg-[whitesmoke] rounded-md h-[35px] w-full"> */}
            <input
              type="text"
              placeholder="Enter your email"
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
            <input
              type="password"
              placeholder="Enter your password"
              className="text-[12px] placeholder:text-[12px] border-b-[1px] border-b-[#5f5d5d]  placeholder:text-[#1b1a1a]  pl-[5px] h-[35px] w-full outline-none"
              {...register("password")}
            />

            {errors?.password?.message && (
              <label className="text-right text-[11px] text-[#c74848] font-main">
                Please input this field....
              </label>
            )}
          </div>

          <div className="flex flex-col mt-[10px] ">
            <input
              type="confirm"
              placeholder="Re-enter your password"
              className="text-[12px] placeholder:text-[12px] border-b-[1px] border-b-[#5f5d5d]  placeholder:text-[#1b1a1a]  pl-[5px] h-[35px] w-full outline-none"
              {...register("confirm")}
            />

            {errors?.confirm?.message && (
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
              Sign-up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
