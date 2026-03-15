import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import RootRoute from "./app/router/RootRoute";
import Category from "./pages/productCategory/Category";
import PrivacyPolicy from "./pages/footer-pages/privacy-policy/PrivacyPolice";
import TermsCondition from "./pages/footer-pages/terms-condition/TermsCondition";
import ReturnPolicy from "./pages/footer-pages/return-policy/ReturnPolicy";
import AboutPage from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/FAQ";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/Login";
import Otp from "./pages/auth/Otp";
import NewPassword from "./pages/auth/NewPassword";
import Registration from "./pages/auth/Registration";
import ResetPassword from "./pages/auth/ResetPassword";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootRoute,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: Home },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-conditions", Component: TermsCondition },
      { path: "return-policy", Component: ReturnPolicy },
      { path: "about-us", Component: AboutPage },
      { path: "contact-us", Component: Contact },
      { path: "faq", Component: Faq },
      { path: "cart", Component: Cart },
      { path: ":category", Component: Category },
    ],
  },

  { path: "login", Component: Login },
  { path: "otp", Component: Otp },
  { path: "newPassword", Component: NewPassword },
  { path: "register", Component: Registration },
  { path: "reset-password", Component: ResetPassword },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
