import { useArticle } from "../hooks/useArticle";
import { Link } from "react-router-dom";
// import user from "./AdminHeader"
import pix from "../asset/bloggg.jpg";
import { MoonLoader } from "react-spinners";

const ViewCreatedArticle = () => {
  const { article, isLoading } = useArticle();
  return (
    <div className="w-full h-[100%] ">
      {/* <AdminHeader/> */}
      <div>
        {isLoading ? (
          <div className="w-full flex justify-center items-center h-[100vh]">
            <MoonLoader color="#07332a" />
          </div>
        ) : (
          <div className="w-full">
            <main className="flex flex-wrap w-full">
              {article?.map(
                ({ id, title, content, description, category }: any) => {
                  return (
                    <Link to={`/${id}/article`}>
                      <div className="w-[450px] h-[150px] rounded-[5px] border-[1px] border-[silver] flex p-[10px] m-[10px] no-underline text-[black]">
                        <div className="flex flex-col w-[70%]">
                          <title className="text-[30px] font-[700]">
                            {title}
                          </title>

                          <div>{description}</div>
                          <div className="flex justify-between" />
                          <div>
                            <div className="h-[30px] w-[100px] bg-[darkorange] text-[white] rounded-[30px] flex items-center justify-center">
                              {category}
                            </div>
                          </div>
                        </div>
                        <img src={pix} />
                      </div>
                    </Link>
                  );
                }
              )}
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCreatedArticle;
