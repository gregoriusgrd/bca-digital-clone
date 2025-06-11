"use client";

import { useState } from "react";
import { leaders } from "@/data/leaders";
import { ILeader } from "@/interface/leader.interface";
import Image from "next/image";


export default function LeaderSection() {
  const [selected, setSelected] = useState<ILeader | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Pimpinan Perusahaan</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-[#30CED0] rounded-xl overflow-hidden text-white shadow-md"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-sm">{leader.title}</p>
                <button
                  onClick={() => setSelected(leader)}
                  className="mt-4 text-white underline"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-xl max-w-2xl w-full relative shadow-lg">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                X
              </button>

              <div className="flex items-start gap-6">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">{selected.name}</h3>
                  <p className="text-gray-600">{selected.title}</p>
                  <p className="mt-4 text-gray-800 text-sm">{selected.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
