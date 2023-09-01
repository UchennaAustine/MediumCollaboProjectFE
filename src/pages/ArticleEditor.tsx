import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createArticle } from "../api/ArticleAPI";
import moment from "moment";
import pix from "../asset/medium.png";
const ArticleEditor = () => {
  const { quill, quillRef } = useQuill();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center mt-[10px] justify-center ">
        <div className="flex w-[60%] h-[50px]  justify-between">
          <div className="flex w-[100px] h-[50px]  justify-between items-center px-[5px]">
            <img src={pix} alt="" className="h-full w-[60px]" />
            <p className="ml-[5px]">Draft</p>
          </div>
          <div className="flex w-[200px] h-[50px] justify-between items-center px-[5px]">
            <button
              type="submit"
              className="w-[150px] bg-[darkorange] text-[white] h-[40px] my-[20px]  rounded-[25px] p-[5px]"
            >
              Publish
            </button>
            <div className="mx-[5px] border border-[black] text-[16px] font-naston font-[500] h-[30px] w-[30px] rounded-[50%] flex justify-center items-center">
              U
            </div>
          </div>
        </div>
        <center className="flex flex-col items-center  h-full   w-[750px]">
          <div className="flex flex-col">
            <input
              // {...register("title")}
              placeholder=" Title"
              value={title}
              onChange={(e: any) => {
                setTitle(e.target.value);
              }}
              className="w-[700px] h-[70px] mt-[20px] rounded outline-none border-l-[1px] pl-[5px] placeholder:text-[25px]"
            />
            <div className="flex justify-between items-center w-full h-[60px]">
              <input
                // {...register("description")}
                placeholder="Enter Article Description"
                value={description}
                onChange={(e: any) => {
                  setDescription(e.target.value);
                }}
                className="w-[350px] h-[40px] mt-[10px] rounded outline-none  pl-[5px] placeholder:text-[14px]"
              />
              {/* <input
              placeholder="Enter Article Category"
              value={category}
              onChange={(e: any) => {
                setCategory(e.target.value);
              }}
              className="w-[200px] h-[40px] mt-[20px] rounded outline-none border pl-[5px] placeholder:text-[14px]"
            /> */}
              <label className="text-[14px]">Category</label>
              <select
                className="w-[250px] h-[50px] border pl-[5px] outline-none"
                value={category}
                onChange={(e: any) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="life">life</option>
                <option value="style">style</option>
                <option value="fun">fun</option>
                <option value="tired">tired</option>
                <option value="explore">explore</option>
              </select>
            </div>
          </div>
          <br />
          <div className="w-[700px] mt-[20px] rounded-[10px] px-[5px] ">
            {/* {...register("content")} */}
            <div ref={quillRef} />
          </div>
          <br />
        </center>
      </div>
    </div>
  );
};

export default ArticleEditor;
