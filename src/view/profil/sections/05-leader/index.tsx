"use client";

import { useState } from "react";
import { commissioners, directors } from "@/data/leaders";
import { ICommissioners, IDirectors } from "@/interface/leader.interface";
import Image from "next/image";

// Modal

import { Button } from "@/components/ui/button";

export default function directorSection() {
  const [selectedDirector, setSelectedDirector] = useState<IDirectors | null>(null);
  const [selectedCommissioner, setSelectedCommissioner] = useState<ICommissioners | null>(null);

  return (
    <section className="py-20 px-28 bg-white">

      {/* Directors */}
      <section className="container mx-auto">
        <div className="pl-3 pb-8">
          <h2 className="font-figtree text-5xl font-bold text-start mb-6 text-[#00A6B5]">
            Pimpinan Perusahaan
          </h2>
          <p className="font-figtree font-semibold text-4xl text-[#292929]">
            Board of Directors
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {directors.map((director) => (
            <div key={director.name} className="overflow-hidden">

              {/* Content biru */}
              <div className="relative w-full h-[340px] overflow-hidden bg-[#30CED0] rounded-2xl">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={400}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full px-6 py-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-bold">{director.name}</h3>
                  <p className="text-sm">{director.title}</p>
                </div>
              </div>

              {/* Div 2: Button */}
              <div className="p-3 bg-white text-center">
                <Button
                  variant="link"
                  className="text-[#30CED0] underline cursor-pointer"
                  onClick={() => setSelectedDirector(director)}
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal*/}
        {selectedDirector && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setSelectedDirector(null)} // klik di luar = close
          >
            <div
              className="bg-white w-full max-w-5xl rounded-3xl p-24 shadow-xl flex flex-col items-start gap-10 relative"
              onClick={(e) => e.stopPropagation()} // cegah klik dalam modal menutup
            >
              <div className="flex items-center gap-10 mb-8">
                <div className="w-[120px] h-[140px] rounded-2xl bg-[#30CED0] overflow-hidden flex-shrink-0">
                  <Image
                    src={selectedDirector.image}
                    alt={selectedDirector.name}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full bg-gradient-to-t from-black/80 to-transparent"
                  />
                </div>

                <div className="flex flex-col flex-1 gap-1">
                  <h1 className="text-6xl font-bold text-[#292929]">
                    {selectedDirector.name}
                  </h1>
                  <p className=" text-3xl font-semibold text-[#979797]">
                    {selectedDirector.title}
                  </p>
                </div>
              </div>

              <p className="font-figtree font-light text-xl text-black text-justify leading-10">
                {selectedDirector.bio}
              </p>
            </div>
          </div>
        )}
      </section>


      {/* Commissioners */}
      <section className="container mx-auto mt-16">
        <div className="pl-3 pb-8">
          <p className="font-figtree font-semibold text-4xl text-[#292929]">
            Board of Commissioners
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {commissioners.map((commissioner) => (
            <div key={commissioner.name} className="overflow-hidden">

              {/* Content biru */}
              <div className="relative w-full h-[340px] overflow-hidden bg-[#30CED0] rounded-2xl">
                <Image
                  src={commissioner.image}
                  alt={commissioner.name}
                  width={400}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full px-6 py-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-bold">{commissioner.name}</h3>
                  <p className="text-sm">{commissioner.title}</p>
                </div>
              </div>

              {/* Div 2: Button */}
              <div className="p-3 bg-white text-center">
                <Button
                  variant="link"
                  className="text-[#30CED0] underline cursor-pointer"
                  onClick={() => setSelectedCommissioner(commissioner)}
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal*/}
        {selectedCommissioner && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setSelectedCommissioner(null)} // klik di luar = close
          >
            <div
              className="bg-white w-full max-w-[1200px] rounded-3xl p-24 shadow-xl flex flex-col items-start gap-10 relative"
              onClick={(e) => e.stopPropagation()} // cegah klik dalam modal menutup
            >
              <div className="flex items-center gap-10 mb-8">
                <div className="w-[120px] h-[140px] rounded-2xl bg-[#30CED0] overflow-hidden flex-shrink-0">
                  <Image
                    src={selectedCommissioner.image}
                    alt={selectedCommissioner.name}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full bg-gradient-to-t from-black/80 to-transparent"
                  />
                </div>

                <div className="flex flex-col flex-1 gap-1">
                  <h1 className="text-6xl font-bold text-[#292929]">
                    {selectedCommissioner.name}
                  </h1>
                  <p className=" text-3xl font-semibold text-[#979797]">
                    {selectedCommissioner.title}
                  </p>
                </div>
              </div>

              <p className="font-figtree font-light text-xl text-black text-justify leading-10">
                {selectedCommissioner.bio}
              </p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
