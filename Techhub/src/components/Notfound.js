import React from 'react';
import './NotFound.css'; // Import your CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p>Please check the URL and try again, or go back to the <a href="/">homepage</a>.</p>
    </div>
  );
}

export default NotFound;