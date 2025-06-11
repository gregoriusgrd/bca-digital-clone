"use client"

import Navbar from "@/components/navbar"
import HeroSection from "./sections/01-hero"
import ProductSection from "./sections/02-product"
import TataSection from "./sections/03-tata"
import Footer from "@/components/footer"

export default function HomeView () {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <ProductSection />
            <TataSection />
            <Footer />
        </main>
    )
}