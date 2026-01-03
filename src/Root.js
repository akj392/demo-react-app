import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import getRoutes from "./routes";
import { fetchCurrentUser, finishInitializing } from "./store/slices";

const router = getRoutes();

export default function Root() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(fetchCurrentUser()).finally(() => dispatch(finishInitializing()));;
    } else {
      dispatch(finishInitializing());
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
