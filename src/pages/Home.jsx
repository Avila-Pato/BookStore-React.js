import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories.jsx';
import NewArrivals from '../components/NewArrivals.jsx';
import FeaturedBooks from '../components/FeaturedBooks.jsx';
import PopularBooks from '../components/PopularBooks.jsx';
import NewsLetter from '../components/NewsLetter.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
      <FeaturedBooks />
      <PopularBooks />
      <NewsLetter />
    </div>
  )
}

export default Home