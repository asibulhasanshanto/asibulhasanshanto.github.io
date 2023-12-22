import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./routes";

function App() {
  const { darkMode } = useTheme();
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <BrowserRouter>
      <Router />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
    </BrowserRouter>
  );
}

export default App;
