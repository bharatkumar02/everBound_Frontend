import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import RootRoute from "./app/router/RootRoute";
import Category from "./pages/productCategory/Category";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootRoute,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: Home },
      { path: ":category", Component: Category},
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
