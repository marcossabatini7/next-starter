import type { Metadata } from 'next'

import { Head } from './head'

import './globals.css'

export const metadata: Metadata = {
    title: 'Next.js Starter',
    description: 'Easy to start with Next.js',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head />
            <body className="antialiased">{children}</body>
        </html>
    )
}
