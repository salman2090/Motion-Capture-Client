import React from 'react';
import Login from '../../Login/Login/Login';
import Banner from '../Banner/Banner';
import Cameras from '../Cameras/Cameras';
import Lenses from '../Lenses/Lenses';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Cameras></Cameras>
            <Lenses></Lenses>
            <Login></Login>
        </div>
    );
};

export default Home;