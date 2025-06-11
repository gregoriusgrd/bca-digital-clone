"use client"

import CampaignSection from "./sections/campaign"
import FraudSection from "./sections/fraud"
import HeroSection from "./sections/hero"
import IntroSection from "./sections/intro"
import WhistleblowingSection from "./sections/whistleblowing"

export default function TataKelolaView () {
    return (
        <main className="bg-white">
            <HeroSection />
            <IntroSection />
            <CampaignSection />
            <WhistleblowingSection />
            <FraudSection />
        </main>
    )
}