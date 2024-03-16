import react from 'react';
import "./card.css";


const Card=( props)=>
{ 
    const { imag,Name,description}= props;  
    return (
        <> 
        <img className='img' src={imag}/>
        <h3>{Name}</h3>
        <p>{description}</p>
        </>
    )
};
export default Card;