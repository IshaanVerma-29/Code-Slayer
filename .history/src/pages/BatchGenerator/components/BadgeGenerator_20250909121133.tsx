import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import BadgeDisplay from "./BadgeDisplay";

const BadgeGenerator: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("codeslayer.png");
  const [name, setName] = useState<string>("");
  const [badgeGenerated, setBadgeGenerated] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  const badgeRef = useRef<HTMLDivElement | null>(null);
  const downloadBtnRef = useRef<HTMLButtonElement | null>(null);

  // Image upload & basic resizing + enhancement (keeps your original behaviour)
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

        // gentle brighten (as in your original)
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
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        void badge.offsetHeight;
        badge.style.animation = "badgePulse 4s ease-in-out infinite alternate";
      }

      createSparkleEffect();
      showSuccessMessage("Badge generated successfully! ✨");
    }, 1500);
  };

  const downloadBadge = async () => {
    if (!badgeGenerated) {
      alert("Please generate the badge first! ⚔️");
      return;
    }

    const button = downloadBtnRef.current;
    if (!button) return;

    const originalText = button.innerHTML;
    button.innerHTML = "⏳ Downloading...";

    try {
      const canvas = await html2canvas(badgeRef.current as HTMLElement, {
        useCORS: true,
        allowTaint: true,
        scale: 3,
        backgroundColor: null,
        width: (badgeRef.current as HTMLElement)?.offsetWidth,
        height: (badgeRef.current as HTMLElement)?.offsetHeight,
        scrollX: 0,
        scrollY: 0,
        imageTimeout: 15000,
        logging: false,
      });

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
          button.innerHTML = originalText;
        }, 1500);
      }, 500);
    } catch (err) {
      console.error("Download failed:", err);
      button.innerHTML = "❌ Try Again";
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 1500);
    }
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

  // React-based success toast (no raw DOM append)
  const showSuccessMessage = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="container">
      {/* Toast */}
      {toast && (
        <div className="success-message" style={{ position: "fixed", right: 20, top: 20, zIndex: 60 }}>
          {toast}
        </div>
      )}

      <div className="left-panel">
        <h1>Demon Slayer Badge Generator</h1>

        <div className="input-group">
          <label htmlFor="image-upload">📸 Upload Your Photo</label>
          <input type="file" id="image-upload" accept="image/*" onChange={handleImageUpload} />
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

          <button ref={downloadBtnRef} className="download-btn" onClick={downloadBadge}>
            💾 Download Badge
          </button>
        </div>
      </div>

      {/* Render the preview using the BadgeDisplay component */}
      <BadgeDisplay ref={badgeRef} imageSrc={imageSrc} name={name} badgeGenerated={badgeGenerated} />
    </div>
  );
};

export default BadgeGenerator;
