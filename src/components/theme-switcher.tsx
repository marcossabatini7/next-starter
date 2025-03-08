'use client'

import { useEffect, useState } from 'react'

import { IconMoon, IconSun } from '@tabler/icons-react'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
    // if (typeof window !== 'undefined' && window.localStorage) {
    //     const theme = window.localStorage.getItem('theme')

    //     if (typeof theme === 'string' && ['light', 'dark'].includes(theme)) {
    //         return theme as Theme
    //     }
    // }

    return 'light'
}

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    const swapTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
                type="checkbox"
                className="theme-controller"
                onClick={swapTheme}
            />
            <IconSun className="swap-off size-6 fill-current" />
            <IconMoon className="swap-on size-6 fill-current"></IconMoon>
        </label>
    )
}
