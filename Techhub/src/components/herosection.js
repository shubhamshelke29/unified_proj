import React from 'react';
import "./herosection.css";

const Hero = () => {
    return (
        <>

            <div className="container">
                <div className="slider-container">
                    <div className="image-container">
                        <img src="img1.webp" />
                        <img src="img2.webp" />
                        <img src="img3.webp" />
                        <img src="img4.webp" />
                        <img src="img5.webp" />
                    </div>
                    <div className=" slidecontent" >
                        <p id='slide-tittle'>Welcome to Farm Techub</p>
                        <p id='slide-content'>
                            We are an agricultural service that offers a range of services,
                            news, and information for farmers.Our aim is to provide a
                            comprehensive service that helps farmers make informed decisions
                            and access funding.</p>
                    </div>
                    
                </div>
            </div>


        </>
    )
};

export default Hero;