import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Title from './Title';
import Item from './Item';


const NewArrivals = () => {
    const [newArrivals, setNewArrivals] = useState([]);
    const {books} = useContext(ShopContext);
    

    useEffect(() => {
        setNewArrivals(books.slice(0, 6)); // Asumiendo que quermeos los primeros 6 libros
    }, [books]) // Dependencia para actualizar cuando books cambie
  return (
    <section className='max-padd-container py-16'>
             <Title title1={'Nuevos'} title2={' Lanzamientos'} titleStyles={'pb-10'} para={"Revisa nuestros mas nuevos libros llegando semanalmente con ideas frescas, novedosas, vibrantes y llenas de emocion y historia."} 
             />
             {/* Contenedor */}
              {
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
                            {newArrivals.map((book)=> (
                                <SwiperSlide key={book._id}>
                                    <Item book={book} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    }

    </section>
  )
}

export default NewArrivals