import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-14 ring-1 ring-slate-900/10 rounded-lg'>
      <div className='flex gap-3'>
        <button className='medium-14 p-3 w-32 border-b-2 border-secondary'>Descripcion</button>
        <button className='medium-14 p-3 w-32 '>Guia</button>
        <button className='medium-14 p-3 w-32 '>Caracteristicas</button>
      </div>
      <hr  className='h-[1px] w-full border-gray-500/30'/>
      <div className='flex flex-col gap-3 p-3'>
        <div>
          <h5>Derail</h5>
           <p className='sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti quod atque ad dignissimos sed praesentium quae eveniet optio ex?
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eveniet.</p>
           </p>
        </div>
        <div>
          <h5 className='h5'>Beneficios</h5>
          <ul className='list-disc pl-5 text-sm flex flex-col gap-1'>
            <li className='text-gray-50'>Gran calidad de materiales y diseño, durabilidad y estabilidad </li>
            <li className='text-gray-50'>Diseño para reunir y compartir las nececitades, activas de los niños y adultos</li>
            <li className='text-gray-50'>Disponible en un absto rano de colores y tamaños</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription