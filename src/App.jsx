// import React, { Children } from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
import MainSection from './pages/MainSection'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Jatin from './components/Jatin'
import About from './pages/About'
import Contact from './pages/Contact'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Jatin />,

    children: [
      {
        index: true,
        element: <MainSection />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}