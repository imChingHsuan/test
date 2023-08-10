import * as React from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Home/Layout/Layout";
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
const RoutesRender = () => {
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
export default RoutesRender;
