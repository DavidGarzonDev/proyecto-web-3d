import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
