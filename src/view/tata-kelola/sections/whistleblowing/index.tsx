"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhistleblowingSection() {
  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya dijalankan sekali
      duration: 500, // Durasi animasi dalam milidetik
      delay: 5, // Delay sebelum animasi berjalan
    });
  }, []);

  return (
    <section className="max-w-[1120px] mx-auto py-[100px] bg-white text-center">
      <div className="max-w-[930px] mx-auto px-[15px] my-[80px]">
        <h2
          //   data-aos="fade-up"
          className="text-4xl font-bold text-center text-[#00A6B5] mb-7"
        >
          <i>Whistleblowing System</i> BCA Digital
        </h2>
        <p className="text-lg text-justify leading-relaxed text-[#183B56]">
          BCA Digital berkomitmen membangun lingkungan bisnis yang sehat,
          berintegritas, dan bertujuan untuk menjadi Bank terpercaya dalam
          memberikan layanan berkualitas.
          <br />
          <br />
          Untuk menjaga komitmen tersebut, kami memiliki sarana pelaporan{" "}
          <i>whistleblowing system</i> (WBS). WBS memberikan kesempatan bagi
          Anda untuk melaporkan dugaan <i>fraud</i> atau pelanggaran hukum,
          pelanggaran kode etik, maupun pelanggaran benturan kepentingan yang
          dilakukan oleh pihak internal BCA Digital.
          <br />
          Kami akan memproses lebih lanjut pengaduan yang memenuhi syarat dan
          kriteria, apabila pelapor memberikan informasi identitas diri berupa
          nama (diperbolehkan <i>anonym</i>) serta nomor telepon/email yang bisa
          dihubungi. Kami menjamin kerahasiaan data diri pelapor.
          <br />
          <br />
          Pelapor harus dapat menjelaskan sekurang-kurangnya:
          <ul className="list-disc list-inside text-left">
            <li>
              <b>
                <i>What</i>
              </b>{" "}
              - Apa yang terjadi
            </li>
            <li>
              <b>
                <i>Who</i>
              </b>{" "}
              - Pihak yang terlibat
            </li>
            <li>
              <b>
                <i>When</i>
              </b>{" "}
              - Waktu kejadian
            </li>
            <li>
              <b>
                <i>Where</i>
              </b>{" "}
              - Lokasi kejadian
            </li>
            <li>
              <b>
                <i>How</i>
              </b>{" "}
              - Bagaimana terjadinya
            </li>
          </ul>
          <br />
          Kirimkan laporan WBS Anda melalui:
          <br />
          <b>Email Bank:</b> antifraud@bcadigital.co.id
          <br />
          <br />
          <b>Surat Fisik:</b>
          <br />
          U.p. Anti <i>Fraud</i>
          <br />
          PT. Bank Digital BCA
          <br />
          The City Tower Lantai 11
          <br />
          Menteng, Jakarta Pusat
          <br />
          Jakarta, 10310
          <br />
          <br />
          Pelaporan <i>whistleblowing</i> yang dilakukan menggunakan Surat Fisik
          wajib mencantumkan “Penting dan Rahasia” di sudut kanan atas amplop.
          <br />
          Terima kasih atas kepedulian dan kepercayaan Anda kepada BCA Digital.
        </p>
      </div>
    </section>
  );
}
