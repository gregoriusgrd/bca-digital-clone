"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#12B2C0] h-[600px] overflow-hidden">

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-16 h-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-8 max-w-sm">
            <h1 className="text-white text-7xl font-bold leading-tight">
              Ada
              <br />
              Karenamu
            </h1>
            <p className="text-white text-lg">
              Lahir digital. Bank yang selalu ada tanpa jarak. Semudah itu,
              senyaman itu. Kami hadir buat kamu. Kami ya kamu.
            </p>
            <div>
              <a
                href="/profil"
                className="w-[160px] inline-block bg-[#4BCDCF] text-white px-6 py-3 border-2 rounded-full hover:underline"
              >
                Kenalan, yuk!
              </a>
            </div>
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

// <div className="h-[600px] bg-[url('/home/travel-section/travel-background.jpg')] bg-cover bg-center rounded">

/*
className="mt-6 inline-block bg-white text-[#3BB8C3] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
    >
container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-6
*/

// backup bruh
/*

src/view/home/sections/hero/index.tsx
*/
