"use client"

import Navbar from "@/components/navbar"
import HeroSection from "./sections/01-hero"
import IntroSection from "./sections/02-intro"
import CampaignSection from "./sections/03-campaign"
import WhistleblowingSection from "./sections/04-whistleblowing"
import FraudSection from "./sections/05-fraud"
import Footer from "@/components/footer"

export default function TataKelolaView () {
    return (
        <main className="bg-white">
            <Navbar />
            <HeroSection />
            <IntroSection />
            <CampaignSection />
            <WhistleblowingSection />
            <FraudSection />
            <Footer />
        </main>
    )
}