import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "./components";
import {
  BrowsePage,
  CustomIceCreamPage,
  ErrorPage,
  HomePage,
  ItemPage,
} from "./pages";
import { fetchDataFromId } from "./loaders/ItemPageLoader";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<HomePage />} />
      <Route element={<BrowsePage />} path="browse" />
      <Route element={<CustomIceCreamPage />} path="custom" />
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
