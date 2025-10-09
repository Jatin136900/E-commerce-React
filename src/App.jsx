import MainSection from './pages/MainSection'
import SingleProduct from './pages/SingleProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jatin from './components/Jatin'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import AddToCart from './pages/AddToCart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Jatin />,
    children: [
      { index: true, element: <MainSection /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:id", element: <SingleProduct /> }, // Dynamic route
      { path: "*", element: <NotFound /> },
      {path : "AddToCart",element:<AddToCart/>}
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
