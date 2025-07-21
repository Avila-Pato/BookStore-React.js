import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams, Link } from "react-router-dom";
import { TbHeart, TbShoppingBagPlus, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";


import ProductDescription from "../components/ProductDescription.jsx";
import RelatedBooks from "../components/RelatedBooks.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";



const ProductDetails = () => {
  const { books, currency, addToCart, cartItems } = useContext(ShopContext);
  const { id } = useParams();

  const book = books.find((book) => book._id === id);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (book) {
      setImage(book.image[0]);
    }
  }, [book]);

  useEffect(() => {
    if (book) {
      setImage(book.image);
    }
  }, [book]);

  return (
    book && (
      <div className="max-padd-container py-16 pt-28">
        <p className="text-lg flex gap-2 text-gray-600">
          <Link to={"/"}>Home</Link> /<Link to={"/shop"}>Shop</Link> /
          <Link to={`/shop/${book.cagegory}`}>{book.cagegory}</Link>
          <span>{book.name}</span>
        </p>
        {/* Book data */}
        <div className="flex gap-10 flex-col xl:flex-row my-6">
          {/* Imagen */}
          <div className="flex gap-x-2 max-w-[433px] rounded-lg">
            <div className="flex-1 flexCenter flex-col gap-[7px] flex-wrap">
              {book.image.map((item, index) => (
                <div key={index}>
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    alt="Image.alt"
                    className="rounded-lg overflow-hidden"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-[4]">
              <img
                src={image}
                alt="bookImage"
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
          {/* info */}
          <div className="px-5 pt-8 py-3 w-full bg-primary rounded-xl">
            <h3 className="h3 leading-none">{book.name}</h3>
            <div className="flex items-center gap-x-2 pt-2">
              <div className="flex gap-2 text-yellow-400">
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarHalfFilled />
              </div>
              <p className="medium-22">(22)</p>
            </div>
            <div className="h4 flex items-baseline gap-4 my-2">
              <h3 className="h3 line-through text-secondary">
                {" "}
                {currency}
                {book.price}.00
              </h3>
              <h4 className="h4">{currency}{book.offerPrice}.00</h4>
            </div>
            <p className="max-w-[555px]">{book.description}</p>
            <div className="flex items-center gap-x-4 mt-6">
            <button onClick={() => addToCart(book._id)} className="btn-dark sm:w-1/2 flexCenter gap-x-2 capitalize !rounded-md"> <TbShoppingBagPlus />
                Agregar al carrito
            </button>
            <button className="btn-secondary !rounded-md">
              <TbHeart  className="text-xl"/>
            </button>
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <FaTruckFast className="text-lg" />
              <span className="medium-14">Delivery gratis en ventas sobre $100</span>
            </div>
            <hr className="my-3 w-2/3"/>
            <div className="mt-2 flex flex-col gap-1 text-gray-30 text-[14px]">
              <p>Autenticidad 100% garantizada</p>
              <p>Disfruta de la mejor experiencia de compra</p>
              <p>Faciles devoluciones y un extra de 30 dias</p>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedBooks book={book} id={id}  />
      </div>
    )
  );
};

export default ProductDetails;
