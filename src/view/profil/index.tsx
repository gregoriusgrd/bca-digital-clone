"use client";

import HeroSection from "./sections/01-hero";
import SejarahSection from "./sections/02-sejarah";

import StrukturOrganisasiSection from "./sections/04-struktur-organisasi";
import LeaderSection from "./sections/05-leader";
import MilestoneSection from "./sections/06-milestone";

export default function ProfilView() {
  return (
    <main>
      <HeroSection />
      <SejarahSection />
      <StrukturOrganisasiSection />
      <LeaderSection />
      <MilestoneSection />
    </main>
  );
}
