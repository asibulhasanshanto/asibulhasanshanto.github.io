import { Routes, Route } from "react-router-dom";
import NotFound from "./../pages/NotFound";
import Demo from "./../pages/Demo";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
