"use client";

import HeroSection from "./sections/01-hero";
import LeaderSection from "./sections/05-leader";
import SejarahSection from "./sections/02-sejarah";
import StrukturOrganisasiSection from "./sections/04-struktur-organisasi";

export default function ProfilView() {
  return (
    <main>
      <HeroSection />
      <SejarahSection />
      <StrukturOrganisasiSection />
      <LeaderSection />
    </main>
  );
}
