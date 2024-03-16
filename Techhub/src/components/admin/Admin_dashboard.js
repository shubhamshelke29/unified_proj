import React from 'react'
import './Admin_dashboard.css'
import Admin_dashboard_numbers from './Admin_dashboard_numbers'
import Scheme from '../Scheme'

const Admin_dashboard = () => {
  return (<>
    <div className='head'>
      <h1>Dashboard</h1>
      <p>Welcome,<span>Admin</span></p>
    </div>
    <div className='Dashboard-number'>
      <Admin_dashboard_numbers />
    </div>
    <div className='Admin-schemes'>
      <h1>Schemes by Goverment</h1>
      <div className='lines'></div>
      <div className='schemes'>
        <Scheme />
      </div>
    </div>


  </>
  )
}

export default Admin_dashboard