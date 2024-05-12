import React from 'react';
import './Banner.css';

const Banner = ({ bannerText, bannerText2, bannerText3, bannerText4 }) => {
    return (
        <div className="Banner">
            <h4>{bannerText}</h4>
            <h1>{bannerText2}</h1>
            <h2>{bannerText4}</h2>
            <h6>{bannerText3}</h6>
        </div>
    );
};

export default Banner;
