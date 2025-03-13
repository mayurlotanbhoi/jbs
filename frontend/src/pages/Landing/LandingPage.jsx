import React from 'react';
// import { FaTruck, FaCog, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { GiChecklist } from 'react-icons/gi';
import { Link } from "react-router-dom";


import Hero from './componats/Hero';
import Overview from './componats/Overview';
import Founder from './componats/Founder';
import Initiatives from './componats/Initiatives';
import Achievements from './componats/Achievements';





const LandingPage = () => {

    return (
        <div class=" bg-black">
            <Hero />
            <Overview />
            <Founder />
            <Initiatives />
            <Achievements />

        </div>

    );
};

export default LandingPage;
