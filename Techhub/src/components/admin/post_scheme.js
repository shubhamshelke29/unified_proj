import { Button } from '@mui/material'
import React from 'react'
import './post_scheme.css'


const Post_scheme = () => {
    return (
        <div className='post_container'>
        <div className='post-head'>
            <h1>Post New Scheme</h1>
            </div>
            <div className='post_title'>
                <input type='text' id='title-input' name='Post_title' placeholder='Title' />
            </div>
            <textarea className='post' name='Post' placeholder='Discription' />
            <div className='cp_buttons'>
                <Button color="secondary">Cancle</Button>
                <Button variant="contained" color="success">
                    Post
                </Button>
            </div>
        </div>
    )
}
export default Post_scheme
