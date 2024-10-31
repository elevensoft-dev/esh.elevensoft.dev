import { ComingSoon } from "@/pages/coming-soon";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Página não encontrada</div>,
    element: <ComingSoon />,
  },
]);

export default router;
