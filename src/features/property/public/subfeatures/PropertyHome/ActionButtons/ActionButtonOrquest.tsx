"use client"

import { Button } from "@heroui/react"
import { useState } from "react"
import { TabContactContent, TabPostContent, TabRentContent, TabSaleContent } from "./components"

export function ActionButtonOrquest({ defaultTab }: { defaultTab: number }) {
    const [currentTab, setCurrentTab] = useState(defaultTab)
    const buttons = [
        { label: "Contactar", tab: 1, component: TabContactContent },
        { label: "Alquilar", tab: 2, component: TabRentContent },
        { label: "Comprar", tab: 3, component: TabSaleContent },
        { label: "Publicar", tab: 4, component: TabPostContent },
    ]

    const getComponent = (tab: number) => {
        const button = buttons.find(button => button.tab === tab)
        return button?.component
    }
    const CurrentComponent = getComponent(currentTab)
    return (
        <section className=" flex flex-col gap-3 ">
            <div className="grid grid-cols-2 xs:flex gap-3 items-center">
                {buttons.map((button) => (
                    <Button
                        className={`${button.tab === currentTab ? "bg-zinc-800 text-white" : "bg-white text-zinc-800"} border border-gray-300`}
                        key={button.label}
                        onPress={() => setCurrentTab(button.tab)}
                    >{button.label}</Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                {CurrentComponent && <CurrentComponent />}
            </div>
        </section>
    )
}
