import * as React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

import NotFound from "./pages/Home/NotFound/NotFound";
const Courses = () => {
  return (
    <>
      <div>Courses</div>
      <Outlet />
    </>
  );
};
const CoursesIndex = () => {
  return <div>CoursesIndex</div>;
};
const Course = () => {
  return <div>Course</div>;
};
const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/test", element: <Course /> },
        { path: "/test/:id", element: <div>123</div> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <>{routes}</>;
};
export default Routes;
