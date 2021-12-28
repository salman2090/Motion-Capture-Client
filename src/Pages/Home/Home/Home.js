import React from 'react';
import Banner from '../Banner/Banner';
import Cameras from '../Cameras/Cameras';
import Lenses from '../Lenses/Lenses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cameras></Cameras>
            <Lenses></Lenses>
        </div>
    );
};

export default Home;