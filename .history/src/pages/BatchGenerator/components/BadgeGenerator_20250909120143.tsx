import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

// 👇 declare type for ref to avoid "null" errors
const BadgeGenerator: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("codeslayer.png");
  const [name, setName] = useState<string>("");
  const [badgeGenerated, setBadgeGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      alert("File size too large! Please choose an image under 10MB. 📸");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const maxDimension = 800;
        let { width, height } = img;

        if (width > height) {
          if (width > maxDimension) {
            height = (height * maxDimension) / width;
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = (width * maxDimension) / height;
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          data[i] = Math.min(255, data[i] * 1.1);
          data[i + 1] = Math.min(255, data[i + 1] * 1.1);
          data[i + 2] = Math.min(255, data[i + 2] * 1.1);
        }

        ctx.putImageData(imageData, 0, 0);
        setImageSrc(canvas.toDataURL("image/jpeg", 0.95));
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const generateBadge = () => {
    if (!name.trim()) {
      alert("Please enter your name first! ⚔️");
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      setBadgeGenerated(true);
      setIsGenerating(false);

      const badge = badgeRef.current;
      if (badge) {
        badge.style.animation = "none";
        // trigger reflow
        void badge.offsetHeight;
        badge.style.animation = "badgePulse 4s ease-in-out infinite alternate";
      }

      createSparkleEffect();
      showSuccessMessage("Badge generated successfully! ✨");
    }, 1500);
  };

  const downloadBadge = () => {
    if (!badgeGenerated) {
      alert("Please generate the badge first! ⚔️");
      return;
    }

    const button = document.querySelector<HTMLButtonElement>(".download-btn");
    if (!button) return;

    button.innerHTML = "⏳ Downloading...";

    html2canvas(badgeRef.current as HTMLElement, {
      useCORS: true,
      allowTaint: true,
      scale: 3,
      backgroundColor: null,
      width: 400,
      height: 500,
      scrollX: 0,
      scrollY: 0,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      imageTimeout: 15000,
      removeContainer: false,
      logging: false,
    })
      .then((canvas) => {
        const link = document.createElement("a");
        const fileName = name.trim() || "DemonSlayer";
        link.download = `${fileName}_demon_slayer_badge.png`;
        link.href = canvas.toDataURL("image/png", 1.0);
        link.click();

        button.innerHTML = "💾 Download Badge";
        setTimeout(() => {
          button.innerHTML = "✅ Downloaded!";
          showSuccessMessage("Badge downloaded successfully! 🎉");
          setTimeout(() => {
            button.innerHTML = "💾 Download Badge";
          }, 2000);
        }, 500);
      })
      .catch((err) => {
        console.error("Download failed:", err);
        button.innerHTML = "❌ Try Again";
        setTimeout(() => {
          button.innerHTML = "💾 Download Badge";
        }, 2000);
      });
  };

  const createSparkleEffect = () => {
    const badge = badgeRef.current;
    if (!badge) return;

    for (let i = 0; i < 15; i++) {
      const sparkle = document.createElement("div");
      sparkle.style.position = "absolute";
      sparkle.style.width = "4px";
      sparkle.style.height = "4px";
      sparkle.style.background = "#ffd700";
      sparkle.style.borderRadius = "50%";
      sparkle.style.pointerEvents = "none";
      sparkle.style.zIndex = "10";
      sparkle.style.boxShadow = "0 0 10px #ffd700";

      const x = Math.random() * badge.offsetWidth;
      const y = Math.random() * badge.offsetHeight;

      sparkle.style.left = x + "px";
      sparkle.style.top = y + "px";

      badge.appendChild(sparkle);

      sparkle
        .animate(
          [
            { transform: "scale(0)", opacity: 0 },
            { transform: "scale(1.5)", opacity: 1 },
            { transform: "scale(0.5)", opacity: 0 },
          ],
          {
            duration: 1500 + Math.random() * 1000,
            easing: "ease-out",
          }
        )
        .onfinish = () => {
          sparkle.remove();
        };
    }
  };

  const showSuccessMessage = (message: string) => {
    const existingMessage = document.querySelector(".success-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.textContent = message;

    document.body.appendChild(successMessage);

    setTimeout(() => {
      successMessage.style.animation =
        "slideInRight 0.5s ease-out reverse forwards";
      setTimeout(() => {
        successMessage.remove();
      }, 500);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Demon Slayer Badge Generator</h1>

        <div className="input-group">
          <label htmlFor="image-upload">📸 Upload Your Photo</label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <div className="input-group">
          <label htmlFor="name-input">⚡ Enter Your Name</label>
          <input
            type="text"
            id="name-input"
            placeholder="Enter your demon slayer name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button
            className={`generate-btn ${isGenerating ? "generating" : ""}`}
            onClick={generateBadge}
            disabled={isGenerating}
          >
            {isGenerating ? "🔄 Generating..." : "🔥 Generate Badge"}
          </button>

          <button className="download-btn" onClick={downloadBadge}>
            💾 Download Badge
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div
          ref={badgeRef}
          className={`badge-container ${badgeGenerated ? "badge-generated" : ""}`}
        >
          <div className="blade-corner tl"></div>
          <div className="blade-corner tr"></div>
          <div className="blade-corner br"></div>
          <div className="blade-corner bl"></div>

          <div className="blood-drip"></div>
          <div className="blood-drip"></div>
          <div className="blood-drip"></div>
          <div className="blood-drip"></div>

          <img
            src={imageSrc}
            alt="User"
            className="user-image"
            crossOrigin="anonymous"
          />

          <div className="badge-text user-name">{name || "Your Name"}</div>

          <img
            src="DevSphereIndia logo.png"
            alt="DevSphereIndia Logo"
            className="logo"
          />

          <div className="badge-text event-name">
            CodeSlayer 2K25 <br /> Participant
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeGenerator;
