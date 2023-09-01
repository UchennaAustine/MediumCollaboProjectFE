import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/common/Layout";
import ArticleEditor from "../pages/ArticleEditor";
import ViewCreatedArticle from "../pages/ViewCreatedArticle";
import AdminLayout from "../Component/common/AdminLayout";
import AdminHomePage from "../pages/AdminScreen/AdminHomePage";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ArticleEditor />,
      },
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
]);
