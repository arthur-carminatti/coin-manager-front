import React, { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

interface DefaultLayoutProps {
    children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="min-h-screen grid grid-rows-app">
            <Sidebar />
            <main className="p-12 pt-5">{children}</main>
            <footer className="bg-transparent text-cyan-50 justify-center flex items-center pl-12 pr-12 text-center">
                © 2024 Coin Meneger. Todos os direitos reservados.
            </footer>
        </div>
        // <div className="min-h-screen grid grid-rows-app">
        //     <Sidebar />
        //     <main className="p-12 pt-5">{children}</main>
        //     <footer className="bg-transparent text-cyan-50 justify-center flex">
        //         © 2024 Coin Meneger. Todos os direitos reservados.
        //     </footer>
        // </div>
    );
}