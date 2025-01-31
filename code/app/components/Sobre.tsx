import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";

export default function Sobre() {
  return (
    <div className="min-h-screen w-screen flex justify-center bg-grey pt-10 sticky top-0">
      <div className="space-y-20 max-w-[1024px] flex-col justify-center">
        <nav>
          <ul className="flex justify-between *:py-1 text-lg">
            <li className="mr-10 font-black">
              <Link href="/">sobre mim</Link>
            </li>
            <li className="mr-[80px]">
              <Link href="/">trabalhos</Link>
            </li>
            <li className="ml-[80px] mr-10">
              <Link href="/">metodologia</Link>
            </li>
            <li className="bg-orange rounded-full px-4">
              <Link href="/">entre em contato</Link>
            </li>
          </ul>
        </nav>

        <div className="relative flex justify-center">
          <div className="relative w-1/2 mr-4">
            <h1 className="pl-10 text-[64px] font-liber">OIE,</h1>
            <h1 className="relative z-30 pl-10 text-[64px] font-liber text-nowrap">
              EU SOU A DUDA!
            </h1>
            <div className="space-y-8 pr-4">
              <p className="text-[20px] leading-tight text-sm font-bold">
                Sou publicitária formada pela PUC Minas, e trabalho como Social
                Media há 2 anos, atuo na área de planejamento, estratégia,
                captação, edição, copywriting e análise, além disso desenvolvo
                peças e artes gráficas de acordo com a identidade visual do
                cliente! Vem conhecer um pouco mais do meu trabalho!
              </p>
              <div className="flex items-center justify-center py-4 bg-brown rounded-full text-white">
                <div className="text-2xl mr-2">
                  <SlMagnifier />
                </div>
                <Link
                  className="text-md font-bold"
                  href="https://www.linkedin.com/in/maducardosoc/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/maducardosoc/
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-10 *:top-10 *:relative">
            <div className="flex">
              <div className="z-10 bg-lightBrown w-full h-[416px]"></div>
              <div className="absolute z-20 bg-white rounded-full w-[240px] h-[240px] top-6 end-5"></div>
              <Image
                className="absolute z-30 -top-[59px]"
                src="/images/foto-perfil.png"
                alt="Imagem de perfil"
                width={744}
                height={960}
              />
              <span className="absolute z-40 -end-16 top-48 bg-orange rounded-full px-6 py-1">
                22 anos
              </span>
            </div>

            <div className="bg-black font-bold text-white px-8 py-6 *:flex *:items-center">
              <h1 className="font-liber text-xl mb-5">CONTATO</h1>
              <div className="text-2xl relative -start-[2px] mb-3">
                <MdLocationOn />
                <span className="ml-2 text-sm">
                  Belo Horizonte, Minas Gerais
                </span>
              </div>
              <div className="text-xl mb-3">
                <FaPhone />
                <span className="ml-2 text-sm">(31)97561-9429</span>
              </div>
              <div className="text-xl">
                <IoMdMailOpen />
                <span className="ml-2 text-sm">
                  meduardacastroc87@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
