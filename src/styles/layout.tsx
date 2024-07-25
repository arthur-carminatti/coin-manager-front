import React, { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="grid min-h-screen grid-rows-app">
      <Sidebar />
      <main className="p-12 pt-5">{children}</main>
      <footer className="flex items-center justify-center bg-transparent pl-12 pr-12 text-center text-cyan-50">
        © 2024 Coin Meneger. Todos os direitos reservados.
      </footer>
    </div>
  )
}
