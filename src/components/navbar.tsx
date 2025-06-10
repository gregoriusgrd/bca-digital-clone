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
              <a href="#" className="hover:bg-[#1DB5C2] px-4 py-4">
                <span>Profil</span>
              </a>
            </li>
            <li>
              <Link href="/tata-kelola" className="hover:bg-[#1DB5C2] px-4 py-4">
                <span>Tata Kelola</span>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:bg-[#1DB5C2] px-4 py-4">
                <span>Laporan</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#1DB5C2] px-4 py-4">
                <span>Karir</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#1DB5C2] px-4 py-4">
                <span>Rilis Media</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[#1DB5C2] px-4 py-4">
                <span>Kontak</span>
              </a>
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