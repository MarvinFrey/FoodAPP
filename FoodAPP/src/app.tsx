import FoodAPP from "./Components/FoodAPP";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodAPP />,
  },
  {
    path: "/about",
    element: <div>Hallo</div>,
  },
]);

export function App() {
  return (
    <div class="mx-auto w-80 text-center pt-5">
      <RouterProvider router={router} />



    </div >
  );
}
