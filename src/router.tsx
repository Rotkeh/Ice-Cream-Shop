import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "./components";
import {
  BrowsePage,
  CartPage,
  CustomIceCreamPage,
  EditIceCreamPage,
  ErrorPage,
  HomePage,
  ItemPage,
  Login,
  Register,
  UserPage,
  VisitPage,
} from "./pages";
import { fetchDataFromId } from "./loaders/ItemPageLoader";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<HomePage />} />
      <Route element={<BrowsePage />} path="browse" />
      <Route element={<CustomIceCreamPage />} path="custom" />
      <Route element={<CartPage />} path="cart" />
      <Route element={<VisitPage />} path="visit" />
      <Route element={<UserPage />} path="account" />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<EditIceCreamPage />} path="new" />
      <Route
        element={<EditIceCreamPage />}
        path="edit/:id"
        loader={fetchDataFromId}
        errorElement={<ErrorPage />}
      />
      <Route
        element={<ItemPage />}
        path="item/:id"
        loader={fetchDataFromId}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
