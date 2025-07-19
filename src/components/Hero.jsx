import { useState, useEffect  } from 'react';
import bg from '../assets/bg.png'
import bgHero from '../assets/bg-hero.png'
import Item from './Item.jsx';

import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {  Autoplay } from 'swiper/modules';
import { dummyBooks as books } from '../assets/data.jsx'

const Hero = () => {
    const [popularBooks, setPopularBooks] = useState([]);

    useEffect(() => {
        const data = books.filter((item) => item.popular)
        setPopularBooks(data.slice(0, 6));
    }, [books])

   
  return (
    <section className='max-padd-container flex gap-6 h-[634px]
    mt-16 '>
        <div className=' flex-[5] bg-cover bg-center
         bg-no-repeat rounded-2xl' 
         style={{backgroundImage: `url(${bg})`}}>
            {/* Left side */}
            <div className='max-padd-container flex flex-col
            h-full justify-center pt-8'>
                <h3 className='bold-24 text-secondary font-thin'>Explore Books You'll Love</h3>
                <h1 className='h1 max-w-[699px] !font-[800]'>Find Yur next Book</h1>
                <h2 className='capitalize h2 tracking-wider'>Up to 40% Off This Week</h2>
                <p className='max-w-xl pt-5'>
                    Discover a wide range of books across various genres. Whether you're into fiction, non-fiction, or academic texts, we have something for everyone. Enjoy exclusive discounts and offers on your favorite titles.
                    Enjoy fast shipping and easy returns. Shop now and dive into the world of literature with us!
                </p>
                {/* BUTTON */}
                <div className='flex mt-4'>
                    <Link to={'/shop'} className='bg-white text-xs font-medium pl-6 rounded-full flexCenter gap-x-6'>Check our Latest Stock
                        <FaArrowRight className='bg-secondary 
                        text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:bg-primary group-hover:text-black transition-all
                        duration-500'/>
                    </Link>
                </div>
            </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='hidden lg:block flex-[2] bg-primary  rounded-2xl bg-center bg-cover bg-no-repeat'>
            <div>
                {/* Container */}
                <div>
                    {
                        <Swiper  
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                        }}
                        breakpoints={{
                            355: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            }
                        }}
                        modules={[Autoplay]}
                        className='min-h-[399px] max-w-64'
                        >
                            {popularBooks.map((book)=> (
                                <SwiperSlide key={book._id}>
                                    <Item book={book} fromHero={true} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    }

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero