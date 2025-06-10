"use client"

import HeroSection from "./sections/hero"
import ProductSection from "./sections/product"
import TataSection from "./sections/tata"

export default function HomeView () {
    return (
        <main>
            <HeroSection />
            <ProductSection />
            <TataSection />
        </main>
    )
}