import React, { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Item from './Item'

const RelatedBooks = ({ book, id }) => {
  const [relatedBooks, setRelatedBooks] = useState([]);
  const {books} = useContext(ShopContext);

  useEffect(() => {
    if(books.length > 0) {
      let booksCopy = books.slice()
      booksCopy = booksCopy.filter(
        (item) => item.category === book.category && item._id 
      )
      setRelatedBooks(booksCopy.slice(0, 6))
    }
  }, [book])

  return (
    <section className='max-padd-container py-16'>
      <Title title1={"Libros"} title2={" relacionados"} titleStyles={"pb-10"}/>
      {/* Contenedior swiper */}

      {
        relatedBooks.length > 0 && (
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
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {
              relatedBooks.map((book) => (
                <SwiperSlide key={book._id}>
                  <Item book={book} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        )
      }
    </section>
  )
}

export default RelatedBooks