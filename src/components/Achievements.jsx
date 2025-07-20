import React from "react";
import Title from "./Title";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";
import { TbLocation } from "react-icons/tb";
const Achievements = () => {

  const statistics = [
    { label: "Libros Vendidos", value: "10.000" },
    { label: "Clientes Satisfechos", value: "50,000" },
    { label: "Autores Asociados", value: "200" },
  ];

  return (
    <section className="mx-auto max-w-[1440px]">
      {/* Container */}
      <div className="flex flex-col xl:flex-row gap-12">
        {/* Left side */}
        <div className="flex-[2] flex justify-center flex-col bg-gradient-to-l from-tertiary/40 to-white px-6 lg:-12 py-16">
          <h2 className="h2 ">Nuestro Viaje de Exito</h2>
          <p className="py-5 max-w-[47rem]">
            Desde una idea pequena hasta una libreria sofisticada, Nuestro viaje
            a sido lleno de un amor por las historias, conocimiento, y el
            disfrute de compartir libros con lectores desde todos los rincones
            del mundo
          </p>
          {/* Statistics container */}
          <div className="flex flex-wrap gap-4">
            {statistics.map((statistic, index) => (
              <div key={index} className="p-4 rounded-lg">
                <div className="flex items-center gap-1">
                  <h3 className="text-5xl font-sans">
                    {statistic.value}</h3>
                    <h4 className="regular-32">k+</h4>
                </div>
                <p className="capitalize pt-2">{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side   */}
        <div className="flex-1 relative max-sm:pl-8 flex items-center xl:justify-center pt-5">
          <div className="flex flex-col">
            <Title
              title1={"Nuevas "}
              title2={" Novedades"}
              titleStyles={"pb-10"}
              paraStyles={"hidden"}
            />
            <div className="flex flex-col items-start">
              <div className="flexCenter gap-3 mb-3">
                <RiSecurePaymentLine className="text-xl" />
                <div className="">
                  <h5 className="h5">Rapido & Seguro</h5>
                  <p>Del envio hasta la entrega</p>
                </div>
              </div>

              <div className="flexCenter gap-3 mb-3">
                <RiSecurePaymentLine className="text-xl" />
                <div className="">
                  <h5 className="h5">Avanzados filtros</h5>
                  <p>Encuentra lo que buscas</p>
                </div>
              </div>

              <div className="flexCenter gap-3 mb-3">
                <FaUsersLine className="text-xl" />
                <div className="">
                  <h5 className="h5">Vistas y Comentarios</h5>
                  <p>Rating & orden de lectura</p>
                </div>
              </div>

              <div className="flexCenter gap-3 mb-3">
                <TbLocation className="text-xl" />
                <div className="">
                  <h5 className="h5">Transporte & Entrega</h5>
                  <p>En vivo y en tienda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
