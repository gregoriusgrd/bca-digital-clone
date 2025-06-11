"use client";

import Image from "next/image";

import { BsArrowRightShort } from "react-icons/bs";

export default function TataSection() {
  return (
    <section className="bg-fuchsia-200 h-200 px-30 py-8">
      <div className="">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full">
          <div className="img">
            <Image 
            src="/home/home-tatakelola.png"
            alt="Tata Kelola Image"
            width={477}
            height={477}
            className=""
            />
          </div>
          <div className="oo">
            <div className="box-section">
              <div className="desktop">
                <h2 className="text-4xl text-[#00A6B5]">Tata Kelola Perusahaan</h2>
                <p className="text-[#292929]">Bagi BCA Digital, transparansi usaha, kualitas pelayanan, dan kepercayaan nasabah adalah kunci atas keberlangsungan perusahaan kami.</p>
                <div className="flex items-center">
                    <a href="#" className="text-black font-bold">Selengkapnya</a>
                    <BsArrowRightShort className="text-black text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
          <Image
            src="/home/header-home.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
src/view/profil/index.tsx
          container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-6
*/