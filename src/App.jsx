import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut";
import Body from "./components/Body";
import ErrorPage from "./components/Error/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Body />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
