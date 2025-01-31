'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const scaleFactor = 1 + Math.min(scrollY * 0.0015, 2); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div
      className="w-screen h-[200vh] relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/header-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: `center ${scrollY * -1}px`, // Movimenta suavemente
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-white font-liber text-[200px] relative *:relative flex" style={{
          transform: `scale(${scaleFactor}) translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}>
        <div className="*:relative -top-[30px]">
          <div className="top-32 ml-[200px]">PO</div>
          <div className="ml-[330px]">RT</div>
        </div>
        <div className="*:relative top-[230px] ml-[370px]">
          <div>FÓ</div>
          <div className="-top-[130px] ml-32">LIO</div>
        </div>
      </div>
      <Image
        className="relative -top-[330px] ml-[347px] scale-[141%]"
        src={"/images/header-contorno.png"}
        width={914}
        height={1028}
        alt={"perfil png tampando suavemente o título do site"}
      />
    </div>
  );
}
