import MainSection from './pages/MainSection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jatin from './components/Jatin'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound' // Make sure this file exists

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
      },
      {
        path: "*",
        element: <NotFound />
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
