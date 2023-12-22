import { Routes, Route } from "react-router-dom";
import NotFound from "./../pages/NotFound";
import Demo from "./../pages/Demo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
