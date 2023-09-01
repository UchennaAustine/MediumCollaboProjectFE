import axios from "axios";

const url:string = "https://blogbe.onrender.com/api/v1";

export const viewArticles = async () => {
  return await axios.get(`${url}/get-articles`).then((res: any) => {
    return res.data.data;
  });
};

export const viewOneArticle = async (articleID: string) => {
  return await axios
    .get(`${url}/${articleID}/get-one-article`)
    .then((res: any) => {
      return res.data.data;
    });
};

export const createArticle = async (data: {}) => {
  return await axios.post(`${url}/create-articles`, data).then((res: any) => {
    return res.data.data;
  });
};


// const ArticleAPI = () => {
//   return (
//     <div>ArticleAPI</div>
//   )
// }

// export default ArticleAPI
