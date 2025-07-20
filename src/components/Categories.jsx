import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { categories } from '../assets/data';


const Categories = () => {
  const {navigate} = useContext(ShopContext);
  const colors = ["bg-[#aedae6]", "bg-[#fff6c9]", "bg-[#fddbdb]"];

  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 pb-4'>
        <Title title1={'Categoría'} title2={' libros'} titleStyles={'pb-10'} paraStyles={'hidden'} />
        {/* Contenedor */}
        <div className='flex sm:justify-center lg:justify-start gap-9 flex-wrap'>
          {categories.map((cat, index) =>(
              <div key={index} onClick={() => navigate(`/shop/${cat.name.toLowerCase()}`)} 
              className='flexCenter flex-col cursor-pointer group'>
                <div className={`flexCenter flex-col h-36 w-36 sm:h-40 sm:w-40 rounded-xl ${colors[index % 3]}`}>
                  <img  src={cat.image} alt={cat.name} height={46} weight={46} className='object-cover h-12 w-12'/>
                  <h5 className='h5 capitalize mt-6'>{cat.name}</h5>
                </div>
              </div>
          ))}
        </div>
    </section>
  )
}

export default Categories