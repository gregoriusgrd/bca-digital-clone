"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="bg-[#3BB8C3] py-10">
      <div className="max-w-7xl mx-auto px-16">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="*">
            <Image
              src="/navbar/logo-white-lg.svg"
              alt="BCA Digital Logo"
              width={180}
              height={80}
              className=""
            />
          </a>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-1 text-white text-sm">
            <li>
              <Link href="/profil" className="hover:bg-[#0CAAB8] px-4 py-4">
                <span>Profil</span>
              </Link>
            </li>
            <li>
              <Link href="/tata-kelola" className="hover:bg-[#0CAAB8] px-4 py-4">
                <span>Tata Kelola</span>
              </Link>
            </li>
            <li>
              <Link href="/laporan" className="hover:bg-[#0CAAB8] px-4 py-4">
                <span>Laporan</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:bg-[#0CAAB8] px-4 py-4">
                <span>Karir</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:bg-[#0CAAB8] px-4 py-4">
                <span>Rilis Media</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:bg-[#0CAAB8] px-4 py-4">
                <span>Kontak</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

/*
<Image
            src="/home/header-home.png"
            alt="Bank image"
            fill
            className="object-contain"
          />
*/