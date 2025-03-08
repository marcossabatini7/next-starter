import Link from 'next/link'

import { IconMenu3 } from '@tabler/icons-react'

import ThemeSwitcher from './theme-switcher'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost md:hidden"
                    >
                        <IconMenu3 />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    Next.js Starter
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <ThemeSwitcher />
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                    <li>
                        <a>Register</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
