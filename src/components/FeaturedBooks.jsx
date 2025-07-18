import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { TbShoppingBagPlus } from "react-icons/tb";
import featuredBooksImg from "../assets/featured-books.png"

const FeaturedBooks = () => {
  const { books, currency } = useContext(ShopContext);
  const book = books[21]; // imagen 21 index book

  return (
    <section className="max-padd-container max-sm:bg-primary">
      {/* contenedor */}
      <div className="sm:px-10 flex sm:bg-primary py-16 rounded-2xl">
        {/* Left side */}
        <div className="flex-1">
          <Title
            title1={"Libros"}
            title2={" Destacados"}
            titleStyles={"pb-10"}
            para={
              "Descubre nuestros libros mas destacados, seleccionados por su calidad, popularidad y valor literario. Cada uno de estos libros ha sido elegido para ofrecerte una experiencia de lectura excepcional."
            }
          />

          {/* Book card */}
          <div className="flex gap-3 sm:gap-8 sm:bg-white sm:p-4 rounded-2xl">
            <div className="min-w-[160px]">
              <img
                src={book?.image}
                alt={book?.name}
                className="h-64 w-44 object-cover rounded-xl shadow-[0px_0px_6px__0px_rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
                  {book?.name}
                </h3>
                <p className="text-sm ">{book?.category}</p>
              </div>
              <div className="flex items-center gap-3 sm:mt-2">

              <h4 className="text-lg font-bold text-secondary">
                {currency}
                {book?.offerPrice}.00
              </h4>
              <p className="textt-sm line-through">
                {currency}
                {book?.price}.00
              </p>
              <span className="hidden sm:flex bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                Guardar 5
              </span>
              </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-4 text-sm text-gray-600">
              <p>
                <span className="font-medium ">Publicado: </span>2025
              </p>
              <p>
                <span className="font-medium ">Paginas: </span>324
              </p>
              <p>
                <span className="font-medium ">Lenguaje: </span>
                Ingles
              </p>
              <p>
                <span className="font-medium ">Stock: </span>En
                Stock
              </p>
            </div>
            <p className="mt-1 sm:mt-4 text-sm line-clamp-2">{book?.description}</p>
            <button className="btn-secondary max-sm:text-xs mt-1 sm:mt-5 w-fit px-5 py-2 flex items-center gap-2 text-sm font-medium">
              {" "}
              <TbShoppingBagPlus className="text-xl" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="hidden sm:flex flex-1 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${featuredBooksImg})` }}>
            <div  className=""/ >
      </div>
    </div>

    </section>
  );
};

export default FeaturedBooks;
