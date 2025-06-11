"use client";

import Image from "next/image";
import Link from "next/link";

// Social Links
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="bg-[#00A6B5] text-white font-figtree">
      {/* Light Blue Section */}
      <footer className="container mx-auto py-18 px-6">
        <nav className="flex flex-col md:flex-row md:justify-between items-center gap-6 pb-4">
          <Link href="">
            <Image
              src="/navbar/logo-white-lg.svg"
              alt="BCA Digital Logo"
              width={200}
              height={80}
              className="mx-auto md:mx-0 pl-4"
            />
          </Link>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-white">
            <li>
              <Link
                href="/profil"
                className="hover:bg-[#0CAAB8] px-4 py-4 hover:text-[#F9F9F9]"
              >
                <span>Profil</span>
              </Link>
            </li>
            <li>
              <Link
                href="/tata-kelola"
                className="hover:bg-[#0CAAB8] px-4 py-4 hover:text-[#F9F9F9]"
              >
                <span>Tata Kelola</span>
              </Link>
            </li>
            <li>
              <Link
                href="/laporan"
                className="hover:bg-[#0CAAB8] px-4 py-4 hover:text-[#F9F9F9]"
              >
                <span>Laporan</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:bg-[#0CAAB8] px-4 py-4 hover:text-[#F9F9F9]"
              >
                <span>Kontak</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-between">
          {/* Quote */}
          <div className="mt-10 text-center md:text-left">
            <p className="font-light text-xs text-white leading-relaxed">
              BCA Digital berizin dan diawasi oleh Otoritas Jasa Keuangan &
              <br />
              Bank Indonesia.
              <br />
              BCA Digital merupakan peserta penjaminan LPS.
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <Link href="#" target="_blank">
              <div className="w-12 h-12 bg-[#18ADBB] rounded-full flex items-center justify-center">
                <BsTwitterX className="text-white w-5 h-5" />
              </div>
            </Link>
            <Link href="#" target="_blank">
              <div className="w-12 h-12 bg-[#18ADBB] rounded-full flex items-center justify-center">
                <BsInstagram className="text-white w-5 h-5" />
              </div>
            </Link>
            <Link href="#" target="_blank">
              <div className="w-12 h-12 bg-[#18ADBB] rounded-full flex items-center justify-center">
                <BsTiktok className="text-white w-5 h-5" />
              </div>
            </Link>
            <Link href="#" target="_blank">
              <div className="w-12 h-12 bg-[#18ADBB] rounded-full flex items-center justify-center">
                <BsYoutube className="text-white w-5 h-5" />
              </div>
            </Link>
            <Link href="#" target="_blank">
              <div className="w-12 h-12 bg-[#18ADBB] rounded-full flex items-center justify-center">
                <BsLinkedin className="text-white w-5 h-5" />
              </div>
            </Link>
            <Link href="#" target="_blank">
              <div className="w-12 h-12 bg-[#18ADBB] rounded-full flex items-center justify-center">
                <BsFacebook className="text-white w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </footer>

      {/* Dark Blue Section */}
      <div className="hidden sm:block bg-[#08909C] p-6">
        <div className="container mx-auto px-6">
          <p className="text-center md:text-left font-light text-xs">
            Terima kasih sudah mampir! Laman ini lebih nyaman dinikmati di
            ponsel pintar. Coba sekarang untuk pengalaman yang lebih maksimal.
          </p>
        </div>
      </div>

      {/* Grey Section */}
      <div className="bg-[#808080] p-6">
        <div className="container mx-auto px-6 pb-8">
          <p className="text-center md:text-left font-light text-xs">
            Nilai simpanan maksimum yang dijamin oleh LPS sebesar Rp
            2.000.000.000 (dua miliar rupiah)
            <br />
            dengan tingkat bunga penjaminan maksimum sebesar 4.25% (empat koma
            dua lima persen) untuk rupiah sesuai ketentuan yang berlaku. Klik{" "}
            <a href="#" className="hover:underline font-bold">
              disini
            </a>{" "}
            untuk mengunduh bukti kepesertaan kami.
          </p>
        </div>
      </div>
    </section>
  );
}