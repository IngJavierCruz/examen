import { RouterProvider } from "react-router-dom";

import './App.scss'
import Router from "./router";

export default function App() {

  return (
     <RouterProvider router={Router} />
  )
}
