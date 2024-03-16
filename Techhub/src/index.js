import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Signup from './components/signup';
// import Login from './components/Login';
// import Admin_pannel from './components/admin/admin_pannel';

import Navbar from './components/navbar';
import Hero from './components/herosection';
import Herocard from './components/herosection_card';
import Footer from './components/footer';

const Nav = ReactDOM.createRoot(document.getElementById('Nav'));
const hero_root = ReactDOM.createRoot(document.getElementById('hero-root'));
const hero_root2 = ReactDOM.createRoot(document.getElementById('hero-root2'));
const footer = ReactDOM.createRoot(document.getElementById('Footer'));
const login = ReactDOM.createRoot(document.getElementById('signup'));
Nav.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
hero_root.render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>
);
hero_root2.render(
  <React.StrictMode>
    <Herocard/>
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>
);

// signup.render(
//     <React.StrictMode>
//       <Signup/>
//     </React.StrictMode>
//   );
// login.render(
//       <React.StrictMode>
//         <Login/>
//       </React.StrictMode>
//     );
   


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

