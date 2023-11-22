import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const Root = () => {
    return (
        <>
            <section className='flex gap-10'>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='flex flex-col justify-between'>
                    <Header></Header>
                    <Outlet />
                    <Footer></Footer>
                </div>
            </section>
        </>
    )
}

export default Root
