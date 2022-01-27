import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "../components/pages/Login";

import { routes } from "./list-route.router";
const page = (path) => lazy(() => import(`../components/pages/${path}`));

// const LoginPage = lazy(() => import("../components/pages/Login"));
const LoginPage = page("Login");

function route(props) {
  const convertComponetToElement = (element) => {
    const Element = page(element);
    return <Element />;
  };
  const login = page("Login");
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={convertComponetToElement(route.element)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default route;
