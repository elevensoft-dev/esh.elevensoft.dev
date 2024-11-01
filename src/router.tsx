import { ComingSoon } from "@/pages/coming-soon";
import Home from "@/pages/home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={<ComingSoon />}
      errorElement={<div>Página não encontrada</div>}
    />,
    <Route
      path="/home"
      element={<Home />}
      errorElement={<div>Página não encontrada</div>}
    />,
  ])
);

export default router;
