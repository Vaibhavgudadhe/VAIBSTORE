import React from 'react'
import Categories from '../Components/Categories/Categories';
import Slider from '../Components/Slider/Slider'
import FeaturedProducts from '../Components/FeaturedProducts/FeaturedProducts';
import FeaturedProducts1 from '../Components/FeaturedProducts/FeaturedProducts1';
import FeaturedProducts2 from '../Components/FeaturedProducts/FeaturedProducts2';
import "./Home.scss";
import Contact from '../Components/Contact/Contact';

const Home = () => {
  return (
    <div className="home">
<Slider/>
<FeaturedProducts type="Featured "/>
<Categories/>
{/* <FeaturedProducts type="trending"/> */}
<FeaturedProducts1 type="CAT"/>
<FeaturedProducts2 type="WOMEN "/>

<Contact/>
    </div>
  )
}

export default Home
