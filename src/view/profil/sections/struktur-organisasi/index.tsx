"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function StrukturOrganisasiSection() {
  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya dijalankan sekali
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 100, // Delay sebelum animasi berjalan
    });
  }, []);

  const strukturImages = [
    "/profil/struktur-organisasi/img-structure-organisasi-01.png",
    "/profil/struktur-organisasi/img-structure-organisasi-01.png",
    "/profil/struktur-organisasi/img-structure-organisasi-01.png",
    "/profil/struktur-organisasi/img-structure-organisasi-01.png",
  ];

  return (
    <section id="4" className="bg-fuchsia-300 py-16 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Struktur Organisasi
        </h2>

        {/* Organizational Structure Image */}
        <div>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {strukturImages.map((imgSrc, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <Card>
                      <CardContent className="flex items-center justify-center p-2">
                        <Image
                          src={imgSrc}
                          alt={`Struktur Organisasi ${index + 1}`}
                          width={888}
                          height={716}
                          className="w-full h-auto rounded-md object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// backup
/*
return (
    <section id="4" className="bg-fuchsia-300 py-16 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Struktur Organisasi
        </h2>

        <div className="">
          <Image 
          src="/profil/img-structure-organisasi-01.png"
          alt="Struktur Organisasi BCA"
          width={888}
          height={716}
          className="relative w-full h-full"
          />
        </div>

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
*/
