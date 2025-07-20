import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import Item from "../components/Item";
import { ShopContext } from "../context/ShopContext";

const Shop = () => {
  const { books, searchQuery } = useContext(ShopContext);
  const [filteredBooks, setfilteredBooks] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter books based on search query
  useEffect(() => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = books?.filter((book) =>
        book.name.toLowerCase().includes(lowerCaseQuery)
      );
      setfilteredBooks(filtered);
    } else {
      setfilteredBooks(books);
    }
    setCurrentPage(1); // resetear la pagina actual al filtrar
  }, [books, searchQuery]);

  const totalPages = Math.ceil(
    filteredBooks.filter((b) => b.inStock).length / itemsPerPage
  );

  return (
    <div className="max-padd-container py-16 pt-28">
      <Title
        title1={"Todos Los "}
        title2={" Libros"}
        titleStyles={"pb-10"}
        para={
          "Explora nuestra coleccion de libros mas populares, seleccionados por su calidad, popularidad y valor literario. Cada uno de estos libros ha sido elegido para ofrecerte una experiencia de lectura excepcional."
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks
            .filter((book) => book.inStock)
            .slice((CurrentPage - 1) * itemsPerPage, CurrentPage * itemsPerPage)
            .map((book) => <Item key={book._id} book={book} />)
        ) : (
          <h4 className="h4">No hay libros disponibles</h4>
        )}
      </div>
      {/* Paginacion */}
      <div className="flexCenter flex-wrap  sm:gap-4 mt-14 mb-10">
        <button
          disabled={CurrentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          className={` ${
            CurrentPage === 1 && "opacity-50 cursor-not-allowed"
          } btn-dark !py-1 !px-3`}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`${
              CurrentPage === index + 1 && "bg-secondary  !text-white"
            } btn-light   !py-1 !px-3`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={CurrentPage === totalPages}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          className={` ${
            CurrentPage === totalPages && "opacity-50 cursor-not-allowed"
          } btn-white bg-tertiary  !py-1 !px-3`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Shop;
