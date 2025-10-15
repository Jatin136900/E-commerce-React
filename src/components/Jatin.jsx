import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

export default function Jatin({ hideHeader }) {
    const [currency, setCurrency] = useState("INR")
    return (
        <>
            <Header currency={currency} setCurrency={setCurrency} />
            <Outlet context={{ currency, setCurrency }} />
            <Footer />
        </>
    )
}
