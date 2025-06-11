"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CampaignSection() {
  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya dijalankan sekali
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 100, // Delay sebelum animasi berjalan
    });
  }, []);

  return (
    <section id="galeri" className="py-16 bg-[#F4FBFB] text-center">
      <div className="container mx-auto">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-[#00A6B5]"
        >
          Compliance Campaign
        </h2>
        <p
          data-aos="fade-up"
          className="text-lg mt-4 text-[#292929]"
        >
          Kampanye kepatuhan yang sedang berlangsung
        </p>
      </div>
    </section>
  );
}

