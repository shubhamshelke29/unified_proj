import React from 'react';
import Card from './card.js';
import './herosection_card.css';
import Data from './card_data.json';


const Herocard = () => {

    return (<>

        <div className="section2" >
            <h1> Why Choose Farm Techub</h1>
            <div className='section2content'>
                <p>
                    Farm Techub is a one-stop platform for farmers to access and manage government-aided schemes and grants. We make it easy for you to apply and manage your benefits, so you can focus on what you do best: growing food. With our user-friendly interface and expert support, you'll have everything you need to thrive in today's competitive agriculture industry
                </p>
            </div>
        </div>
        <div className='card'>

            {Data.map((ele) => (
                <div className="card-item">
                    <div className="imagecontainer">
                        <img src={ele.imag} alt={ele.Name} />
                    </div>
                    <div className="content">
                        <h2>{ele.Name}</h2>
                        <p>{ele.description}</p>
                    </div>
                </div>
            ))}

        </div>
    </>


    );
};
export default Herocard;