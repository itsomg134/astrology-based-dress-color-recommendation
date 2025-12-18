# astrology-based-dress-color-recommendation

An interactive web application that helps users discover their perfect dress colors based on their zodiac sign. Let the stars guide your style!

![Astrology](https://img.shields.io/badge/Astrology-Zodiac-purple)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **12 Zodiac Signs** - Complete coverage of all astrological signs
- **Personalized Color Palettes** - Each sign gets 3 harmonious colors (primary, secondary, accent)
- **Interactive UI** - Beautiful animations and hover effects
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Lucky Tips** - Personalized guidance on how colors benefit your sign
- **Modern Aesthetics** - Cosmic gradient background with glassmorphism effects

## 🎨 Color Recommendations by Sign

| Zodiac Sign | Primary Colors | Element |
|-------------|---------------|---------|
| ♈ Aries | Red, Scarlet, Crimson | Fire |
| ♉ Taurus | Green, Emerald, Mint | Earth |
| ♊ Gemini | Yellow, Gold, Amber | Air |
| ♋ Cancer | Silver, Pearl White, Soft Blue | Water |
| ♌ Leo | Gold, Orange, Royal Purple | Fire |
| ♍ Virgo | Beige, Tan, Navy Blue | Earth |
| ♎ Libra | Pink, Rose, Pastel Blue | Air |
| ♏ Scorpio | Maroon, Black, Deep Purple | Water |
| ♐ Sagittarius | Purple, Violet, Royal Blue | Fire |
| ♑ Capricorn | Black, Charcoal, Dark Brown | Earth |
| ♒ Aquarius | Electric Blue, Turquoise, Silver | Air |
| ♓ Pisces | Lavender, Sea Green, Aquamarine | Water |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/astrology-dress-color.git
cd astrology-dress-color
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Project Structure

```
astrology-dress-color/
├── src/
│   ├── components/
│   │   └── AstroDressColor.jsx
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

## 🎯 Usage

1. **Select Your Zodiac Sign** - Click on your zodiac sign from the grid
2. **View Your Colors** - See your personalized color palette with three coordinated shades
3. **Read Your Description** - Learn why these colors match your astrological personality
4. **Get Lucky Tips** - Discover how to use these colors for maximum benefit

## 🌈 Customization

### Changing Background Colors

Edit the gradient in `AstroDressColor.jsx`:

```jsx
<div className="min-h-screen bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
```

### Adding New Color Schemes

Modify the `colorRecommendations` object:

```javascript
const colorRecommendations = {
  'YourSign': {
    primary: '#HexColor',
    secondary: '#HexColor',
    tertiary: '#HexColor',
    colors: ['Color1', 'Color2', 'Color3'],
    description: 'Your description',
    lucky: 'Your lucky tip'
  }
};
```

## 📱 Screenshots

### Desktop View
Beautiful cosmic interface with all zodiac signs displayed in an intuitive grid.

### Mobile View
Fully responsive design that works perfectly on all screen sizes.

### Color Display
Interactive color swatches with smooth hover animations.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Zodiac color associations based on traditional astrology
- Icons from [Lucide React](https://lucide.dev/)
- Inspired by the cosmic connection between personality and color

## 📧 Contact

Om Gedam

GitHub: @itsomg134

Email: omgedam123098@gmail.com

Twitter (X): @omgedam

LinkedIn: Om Gedam

Portfolio: https://ogworks.lovable.app

## 🔮 Future Enhancements

- [ ] Add birth date picker for automatic sign detection
- [ ] Include Chinese zodiac integration
- [ ] Add color combination suggestions for different occasions
- [ ] Export color palette as image
- [ ] Multiple language support
- [ ] Dark/Light mode toggle
- [ ] Save favorite color combinations
- [ ] Share results on social media
