"use client"

import CampaignSection from "./sections/campaign"
import FraudSection from "./sections/fraud"
import HeroSection from "./sections/hero"
import SloganSection from "./sections/slogan"
import WhistleblowingSection from "./sections/whistleblowing"

export default function TataKelolaView () {
    return (
        <main className="bg-white">
            <HeroSection />
            <SloganSection />
            <CampaignSection />
            <WhistleblowingSection />
            <FraudSection />
        </main>
    )
}