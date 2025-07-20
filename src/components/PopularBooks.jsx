import React , { useState, useEffect, useContext  } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {  Autoplay } from 'swiper/modules';

import Item from './Item.jsx';



const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const { books } = useContext(ShopContext);

  useEffect(() => {
    const data = books.filter((item) => item.popular )
    setPopularBooks(data.slice(0, 6)); // Assuming we want the first 6 popular books
  }, [books])

  return (
    <section className='max-padd-container py-16'>
      <Title title1={'Libros'} title2={' Populares'} titleStyles={'pb-10'} para={"Explora nuestra coleccion de libros mas populares, seleccionados por su calidad, popularidad y valor literario. Cada uno de estos libros ha sido elegido para ofrecerte una experiencia de lectura excepcional."} 
      />
      {/* Contenedor */}
      <Swiper  
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          355: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className='min-h-[333px]'
      >
        {popularBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <Item book={book} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}

export default PopularBooks