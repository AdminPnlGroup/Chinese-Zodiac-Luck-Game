import { useState } from 'react'
import ratGif from './assets/images/Zodiac Icon/Rat.gif'
import oxGif from './assets/images/Zodiac Icon/Ox.gif'
import tigerGif from './assets/images/Zodiac Icon/Tiger.gif'
import rabbitGif from './assets/images/Zodiac Icon/Rabbit.gif'
import dragonGif from './assets/images/Zodiac Icon/Dragon.gif'
import snakeGif from './assets/images/Zodiac Icon/Snake.gif'
import horseGif from './assets/images/Zodiac Icon/Horse.gif'
import goatGif from './assets/images/Zodiac Icon/Goat.gif'
import monkeyGif from './assets/images/Zodiac Icon/Monkey.gif'
import roosterGif from './assets/images/Zodiac Icon/Rooster.gif'
import dogGif from './assets/images/Zodiac Icon/Dog.gif'
import pigGif from './assets/images/Zodiac Icon/Pig.gif'

import ratCard from './assets/images/Card Image/Rat.jpg'
import oxCard from './assets/images/Card Image/Ox.jpg'
import tigerCard from './assets/images/Card Image/Tiger.jpg'
import rabbitCard from './assets/images/Card Image/Rabbit.jpg'
import dragonCard from './assets/images/Card Image/Dragon.jpg'
import snakeCard from './assets/images/Card Image/Snake.jpg'
import horseCard from './assets/images/Card Image/Horse.jpg'
import goatCard from './assets/images/Card Image/Goat.jpg'
import monkeyCard from './assets/images/Card Image/Monkey.jpg'
import roosterCard from './assets/images/Card Image/Rooster.jpg'
import dogCard from './assets/images/Card Image/Dog.jpg'
import pigCard from './assets/images/Card Image/Pig.jpg'

const zodiacAnimals = [
  { name: 'Rat', emoji: '🐀', image: ratGif, cardImage: ratCard, traits: 'Quick-witted, resourceful, versatile', luckyNumbers: [2, 3], color: 'blue' },
  { name: 'Ox', emoji: '🐂', image: oxGif, cardImage: oxCard, traits: 'Diligent, dependable, strong', luckyNumbers: [1, 4], color: 'yellow' },
  { name: 'Tiger', emoji: '🐅', image: tigerGif, cardImage: tigerCard, traits: 'Brave, confident, competitive', luckyNumbers: [1, 3, 4], color: 'orange' },
  { name: 'Rabbit', emoji: '🐇', image: rabbitGif, cardImage: rabbitCard, traits: 'Quiet, elegant, kind', luckyNumbers: [3, 4, 6], color: 'pink' },
  { name: 'Dragon', emoji: '🐉', image: dragonGif, cardImage: dragonCard, traits: 'Confident, intelligent, enthusiastic', luckyNumbers: [1, 6, 7], color: 'red' },
  { name: 'Snake', emoji: '🐍', image: snakeGif, cardImage: snakeCard, traits: 'Enigmatic, wise, graceful', luckyNumbers: [2, 8, 9], color: 'green' },
  { name: 'Horse', emoji: '🐴', image: horseGif, cardImage: horseCard, traits: 'Animated, active, energetic', luckyNumbers: [2, 3, 7], color: 'purple' },
  { name: 'Goat', emoji: '🐐', image: goatGif, cardImage: goatCard, traits: 'Calm, gentle, sympathetic', luckyNumbers: [3, 4, 9], color: 'green' },
  { name: 'Monkey', emoji: '🐵', image: monkeyGif, cardImage: monkeyCard, traits: 'Sharp, smart, curious', luckyNumbers: [1, 7, 8], color: 'yellow' },
  { name: 'Rooster', emoji: '🐓', image: roosterGif, cardImage: roosterCard, traits: 'Observant, hardworking, courageous', luckyNumbers: [5, 7, 8], color: 'red' },
  { name: 'Dog', emoji: '🐕', image: dogGif, cardImage: dogCard, traits: 'Lovely, honest, prudent', luckyNumbers: [3, 4, 9], color: 'brown' },
  { name: 'Pig', emoji: '🐖', image: pigGif, cardImage: pigCard, traits: 'Compassionate, generous, diligent', luckyNumbers: [2, 5, 8], color: 'pink' }
]

const fortunes = [
  { type: 'excellent', message: 'Excellent fortune awaits you! 🌟', color: 'text-yellow-400' },
  { type: 'good', message: 'Good luck is on your side! ✨', color: 'text-green-400' },
  { type: 'moderate', message: 'Steady progress ahead! 🎯', color: 'text-blue-400' },
  { type: 'challenging', message: 'Challenges bring growth! 💪', color: 'text-orange-400' }
]

function App() {
  const [selectedZodiac, setSelectedZodiac] = useState(null)
  const [fortune, setFortune] = useState(null)
  const [luckyNumber, setLuckyNumber] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const handleZodiacSelect = (zodiac) => {
    setSelectedZodiac(zodiac)
    setFortune(null)
    setLuckyNumber(null)
  }

  const checkLuck = () => {
    if (!selectedZodiac) return

    setIsSpinning(true)
    
    setTimeout(() => {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
      const randomLuckyNumber = selectedZodiac.luckyNumbers[
        Math.floor(Math.random() * selectedZodiac.luckyNumbers.length)
      ]
      
      setFortune(randomFortune)
      setLuckyNumber(randomLuckyNumber)
      setIsSpinning(false)
    }, 1500)
  }

  const reset = () => {
    setSelectedZodiac(null)
    setFortune(null)
    setLuckyNumber(null)
  }

  if (selectedZodiac) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-12 px-16">
        <div className="flex flex-col items-center w-full max-w-[2000px]">
          <div className="flex justify-center mb-12 w-full">
            <img 
              src={selectedZodiac.cardImage} 
              alt={selectedZodiac.name} 
              className="w-full h-auto max-h-[90vh] object-contain rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex justify-center py-12 bg-gradient-to-br from-red-900 via-red-700 to-orange-600 w-full rounded-3xl">
            <button
              onClick={reset}
              className="px-20 py-10 rounded-full font-bold text-5xl text-white bg-gradient-to-r from-yellow-500 via-red-600 to-orange-600 hover:from-yellow-600 hover:via-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-yellow-400"
            >
              🔙 กลับไปเลือกราศี
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-orange-600 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-9xl font-bold text-white mb-6 drop-shadow-lg">
            🎋 Chinese Zodiac Luck Game 🎋
          </h1>
          <p className="text-5xl text-yellow-100">
            Choose your zodiac sign and discover your fortune!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {zodiacAnimals.map((zodiac) => (
            <button
              key={zodiac.name}
              onClick={() => handleZodiacSelect(zodiac)}
              className="p-12 rounded-3xl transition-all duration-300 transform hover:scale-105 bg-white hover:bg-yellow-50 shadow-lg"
            >
              <img src={zodiac.image} alt={zodiac.name} className="w-full h-auto mb-6" />
              <div className="text-4xl font-semibold text-gray-800">{zodiac.name}</div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center text-white/80 text-3xl">
          <p>🧧 May fortune and prosperity follow you 🧧</p>
        </div>
      </div>
    </div>
  )
}

export default App
