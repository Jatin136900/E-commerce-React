import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Jatin() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}