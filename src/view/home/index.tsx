"use client"

import HeroSection from "./sections/01-hero"
import ProductSection from "./sections/02-product"
import TataSection from "./sections/03-tata"

export default function HomeView () {
    return (
        <main>
            <HeroSection />
            <ProductSection />
            <TataSection />
        </main>
    )
}