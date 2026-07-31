import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import { RocketCursor } from "./components/RocketCursor.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const ThankYou = lazy(() => import("./pages/ThankYou.tsx"));

const App = () => (
  <BrowserRouter>
    <RocketCursor />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/456" element={<Suspense fallback={null}><ThankYou /></Suspense>} />
      <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
    </Routes>
  </BrowserRouter>
);

export default App;
