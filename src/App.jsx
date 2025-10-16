import MainSection from './pages/MainSection'
import SingleProduct from './pages/SingleProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jatin from './components/Jatin'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import AddToCart from './pages/AddToCart'
import LoginPage from './pages/LoginPage'
import Logout from './pages/Logout'
import SignUp from './pages/SignUp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Jatin />,
    children: [
      { index: true, element: <MainSection/> },
      { index: "Home",element: <MainSection /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:id", element: <SingleProduct /> }, // Dynamic route
      { path: "*", element: <NotFound /> },
      { path: "AddToCart", element: <AddToCart /> },
      { path: "MainSection", element: <MainSection /> },
      { path: "LoginPage", element: <LoginPage /> },
      { path: "Logout", element: <Logout /> },
      { path: "SignUp", element: <SignUp /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
