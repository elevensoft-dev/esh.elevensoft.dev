import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router.tsx";

import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-MG66ZMTZ",
  events: {
    sendUserInfo: "ESH - tag manager home page",
  },
};

ReactGA.initialize("G-RWQ28EGF21");
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
