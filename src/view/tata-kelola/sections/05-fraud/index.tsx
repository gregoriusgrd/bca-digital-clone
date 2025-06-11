"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FraudSection() {
  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya dijalankan sekali
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 100, // Delay sebelum animasi berjalan
    });
  }, []);

  return (
    <section className="max-w-[1120px] mx-auto pt-[100px] pb-[40px] bg-white text-center">
      <div className="max-w-[930px] mx-auto px-[15px]">
        {/* Fraud */}
        <div id="1" data-aos="fade-up" className="mb-12">
          <h2 className="text-[40px] leading-14 font-bold text-center text-[#00A6B5] mb-7.5">
            <i>Fraud</i>
          </h2>
          <p className="text-lg text-justify mt-4 text-[#183B56]">
            <i>Fraud</i> adalah tindakan penyimpangan atau pembiaran yang
            sengaja dilakukan untuk mengelabui, menipu, atau memanipulasi bank,
            nasabah, atau pihak lain yang terjadi di lingkungan bank dan/atau
            menggunakan sarana bank sehingga mengakibatkan bank, nasabah, atau
            pihak lain menderita kerugian dan/atau pelaku <i>fraud</i>{" "}
            memperoleh keuntungan keuangan baik secara langsung maupun tidak
            langsung.
            <br />
            Jenis-jenis perbuatan yang tergolong <i>fraud</i> adalah:
            <br />
            1. Kecurangan
            <br />
            2. Penipuan
            <br />
            3. Penggelapan aset
            <br />
            4. Pembocoran informasi
            <br />
            5. Tindak pidana perbankan (tipibank)
          </p>
        </div>

        {/* Pelanggaran Kode Etik */}
        <div id="2" data-aos="fade-up" className="mb-12">
          <h2 className="text-[40px] leading-14 font-bold text-center text-[#00A6B5] mb-7.5">
            Pelanggaran Kode Etik
          </h2>
          <p className="text-lg text-justify mt-4 text-[#183B56]">
            Tindakan yang tidak sesuai dengan budaya perusahaan yang telah
            dirumuskan berdasarkan nilai-nilai positif yang tumbuh dan
            berkembang di dalam diri segenap insan perusahaan, untuk mencapai
            tujuan bersama dan juga sebagai acuan bagi insan perusahaan dalam
            mengambil keputusan dan tindakan.
          </p>
        </div>

        {/* Pelanggaran Benturan Kepentingan */}
        <div id="3" data-aos="fade-up" className="mb-12">
          <h2 className="text-[40px] leading-14 font-bold text-center text-[#00A6B5] mb-7.5">
            Pelanggaran Benturan Kepentingan
          </h2>
          <p className="text-lg text-justify mt-4 text-[#183B56]">
            Tindakan yang menyebabkan suatu kondisi dimana seseorang dalam
            menjalankan tugas dan kewajibannya mempunyai kepentingan diluar
            kepentingan dinas, baik yang menyangkut kepentingan pribadi,
            keluarga, maupun kepentingan pihak-pihak lain sehingga insan
            perusahaan tersebut dimungkinkan kehilangan obyektivitasnya dalam
            mengambil keputusan dan kebijakan sesuai wewenang yang telah
            diberikan perusahaan kepadanya.
          </p>
        </div>

        {/* Pelanggaran Hukum */}
        <div id="4" data-aos="fade-up" className="mb-12">
          <h2 className="text-[40px] leading-14 font-bold text-center text-[#00A6B5] mb-7.5">
            Pelanggaran Hukum
          </h2>
          <p className="text-lg text-justify mt-4 text-[#183B56]">
            Tindakan yang melanggar hukum yang berlaku di Indonesia.
          </p>
        </div>

        {/* Deklarasi Anti Fraud */}
        <div id="5" data-aos="fade-up" className="mb-12">
          <h2 className="text-[40px] leading-14 font-bold text-center text-[#00A6B5] mb-7.5">
            Deklarasi Anti Fraud
          </h2>
          <p className="text-lg text-justify mt-4 text-[#183B56]">
            Klik{" "}
            <b>
              <a href="#">di sini</a>
            </b>{" "}
            untuk mengunduh dokumen Deklarasi Anti Fraud kami.
          </p>
        </div>

        {/* Deklarasi Anti Penyuapan */}
        <div id="6" data-aos="fade-up" className="mb-12">
          <h2 className="text-[40px] leading-14 font-bold text-center text-[#00A6B5] mb-7.5">
            Deklarasi Anti Penyuapan
          </h2>
          <p className="text-lg text-justify text-[#183B56]">
            Klik{" "}
            <b>
              <a href="#">di sini</a>
            </b>{" "}
            untuk mengunduh dokumen Deklarasi Anti Penyuapan kami.
          </p>
        </div>
      </div>
    </section>
  );
}
