import React from 'react';

const BadgeDisplay = ({ imageSrc, name, badgeGenerated }) => {
  return (
    <div className="right-panel">
      <div className={`badge-container ${badgeGenerated ? 'badge-generated' : ''}`}>
        {/* Blade corners */}
        <div className="blade-corner tl"></div>
        <div className="blade-corner tr"></div>
        <div className="blade-corner br"></div>
        <div className="blade-corner bl"></div>
        
        {/* Blood drips */}
        <div className="blood-drip"></div>
        <div className="blood-drip"></div>
        <div className="blood-drip"></div>
        <div className="blood-drip"></div>
        
        {/* User image */}
        <img 
          src={imageSrc} 
          alt="User" 
          className="user-image" 
          crossOrigin="anonymous"
        />
        
        {/* User name */}
        <div className="badge-text user-name">{name || 'Your Name'}</div>
        
        {/* Logo */}
        <img src="DevSphereIndia logo.png" alt="DevSphereIndia Logo" className="logo" />
        
        {/* Event name */}
        <div className="badge-text event-name">CodeSlayer 2K25 <br /> Participant</div>
      </div>
    </div>
  );
};

export default BadgeDisplay;