"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SejarahSection() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      delay: 100,
    });
  }, []);

  // State to manage Read More / Read Less visibility
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="2" className="bg-white py-16 text-center">
      <div data-aos="fade-up" className="container mx-auto px-6">
        {/* Content */}
        <p className="text-lg text-justify mt-4 text-[#183B56]">
          Kami hadir untuk kamu, para <i>digital savvy</i> yang menginginkan
          cara baru dalam urusan perbankan. Lewat <i>platform</i> yang akan
          terus dikembangkan sesuai kemajuan teknologi, BCA Digital akan selalu
          berusaha untuk bisa menjadi{" "}
          <b>jawaban atas kebutuhan finansial kamu....</b>
        </p>

        {/* Read More Content (Hidden by default) */}
        {isExpanded && (
          <div className="mt-4">
            <p className="text-lg text-justify text-[#183B56]">
              Layaknya teman, BCA Digital ingin tumbuh bersama dengan para
              nasabah. Kami ada untuk menyebarkan good vibes dan memberikan
              semangat dalam memulai langkahmu mewujudkan mimpi jadi kenyataan.
            </p>

            <br />

            <p className="text-lg text-justify text-[#183B56]">
              Katanya tak kenal maka tak sayang. Biar lebih akrab, berikut
              sekilas sejarah tentang kami. Sebelumnya PT Bank Digital BCA (BCA
              Digital) itu adalah PT Bank Royal Indonesia (Royal Bank) yang
              diakuisisi oleh PT Bank Central Asia Tbk (BCA) pada akhir tahun
              2019. Dengan identitas baru ini, BCA Digital berkomitmen untuk
              terus meracik ide baru untuk inovasi layanan dan produk perbankan
              yang selalu bikin kamu berkata, “untung ada BCA Digital!”
            </p>

            <br />

            <p className="text-lg text-justify text-[#183B56]">
              Dan tanpa melupakan hal terpenting, BCA Digital akan selalu
              meninggalkan dampak positif dalam setiap jejak langkah kami demi
              menciptakan dunia yang sustain dan lebih baik.
            </p>

            <br />

            <p className="text-lg text-justify text-[#183B56]">
              <i>
                Sesuai Surat Keputusan Deputi Komisioner Pengawas Perbankan I
                Otoritas Jasa Keuangan Nomor KEP-92/PB.1/2020 tertanggal 19 Mei
                2020 Tentang Penetapan Penggunaan Izin Usaha Atas Nama PT Bank
                Royal Indonesia menjadi Izin Usaha Atas Nama PT Bank Digital BCA
              </i>
            </p>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-500 underline cursor-pointer"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
