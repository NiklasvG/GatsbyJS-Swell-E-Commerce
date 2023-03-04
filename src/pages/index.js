import React, { useContext } from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import { Seo } from '../components/Layouts/Seo'

import { AppContext } from '../context/app-context'

const Index = () => {
    const { isNavOpen, handleNav } = useContext(AppContext)
    console.log(isNavOpen)
    return (
        <MainLayout>
            <main id="Home">
                <section className="min-h-screen flex items-center justify-center flex-col gap-y-4">
                    <h1 className="font-bold text-3xl">Start</h1>
                    <button onClick={handleNav}>onClick</button>
                </section>
            </main>
        </MainLayout>
    )
}

export default Index

export const Head = () => <Seo title="Home" />
