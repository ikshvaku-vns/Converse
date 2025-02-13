import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Cluster1 from "./Pages/Cluster1";
import Cluster2 from "./Pages/Cluster2";
import Cluster3 from "./Pages/Cluster3";
import Home2 from "./Pages/Home2";

import BuildingContextProvider from "./context/BuildingContext";
import FloorRefuge from "./Pages/FloorRefuge";

import FloorTypical from "./Pages/FloorTypical";
import Unit from "./Pages/Unit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home2",
      element: <Home2 />,
    },
    {
      path: "/cluster1",
      element: <Cluster1 />,
    },
    {
      path: "/cluster1/:towerId/floor/:Id",
      element: <FloorTypical />,
    },
    {
      path: "/cluster1/unit/:Id",
      element: <Unit />,
    },
    {
      path: "/cluster2",
      element: <Cluster2 />,
    },
    {
      path: "/cluster2/:towerId/floor/:Id",
      element: <FloorTypical />,
    },
    {
      path: "/cluster2/unit/:Id",
      element: <Unit />,
    },
    {
      path: "/cluster3",
      element: <Cluster3 />,
    },
    {
      path: "/cluster3/:towerId/floor/:Id",
      element: <FloorTypical />,
    },
    {
      path: "/cluster3/unit/:Id",
      element: <Unit />,
    },

    {
      path: "/refuge",
      element: <FloorRefuge />,
    },
  ]);

  return (
    <>
      <BuildingContextProvider>
        <RouterProvider router={router} />
      </BuildingContextProvider>
    </>
  );
}

export default App;
