"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MilestoneSection() {
  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya dijalankan sekali
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 100, // Delay sebelum animasi berjalan
    });
  }, []);

    return(
        <section>
            <div data-aos="fade-up" className="container mx-auto px-24">
                <h2 className="font-figtree text-5xl font-bold text-start mb-6 text-[#00A6B5]">Milestone</h2>
            </div>

            {/* Desktop Image */}
            <div data-aos="fade-up" className="hidden sm:block">
                <Image
                src="/profil/milestone/img-milestone-desktop.svg"
                alt="BCA Digital Milestone"
                width={1200}
                height={600}
                className="mx-auto" />
            </div>

            {/* Mobile Image */}
            <div data-aos="fade-up" className="block sm:hidden">
                <Image
                src="/profil/milestone/img-milestone-mobile.svg"
                alt="BCA Digital Milestone"
                width={400}
                height={300}
                className="mx-auto" />
            </div>
        </section>
    )
}