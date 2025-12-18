import React, { useState } from 'react';
import { Sparkles, Star, Moon, Sun } from 'lucide-react';

const AstroDressColor = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const zodiacSigns = [
    { name: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire', icon: '♈' },
    { name: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth', icon: '♉' },
    { name: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air', icon: '♊' },
    { name: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water', icon: '♋' },
    { name: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire', icon: '♌' },
    { name: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth', icon: '♍' },
    { name: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air', icon: '♎' },
    { name: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water', icon: '♏' },
    { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire', icon: '♐' },
    { name: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth', icon: '♑' },
    { name: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air', icon: '♒' },
    { name: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', icon: '♓' }
  ];

  const colorRecommendations = {
    'Aries': {
      primary: '#E63946',
      secondary: '#FF6B6B',
      tertiary: '#C1121F',
      colors: ['Red', 'Scarlet', 'Crimson'],
      description: 'Bold and fiery reds match your passionate and energetic nature',
      lucky: 'Wear red for confidence and courage'
    },
    'Taurus': {
      primary: '#2D6A4F',
      secondary: '#52B788',
      tertiary: '#95D5B2',
      colors: ['Green', 'Emerald', 'Mint'],
      description: 'Earthy greens reflect your grounded and luxurious personality',
      lucky: 'Green brings prosperity and stability'
    },
    'Gemini': {
      primary: '#FFD60A',
      secondary: '#FFC300',
      tertiary: '#FFEA00',
      colors: ['Yellow', 'Gold', 'Amber'],
      description: 'Bright yellows complement your cheerful and communicative spirit',
      lucky: 'Yellow enhances mental clarity and social connections'
    },
    'Cancer': {
      primary: '#C9CBA3',
      secondary: '#E1E5F2',
      tertiary: '#B4C7E7',
      colors: ['Silver', 'Pearl White', 'Soft Blue'],
      description: 'Soft silvery tones resonate with your nurturing and intuitive soul',
      lucky: 'Silver promotes emotional healing and protection'
    },
    'Leo': {
      primary: '#FF9500',
      secondary: '#FFB703',
      tertiary: '#FB8500',
      colors: ['Gold', 'Orange', 'Royal Purple'],
      description: 'Regal golds highlight your confident and dramatic presence',
      lucky: 'Gold attracts success and recognition'
    },
    'Virgo': {
      primary: '#8B7355',
      secondary: '#A68A64',
      tertiary: '#D4A373',
      colors: ['Beige', 'Tan', 'Navy Blue'],
      description: 'Earthy neutrals suit your practical and refined nature',
      lucky: 'Earth tones bring order and wellness'
    },
    'Libra': {
      primary: '#FFB3C6',
      secondary: '#FF85A2',
      tertiary: '#FFC8DD',
      colors: ['Pink', 'Rose', 'Pastel Blue'],
      description: 'Gentle pinks reflect your harmonious and romantic essence',
      lucky: 'Pink enhances love and balance'
    },
    'Scorpio': {
      primary: '#4A0E0E',
      secondary: '#8B0000',
      tertiary: '#2C003E',
      colors: ['Maroon', 'Black', 'Deep Purple'],
      description: 'Deep mysterious shades match your intense and powerful energy',
      lucky: 'Dark reds boost transformation and passion'
    },
    'Sagittarius': {
      primary: '#7209B7',
      secondary: '#9D4EDD',
      tertiary: '#560BAD',
      colors: ['Purple', 'Violet', 'Royal Blue'],
      description: 'Vibrant purples align with your adventurous and optimistic spirit',
      lucky: 'Purple inspires wisdom and exploration'
    },
    'Capricorn': {
      primary: '#212529',
      secondary: '#495057',
      tertiary: '#6C757D',
      colors: ['Black', 'Charcoal', 'Dark Brown'],
      description: 'Classic darks embody your ambitious and disciplined character',
      lucky: 'Black provides strength and authority'
    },
    'Aquarius': {
      primary: '#00B4D8',
      secondary: '#0077B6',
      tertiary: '#48CAE4',
      colors: ['Electric Blue', 'Turquoise', 'Silver'],
      description: 'Futuristic blues reflect your innovative and unique vision',
      lucky: 'Blue stimulates creativity and independence'
    },
    'Pisces': {
      primary: '#B8A0D6',
      secondary: '#A78BFA',
      tertiary: '#C4B5FD',
      colors: ['Lavender', 'Sea Green', 'Aquamarine'],
      description: 'Dreamy purples and aquas match your intuitive and artistic soul',
      lucky: 'Lavender enhances spirituality and imagination'
    }
  };

  const handleSignSelect = (sign) => {
    setSelectedSign(sign);
    setRecommendation(colorRecommendations[sign]);
  };

  return (
          <div className="min-h-screen bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="text-yellow-300 w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Cosmic Dress Color Guide
            </h1>
            <Sun className="text-yellow-300 w-8 h-8" />
          </div>
          <p className="text-purple-200 text-lg">
            Discover your perfect dress colors based on your zodiac sign
          </p>
        </div>

        {/* Zodiac Sign Selection */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Star className="text-yellow-300" />
            Select Your Zodiac Sign
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.name}
                onClick={() => handleSignSelect(sign.name)}
                className={`p-4 rounded-xl transition-all transform hover:scale-105 ${
                  selectedSign === sign.name
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <div className="text-4xl mb-2">{sign.icon}</div>
                <div className="text-white font-semibold">{sign.name}</div>
                <div className="text-purple-200 text-xs">{sign.dates}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Color Recommendation Display */}
        {recommendation && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-yellow-300 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">
                Your Cosmic Colors - {selectedSign}
              </h2>
            </div>

            {/* Color Palette */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div
                  className="w-full h-32 rounded-xl shadow-lg mb-3 transform hover:scale-105 transition-transform"
                  style={{ backgroundColor: recommendation.primary }}
                ></div>
                <p className="text-white font-semibold">Primary</p>
              </div>
              <div className="text-center">
                <div
                  className="w-full h-32 rounded-xl shadow-lg mb-3 transform hover:scale-105 transition-transform"
                  style={{ backgroundColor: recommendation.secondary }}
                ></div>
                <p className="text-white font-semibold">Secondary</p>
              </div>
              <div className="text-center">
                <div
                  className="w-full h-32 rounded-xl shadow-lg mb-3 transform hover:scale-105 transition-transform"
                  style={{ backgroundColor: recommendation.tertiary }}
                ></div>
                <p className="text-white font-semibold">Accent</p>
              </div>
            </div>

            {/* Color Names */}
            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Your Lucky Colors</h3>
              <div className="flex flex-wrap gap-3">
                {recommendation.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Why These Colors?</h3>
              <p className="text-purple-100 text-lg leading-relaxed">
                {recommendation.description}
              </p>
            </div>

            {/* Lucky Tip */}
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl p-6 border-2 border-yellow-300/30">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Lucky Tip
              </h3>
              <p className="text-white text-lg">
                {recommendation.lucky}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-purple-200">
          <p className="text-sm">✨ Let the stars guide your style ✨</p>
        </div>
      </div>
    </div>
  );
};

export default AstroDressColor;