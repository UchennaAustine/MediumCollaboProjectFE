import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/common/Layout";
import ArticleEditor from "../pages/ArticleEditor";
import ViewCreatedArticle from "../pages/ViewCreatedArticle";
import AdminLayout from "../Component/common/AdminLayout";
import GetStarted from "../pages/GetStarted";
import UserPage from "../pages/UserScreen/UserPage";
import AdminHomePage from "../pages/AdminScreen/AdminHomePage";
import AdminSignIn from "../pages/AdminScreen/AdminSignIn";
import AdminSignUp from "../pages/AdminScreen/AdminSignUp";
import UserSignUp from "../pages/UserScreen/UserSignup";
import UserSignIn from "../pages/UserScreen/UserSignIn";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/vca",
        element: <ViewCreatedArticle />,
      },
    ],
   
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHomePage />,
      },
 
    ],
  },
  {
    index: true,
    path: "/article",
    element: <ArticleEditor />,
  },
  {
    index: true,
    path: "/getStartedPage",
    element: <GetStarted />,
  },
  {
    index: true,
    path: "/home",
    element: <UserPage />,
  },
  {
    index: true,
    path: "/adminSignin",
    element: <AdminSignIn />,
  },
  {
    index: true,
    path: "/adminSignup",
    element: <AdminSignUp />,
  },
  {
    index: true,
    path: "/userSignup",
    element: <UserSignUp />,
  },
  {
    index: true,
    path: "/userSignin",
    element: <UserSignIn />,
  },
]);
