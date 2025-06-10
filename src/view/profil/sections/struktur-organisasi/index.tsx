"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function StrukturOrganisasiSection() {
  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya dijalankan sekali
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 100, // Delay sebelum animasi berjalan
    });
  }, []);

  return (
    <section id="4" className="bg-fuchsia-300 py-16 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Struktur Organisasi
        </h2>

        {/* Organizational Structure Image */}
        <div className="">
          <Image 
          src="/profil/img-structure-organisasi-01.png"
          alt="Struktur Organisasi BCA"
          width={888}
          height={716}
          className="relative w-full h-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button>
            <BsArrowLeftCircleFill />
          </button>
          <button>
            <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
    </section>
  );
}

/*
        <div className="absolute bottom-0 right-0 w-[50%] h-full z-0">
          <Image
            src="/home/header-home.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </div>

        <BsArrowLeftCircleFill />
*/