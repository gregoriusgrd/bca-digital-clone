"use client"

import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="flex flex-shrink-0 justify-between items-center px-12 pt-10">
            <div>
                <Image
                src="/navbar/logo-white-lg.svg"
                alt="BCA Digital Logo"
                width={200}
                height={100}
                className=""
                 />
            </div>

            <div>
                <ul className="flex gap-10">
                    <li>
                        <a href="#" className="">
                            Profil
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            Tata Kelola
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            Laporan
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            Karir
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            Rilis Media
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            Kontak
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

/*
<Image
            src="/home/header-home.png"
            alt="Bank image"
            fill
            className="object-contain"
          />
*/