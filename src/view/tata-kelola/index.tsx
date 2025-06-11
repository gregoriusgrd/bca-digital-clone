"use client"

import CampaignSection from "./sections/03-campaign"
import FraudSection from "./sections/05-fraud"
import HeroSection from "./sections/01-hero"
import IntroSection from "./sections/02-intro"
import WhistleblowingSection from "./sections/04-whistleblowing"

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