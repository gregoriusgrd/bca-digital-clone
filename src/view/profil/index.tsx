"use client";

import HeroSection from "./sections/hero";
import SejarahSection from "./sections/sejarah";
import StrukturOrganisasiSection from "./sections/struktur-organisasi";

export default function ProfilView() {
  return (
    <main>
      <HeroSection />
      <SejarahSection />
      <StrukturOrganisasiSection />
    </main>
  );
}
