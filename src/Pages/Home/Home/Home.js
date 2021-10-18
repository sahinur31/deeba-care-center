import React from 'react';
import Banner from '../Banner/Banner';
import Emergency from '../Emergency/Emergency';
import News from '../News/News';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="#home">
            <Banner />
            <Services />
            <Emergency />
            <News />
        </div>
    );
};

export default Home;