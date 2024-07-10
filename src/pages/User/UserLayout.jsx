import UserHeader from '@/components/Header/UserHeader'
import UserNav from '@/components/Nav/UserNav'
import React from 'react'
import { Outlet } from 'react-router-dom'

function UserLayout() {
    return (
        <>
            <div>
                <div className="grid w-full min-h-screen min-w-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                    <UserNav />
                    <div className="flex flex-col">
                        <UserHeader />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLayout