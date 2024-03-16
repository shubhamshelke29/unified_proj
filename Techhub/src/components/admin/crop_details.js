import React from 'react'
import './crop_details.css'
import { Button } from '@mui/material'
const Crop_details=()=> {
  return (
    <div className='crop_container'>
        <div className='crop-head'>
            <h1>Add Crop Details</h1>
            </div>
            <div className='crop_title'>
                <input type='text' id='title-input' name='crop_title' placeholder='Title' />
            </div>
            <textarea className='crop' name='crop' placeholder='Discription' />
            <div className='cp_buttons'>
                <Button color="secondary">Cancle</Button>
                <Button variant="contained" color="success">
                    Add
                </Button>
            </div>
        </div>
  )
}

export default Crop_details