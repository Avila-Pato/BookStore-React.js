import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories.jsx';
import NewArrivals from '../components/NewArrivals.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
    </div>
  )
}

export default Home