"use client";

import { Link } from "lucide-react";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="bg-white h-[725px] px-30 py-8">
      <div className="m-auto h-full flex flex-col justify-center items-center px-8 py-10">
        <Image
          src="/home/logo-product.png"
          alt="BCA Digital Logo"
          width={120}
          height={120}
          className="object-contain mb-8"
        />
        <h2 className="text-3xl font-bold text-[#0D3952] mb-8">blu by BCA Digital</h2>
        <p className="text-center text-xl text-[#464646] mb-15">Aplikasi mobile bank digital yang bisa ini itu, dan menyatu dengan hidupmu</p>
        <Link href="#" className="text-[#30CED0] border-2 rounded-full border-[#30CED0] px-9 py-5">Selengkapnya</Link>
      </div>
    </section>
  );
}
