import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { GiTruck } from "react-icons/gi";

export const AllInOneLogo = () => {
    return (
        <div className="flex flex-col items-center justify-center  text-center ">
            <IconOnly />
        </div>
    );
};

export const IconOnly = () => {
    return (
        // <div className="flex items-center justify-center">
        <img className=" " src="https://bjsindia.org/images/logo.png" />
        // </div>
    );
};

export const TextAndSlogan = () => {
    return (
        <></>
        // <div className="text-center">
        //     <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
        //         TransBook
        //     </h1>
        //     <p className="text-sm text-gray-500">We are your transport book</p>
        // </div>
    );
};



// Main Component for Header Logo
export const AllInOneLogoHeader = () => {
    return (
        <div className="flex items-center space-x-2">
            {/* Truck Icon */}
            <IconOnly />

            {/* Text and Slogan */}

        </div>
    );
};

// IconOnly Component
export const IconOnlyHeader = () => {
    return (
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="truckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" /> {/* Blue */}
                    <stop offset="50%" stopColor="#8B5CF6" /> {/* Purple */}
                    <stop offset="100%" stopColor="#EC4899" /> {/* Pink */}
                </linearGradient>
            </defs>
            <FaTruckFast
                size={36}
                style={{
                    fill: "url(#truckGradient)", // Apply the gradient
                }}
            />
        </svg>
    );
};

// TextAndSlogan (Optional for Footer or Expanded Logo)
export const TextAndSloganHeader = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                TransBook
            </h1>
            <p className="text-sm text-gray-500">We are your transport book</p>
        </div>
    );
};

