import React from "react";
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./app.css";
import Layout from "./components/layout";
import ErrorBoundary from "./routes/error-boundary";
import Home from "./routes/home";
import Quiz from "./routes/quiz";
import QuizResultView from "./routes/quiz-response";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="resultado-quiz" element={<QuizResultView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>);

