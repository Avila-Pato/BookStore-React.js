import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

const Footer = () => {
  const linkSections = [
    {
      title: "Links Importantes",
      links: [
        "Inicio",
        "Mejores Vendidos",
        "Ofertas y Descuentos",
        "Contactanos",
        "FAQs",
      ],
    },
    {
      title: "Necesitas Ayuda?",
      links: [
        "Informacion Delivery",
        "Politica de Privacidad",
        "Terminos y Condiciones",
        "Devoluciones",
        "Envios",
        "Pagos y Metodos",
      ],
    },
    {
      title: "Siguenos",
      links: [
        "Facebook",
        "Instagram",
        "Twitter",
        "LinkedIn",
        "YouTube",
      ],
    }
  ];
  return (
    <section className="max-padd-container bg-gradient-to-l from-primary via-white to-primary">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 border-b
      border-gray-500/30">
          <div>
            {/* logo */}
            <div className="flex flex-1">
              <Link to={"/"} className="bold-22 xl:bold-28 flex items-end gap-1">
                <img src={logoImg} alt="Logo" className="h-9" />
                <div className="relative top-1.5">
                    Book<span className="text-secondary">Store</span>            
                </div>
              </Link>
            </div>
            <p className="max-w-[410px] mt-6">
               Descubre un mundo de historias y conocimiento con nuestra amplia coleccion de libros. Desde clasicos atemporales hasta las ultimas novedades, tenemos algo para cada amante de la lectura.
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {linkSections.map((section, index) => (
              <div key={index}>
                  <h3 className="font-semibold text-base md:mb-5 mb-2">
                    {section.title}
                  </h3>
                  <ul className="text-sm space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="hover:underline transition-all">
                          {link}
                        </a>
                      </li>
                    ))}

                  </ul>
              </div>
            ))}
          </div>
      </div>
  </section>
  )
};

export default Footer;
