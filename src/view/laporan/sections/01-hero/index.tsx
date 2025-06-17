"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <section
        id="1"
        className="relative bg-[#12B2C0] h-[600px] overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-16 h-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-8 max-w-sm">
            <h1 className="text-white text-7xl font-bold leading-tight">
              Laporan Perusahaan
            </h1>
            <p className="text-white text-lg">
              Berikut kumpulan dan ringkasan berbagai laporan BCA Digital.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-[50%] h-full z-0">
          <Image
            src="/home/header-home.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>
    </>
  );
}
