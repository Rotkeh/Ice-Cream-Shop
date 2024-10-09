import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "./components";
import { HomePage } from "./pages";
import { BrowsePage } from "./pages/BrowsePage";
import { ItemPage } from "./pages/ItemPage";
import { ErrorPage } from "./pages/ErrorPage";
import { fetchDataFromId } from "./loaders/ItemPageLoader";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<HomePage />} />
      <Route element={<BrowsePage />} path="browse" />
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
