import React from 'react'
import Data from './scheme_data.json'
import './scheme.css'
const Scheme = () => {
  return (
    <div className=' scheme-container'>
      {Data.map((ele) => (
        < div  className='scheme-list'>
          <p>{ele.Name}</p>
          {/* <p>{ele.date}</p> */}
        </div>
      ))}
    </div>
  )
}
export default Scheme
