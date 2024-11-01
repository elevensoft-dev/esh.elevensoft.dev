import { ComingSoon } from "@/pages/coming-soon";
import Home from "@/pages/home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Página não encontrada</div>,
    element: <ComingSoon />,
  },
  {
    path: "/home",
    errorElement: <div>Página não encontrada</div>,
    element: <Home />,
  }
]);

export default router;
