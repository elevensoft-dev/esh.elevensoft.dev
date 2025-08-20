import React from "react"
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet"

import "./app.css";
import Layout from "./components/layout";
import ErrorBoundary from "./routes/error-boundary";
import Home from "./routes/home";
import Quiz from "./routes/quiz";
import QuizResultView from "./routes/quiz-response";
import Pricing from "./routes/pricing";
import SecurityPage from "./routes/security";
import ComparePage from "./routes/compare";
import DocsPage from "./routes/docs";
import AboutPage from "./routes/about";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="security" element={<SecurityPage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="docs" element={<DocsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="resultado-quiz" element={<QuizResultView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>);

