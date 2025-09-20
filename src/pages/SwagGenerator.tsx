// Add these imports at the top
import { Upload, Download, Sparkles, Camera, User, Palette, RefreshCw } from 'lucide-react';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

// Updated interface to include background images
interface SwagTemplate {
  id: string;
  name: string;
  gradient: string;
  textColor: string;
  accentColor: string;
  backgroundImage: string;
  overlay: string;
}

// Enhanced templates with background images from your public folder
const templates: SwagTemplate[] = [
  {
    id: 'Theme1',
    name: 'Theme1',
    gradient: 'bg-gradient-to-br from-purple-600/80 via-pink-600/80 to-blue-600/80',
    textColor: 'text-white',
    accentColor: 'text-yellow-300',
    backgroundImage: '/demon-slayer-3840x2160-23615.jpg',
    overlay: 'bg-black/40'
  },
  {
    id: 'Theme2',
    name: 'Theme2',
    gradient: 'bg-gradient-to-br from-orange-500/80 via-red-500/80 to-pink-500/80',
    textColor: 'text-white',
    accentColor: 'text-yellow-200',
    backgroundImage: '/slay.jpg',
    overlay: 'bg-black/30'
  },
  {
    id: 'Theme3',
    name: 'Theme3',
    gradient: 'bg-gradient-to-br from-indigo-900/80 via-purple-800/80 to-pink-700/80',
    textColor: 'text-white',
    accentColor: 'text-purple-300',
    backgroundImage: '/9.jpg',
    overlay: 'bg-black/50'
  }
];

const SwagGenerator = () => {
  const [participantName, setParticipantName] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [eventName] = useState('Code Slayer 2025');
  const [participantRole] = useState('Code Warrior');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateSwag = () => {
    if (!participantName.trim() || !uploadedImage) {
      alert('Please upload your photo and enter your name!');
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  // Updated handleDownload function to capture exact preview size
  const handleDownload = async () => {
    const cardElement = document.getElementById('swag-card');
    if (!cardElement) return;
  
    try {
      const computedStyle = window.getComputedStyle(cardElement);
      const currentWidth = parseInt(computedStyle.width);
      const currentHeight = parseInt(computedStyle.height);

      const canvas = await html2canvas(cardElement, {
        width: currentWidth,
        height: cardElement.scrollHeight,
        windowHeight: cardElement.scrollHeight,
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
      });
  
      const link = document.createElement('a');
      link.download = `${participantName.replace(/\s+/g, '_')}_Swag.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Error generating card:', error);
      alert('Error generating card. Please try again.');
    }
  };

  const randomizeTemplate = () => {
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    setSelectedTemplate(randomTemplate);
  };

  return (
    <div 
      className="min-h-screen py-8 px-3 sm:px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${selectedTemplate.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay for page */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center mb-4">
            <div className="text-yellow-400 font-black text-2xl sm:text-4xl tracking-wider" style={{fontFamily: "'Orbitron', monospace"}}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                CODE
              </span>
              <span className="text-red-500 ml-2">
                SLAYER
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4 py-3" style={{fontFamily: "'Orbitron', monospace"}}>
            Digital Swag Generator
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Create your personalized Code Slayer 2025 swag card! Upload your photo, add your name, and generate a cool card to share on social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Name Input */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20">
              <label className="block text-white text-base sm:text-lg font-semibold mb-3">
                <User className="inline w-5 h-5 mr-2" />
                Your Name
              </label>
              <input
                type="text"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                maxLength={30}
              />
            </div>

            {/* Photo Upload */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20">
              <label className="block text-white text-base sm:text-lg font-semibold mb-3">
                <Camera className="inline w-5 h-5 mr-2" />
                Upload Your Photo
              </label>
              <div className="flex flex-col items-center">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/20 border-2 border-dashed border-white/40 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors mb-4"
                >
                  {uploadedImage ? (
                    <img 
                      src={uploadedImage} 
                      alt="Preview" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  Choose Photo
                </button>
              </div>
            </div>

            {/* Template Selection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20">
              <label className="block text-white text-base sm:text-lg font-semibold mb-3">
                <Palette className="inline w-5 h-5 mr-2" />
                Choose Template
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`relative h-20 sm:h-24 rounded-lg overflow-hidden border-2 ${
                      selectedTemplate.id === template.id ? 'border-white ring-2 ring-white' : 'border-white/30'
                    } hover:scale-105 transition-transform`}
                  >
                    <img 
                      src={template.backgroundImage} 
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">{template.name}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={randomizeTemplate}
                className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <RefreshCw className="w-4 h-4" />
                Randomize
              </button>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerateSwag}
              disabled={isGenerating || !participantName.trim() || !uploadedImage}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold text-base sm:text-lg rounded-2xl transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </div>
              ) : (
                'Generate My Swag Card'
              )}
            </button>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <div className="mb-4 sm:mb-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Preview</h2>
              <p className="text-gray-300 text-sm sm:text-base">Your personalized swag card</p>
            </div>

            {/* Swag Card */}
            <div className="relative">
              <div 
                id="swag-card"
                className="relative w-[18rem] h-[26rem] sm:w-[24rem] sm:h-[34rem] md:w-[28rem] md:h-[38rem] pb-10 sm:pb-12 rounded-3xl overflow-hidden"
                style={{
                  backgroundImage: `url(${selectedTemplate.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  fontFamily: "'Orbitron', monospace"
                }}
              >
                {/* Background overlay */}
                {selectedTemplate.overlay && (
                  <div className={`absolute inset-0 ${selectedTemplate.overlay}`}></div>
                )}
                
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/5 rounded-full blur-2xl"></div>
                </div>

                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <img 
                    src="/codeslayer.png" 
                    alt="Code Slayer Logo" 
                    className={`h-12 sm:h-16 md:h-24 w-auto object-contain mb-2 sm:mb-3 mx-auto animate-pulse ${selectedTemplate.accentColor}`}
                  />
                  <h3 className={`text-xl sm:text-2xl md:text-4xl font-black ${selectedTemplate.textColor} tracking-wider mb-2 pb-5`}>
                    {eventName}
                  </h3>
                </div>

                {/* Photo & Name */}
                <div className="relative z-10 flex flex-col items-center px-3 sm:px-6">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center mb-3 sm:mb-6 overflow-hidden shadow-xl">
                    {uploadedImage ? (
                      <img 
                        src={uploadedImage} 
                        alt="Participant" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Camera className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 text-white/60" />
                    )}
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-red-500 text-center mb-3 sm:mb-4 tracking-wide drop-shadow-lg pb-5">
                    {participantName || 'Your Name'}
                  </h2>
                  <p className={`text-sm sm:text-base md:text-xl ${selectedTemplate.textColor} opacity-90 text-center font-bold`}>
                    {participantRole || 'Participant'}
                  </p>
                </div>

                {/* Footer */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-10">
                  <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 ${selectedTemplate.accentColor} rounded-full animate-bounce`}></div>
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 ${selectedTemplate.accentColor} rounded-full animate-bounce`} style={{animationDelay: '0.1s'}}></div>
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 ${selectedTemplate.accentColor} rounded-full animate-bounce`} style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <p className="text-white text-center text-xs sm:text-sm md:text-lg font-bold tracking-wider opacity-90">
                    #CodeSlayer2025 #Hackathon
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            {participantName && uploadedImage && (
              <button
                onClick={handleDownload}
                className="mt-5 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Card
              </button>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">How to Use</h3>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 text-gray-300 text-sm sm:text-base">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-white font-bold text-base sm:text-xl">1</span>
              </div>
              <h4 className="font-semibold text-white mb-1 sm:mb-2">Upload Photo</h4>
              <p>Click the upload area and select your best photo</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-white font-bold text-base sm:text-xl">2</span>
              </div>
              <h4 className="font-semibold text-white mb-1 sm:mb-2">Add Your Name</h4>
              <p>Type your name in the input field</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-white font-bold text-base sm:text-xl">3</span>
              </div>
              <h4 className="font-semibold text-white mb-1 sm:mb-2">Generate & Download</h4>
              <p>Click generate and download your swag card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwagGenerator;
