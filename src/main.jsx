import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import Disease from "./Pages/Disiases/Disease";

//import paths from link of the diseases
import PulmonaryFibrosis from "./Pages/Disiases/pulmonary-fibrosis/PulmonaryFibrosis.jsx";
import Asthma from "./Pages/Disiases/asthma/Asthma";
import LungCancer from "./Pages/Disiases/lung-cancer/LungCancer";
import PulmonaryHypertension from "./Pages/Disiases/pulmonary-hypertension/PulmonaryHypertension";

import "./index.css";
import KnowYourLungs from "./Pages/Loungs/KnowYourLungs.jsx";
import Quiz from "./Pages/quiz/Quiz.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<KnowYourLungs />} />
        <Route path="fibrosis-pulmonar" element={<PulmonaryFibrosis />} />
        <Route path="asma" element={<Asthma />} />
        <Route path="cancer-pulmonar" element={<LungCancer />} />
        <Route path="hipertension-pulmonar" element={<PulmonaryHypertension />} />  
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
