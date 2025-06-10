"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StrukturOrganisasiSection() {
  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya dijalankan sekali
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 100, // Delay sebelum animasi berjalan
    });
  }, []);

  return (
    <section id="4" className="py-16 bg-[#F4FBFB] text-center">
      <div className="container mx-auto">

      </div>
    </section>
  );
}

