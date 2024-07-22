import { useState } from 'react'
import './App.css'
import Main_header from './Components/Main_header'
import About from './Components/About'
import Homepage from './Components/Homepage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Main_header/><Homepage/></>,
    },
    {
      path: "/about-us",
      element: <><Main_header/><About/></>,
    },
  ]);

  return (
    <>
          <RouterProvider router={router} />


    </>
  )
}

export default App
