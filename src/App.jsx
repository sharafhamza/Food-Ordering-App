import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut";
import Body from "./components/Body";
import ErrorPage from "./components/Error/ErrorPage";
import CardSingle from "./components/card/CardSingle";

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
        {
          path: "/restaurents/:resId",
          element: <CardSingle />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
