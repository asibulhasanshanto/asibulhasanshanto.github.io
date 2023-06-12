import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import EtheriumBlogs from "./pages/bn/etherium/EtheriumBlogs";

const router = createBrowserRouter([
  {
    path: "/blog",
    element: <Navigate to={"/blog/bn"} />,
  },
  {
    path: "/blog/bn",
    // element: <Home />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "web3_etherium_solidity",
        element: <EtheriumBlogs />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
