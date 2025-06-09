"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="h-[750px] bg-[#3BB8C3]">

      {/* Left side - Text */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full">
        <div className="content">
          <h1 className="text-5xl font-bold leading-tight">
            Ada
            <br />
            Karenamu
          </h1>
          <p className="mt-4 max-w-lg text-lg">
            Lahir digital. Bank yang selalu ada tanpa jarak. Semudah itu,
            senyaman itu. Kami hadir buat kamu. Kami ya kamu.
          </p>
          <div className="action-button">
            <a href="#" className="mt-6 inline-block bg-[#4BCDCF] text-white px-6 py-3 border-2 rounded-full  hover:underline">Kenalan, yuk!</a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative w-full h-screen">
          <Image
            src="/home/header-home.png"
            alt="Bank image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}



// <div className="h-[600px] bg-[url('/home/travel-section/travel-background.jpg')] bg-cover bg-center rounded">

/*
className="mt-6 inline-block bg-white text-[#3BB8C3] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
    >
container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-6
*/

/*
<section
  className="h-screen bg-cover bg-center flex items-center"
  style={{ backgroundImage: "url('/home/header-home.png')" }}
>
  <div className="container mx-auto px-6 text-white">
    <h1 className="text-5xl font-bold leading-tight">
      Ada<br />Karenamu
    </h1>
    <p className="mt-4 max-w-lg text-lg">
      Lahir digital. Bank yang selalu ada tanpa jarak. Semudah itu,
      senyaman itu. Kami hadir buat kamu. Kami ya kamu.
    </p>
    <a
      href="#"
      className="mt-6 inline-block bg-white text-[#3BB8C3] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
    >
      Kenalan, yuk!
    </a>
  </div>
</section>

*/
