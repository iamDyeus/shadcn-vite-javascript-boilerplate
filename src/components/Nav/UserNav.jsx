import React from 'react'
import { Link, NavLink } from "react-router-dom"
import {
    Bell,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function UserNav() {
    return (
        <>

            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6" /> {/* NAV ICON */}
                            <span className="">Dashboard</span> {/* NAV TITLE */}
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <NavLink
                                to="page1"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
                                    }`
                                }
                            >
                                <Home className="h-4 w-4" />
                                Page 1
                            </NavLink>
                            <NavLink
                                to="page2"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
                                    }`
                                }
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Page 2
                                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge>
                            </NavLink>
                            <NavLink
                                to="page3"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
                                    }`
                                }
                            >
                                <Package className="h-4 w-4" />
                                Page 3
                            </NavLink>
                            <NavLink
                                to="page4"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
                                    }`
                                }
                            >
                                <Users className="h-4 w-4" />
                                Page 4
                            </NavLink>
                            <NavLink
                                to="page5"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
                                    }`
                                }
                            >
                                <LineChart className="h-4 w-4" />
                                Page 5
                            </NavLink>
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card x-chunk="dashboard-02-chunk-0">
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Facing Problems?</CardTitle>
                                <CardDescription>
                                    Contact now and get unlimited access to our support
                                    team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Contact Support
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>




        </>
    )
}

export default UserNav