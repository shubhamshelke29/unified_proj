import React from 'react'
import Data from './numbers_data.json'
import './Admin_numbers.css'

const  Admin_dashboard_numbers =( )=> {
   
  return (
    <>
    <div className='number_card_container'>
     {Data.map((ele) => (
      <div className='box'>
      <h2>{ele.Title}</h2>
     <h3> {ele.number}</h3>
     </div>
     
    ))}
     </div>
    </>
  )
}
export default Admin_dashboard_numbers