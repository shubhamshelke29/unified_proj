import React from 'react';
import Admin_nav from './admin_nav';
import Crop_details from './crop_details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './admin_pannel.css';
import Admin_dashboard from './Admin_dashboard';
import Post_scheme from './post_scheme';
import NotFound from '../Notfound';

const Admin_pannel = () => {
  return (
    <BrowserRouter>
      <div className='admin-body'>
        <div className='admin-header'>
          <Admin_nav />
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<Admin_dashboard />} />
            <Route path='/crop-details' element={<Crop_details />} />
            <Route path='/Application Receive' element={<NotFound />} />
           <Route path='/post-scheme' element={<Post_scheme/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Admin_pannel;
