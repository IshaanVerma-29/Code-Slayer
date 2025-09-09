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
const BadgeDisplay = forwardRef<HTMLDivElement, BadgeDisplayProps>(
  ({ imageSrc = "codeslayer.png", name = "Your Name", badgeGenerated = false }, ref: Ref<HTMLDivElement>) => {
    return (
      <div className="right-panel">
        <div ref={ref} className={`badge-container ${badgeGenerated ? "badge-generated" : ""}`}>
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
