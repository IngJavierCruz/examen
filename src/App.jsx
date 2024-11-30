import { RouterProvider } from "react-router-dom";
import Router from './router';
import './App.scss'

export default function App() {

  return (
     <RouterProvider router={Router} />
  )
}
