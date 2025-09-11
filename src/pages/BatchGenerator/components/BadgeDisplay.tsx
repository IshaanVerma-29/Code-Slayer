import React, { forwardRef, Ref } from "react";

type BadgeDisplayProps = {
  imageSrc?: string;
  name?: string;
  badgeGenerated?: boolean;
};

/**
 * BadgeDisplay
 * - Visual component that renders the badge preview.
 * - ForwardRef so parent (BadgeGenerator) can pass a ref to capture with html2canvas.
 *
 * Keep CSS classNames as in your original project so existing styles work.
 */
// Add enhanced background layer to BadgeDisplay
const BadgeDisplay = forwardRef<HTMLDivElement, BadgeDisplayProps>(
  ({ imageSrc = "src/pages/BatchGenerator/codeslayer.png", name = "Your Name", badgeGenerated = false }, ref: Ref<HTMLDivElement>) => {
    return (
      <div className="right-panel">
        <div 
          ref={ref} 
          className={`badge-container ${badgeGenerated ? "badge-generated" : ""}`}
          style={{
            // Enhanced background with multiple layers
            background: `
              linear-gradient(45deg, 
                rgba(255, 69, 0, 0.3) 0%, 
                rgba(220, 38, 127, 0.2) 25%, 
                rgba(138, 43, 226, 0.3) 50%, 
                rgba(255, 215, 0, 0.2) 75%, 
                rgba(255, 69, 0, 0.3) 100%
              ),
              url('src/pages/BatchGenerator/dem.jpg')
            `,
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center, center',
            backgroundRepeat: 'no-repeat, no-repeat',
            // Ensure responsive scaling
            transform: 'scale(var(--badge-scale))',
            transformOrigin: 'center center'
          } as React.CSSProperties}
        >
          {/* Enhanced background overlay */}
          <div className="badge-background-overlay" />
          
          {/* Blade corners with enhanced styling */}
          <div className="blade-corner tl enhanced-corner" />
          <div className="blade-corner tr enhanced-corner" />
          <div className="blade-corner br enhanced-corner" />
          <div className="blade-corner bl enhanced-corner" />

          {/* Blood drips with enhanced animation */}
          <div className="blood-drip enhanced-drip" />
          <div className="blood-drip enhanced-drip" />
          <div className="blood-drip enhanced-drip" />
          <div className="blood-drip enhanced-drip" />

          {/* User image */}
          <img src={imageSrc} alt="User" className="user-image" crossOrigin="anonymous" />

          {/* User name */}
          <div className="badge-text user-name">{name || "Your Name"}</div>

          {/* Logo */}
          <img src="DevSphereIndia logo.png" alt="DevSphereIndia Logo" className="logo" />

          {/* Event name */}
          <div className="badge-text event-name">
            CodeSlayer 2K25
            <br />
            Participant
          </div>
        </div>
      </div>
    );
  }
);

BadgeDisplay.displayName = "BadgeDisplay";

export default BadgeDisplay;