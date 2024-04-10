import React from 'react'
import { Outlet } from 'react-router-dom'
import NavMenu from '../components/menu/NavMenu'

export const Layout = () => {
    return (
        <>
            <div className="bg-[#F8F8F8]">
                <NavMenu />
                <main className="">
                    <Outlet />
                </main>
            </div>
        </>
    )
}
