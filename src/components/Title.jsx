import React from 'react'

const Title = ({
  title1,
  title2,
  titleStyles,
  title1Styles,
  paraStyles,
  para,
}) => {
  return (
    <div className={titleStyles}> 
        <h3 className={`${title1Styles} h3 capitalize` }>
          {title1}
          <span className='font-light underline'>{title2}</span>
        </h3>
        <p className={`${paraStyles} max-w-md mt-2`}>
         {para
            ? para
            : 'Descubre Libros que te despiertan la curiosidad y te inspiran a aprender algo nuevo cada día.'
         }
        </p>
    </div>
  )
}

export default Title