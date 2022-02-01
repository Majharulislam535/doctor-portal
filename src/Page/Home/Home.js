import React from 'react';
import Footer from '../../components/Footer/Footer';
import Contact from './Contact/Contact';
import DentalCare from './DentalCare/DentalCare';
import HeroSection from './HeroSection/HeroSection';
import HomePati from './HomePati/HomePati';
import HomeService from './HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <HomeService></HomeService>
            <DentalCare></DentalCare>
            <HomePati></HomePati>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;