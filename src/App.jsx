import { useState, useEffect } from 'react'
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
import zodiacWheel from './assets/images/Card Image/chinese-zodiac-wheel.png'
import bgImage from './assets/images/Card Image/BG.png'

const zodiacAnimals = [
  { name: 'Rat', nameThai: 'ปีชวด (หนู)', image: ratGif, cardImage: ratCard, traits: 'Quick-witted, resourceful, versatile', luckyNumbers: [2, 3], color: 'blue' },
  { name: 'Ox', nameThai: 'ปีฉลู (วัว)', image: oxGif, cardImage: oxCard, traits: 'Diligent, dependable, strong', luckyNumbers: [1, 4], color: 'yellow' },
  { name: 'Tiger', nameThai: 'ปีขาล (เสือ)', image: tigerGif, cardImage: tigerCard, traits: 'Brave, confident, competitive', luckyNumbers: [1, 3, 4], color: 'orange' },
  { name: 'Rabbit', nameThai: 'ปีเถาะ (กระต่าย)', image: rabbitGif, cardImage: rabbitCard, traits: 'Quiet, elegant, kind', luckyNumbers: [3, 4, 6], color: 'pink' },
  { name: 'Dragon', nameThai: 'ปีมะโรง (มังกร)', image: dragonGif, cardImage: dragonCard, traits: 'Confident, intelligent, enthusiastic', luckyNumbers: [1, 6, 7], color: 'red' },
  { name: 'Snake', nameThai: 'ปีมะเส็ง (งู)', image: snakeGif, cardImage: snakeCard, traits: 'Enigmatic, wise, graceful', luckyNumbers: [2, 8, 9], color: 'green' },
  { name: 'Horse', nameThai: 'ปีมะเมีย (ม้า)', image: horseGif, cardImage: horseCard, traits: 'Animated, active, energetic', luckyNumbers: [2, 3, 7], color: 'purple' },
  { name: 'Goat', nameThai: 'ปีมะแม (แพะ)', image: goatGif, cardImage: goatCard, traits: 'Calm, gentle, sympathetic', luckyNumbers: [3, 4, 9], color: 'green' },
  { name: 'Monkey', nameThai: 'ปีวอก (ลิง)', image: monkeyGif, cardImage: monkeyCard, traits: 'Sharp, smart, curious', luckyNumbers: [1, 7, 8], color: 'yellow' },
  { name: 'Rooster', nameThai: 'ปีระกา (ไก่)', image: roosterGif, cardImage: roosterCard, traits: 'Observant, hardworking, courageous', luckyNumbers: [5, 7, 8], color: 'red' },
  { name: 'Dog', nameThai: 'ปีจอ (สุนัข)', image: dogGif, cardImage: dogCard, traits: 'Lovely, honest, prudent', luckyNumbers: [3, 4, 9], color: 'brown' },
  { name: 'Pig', nameThai: 'ปีกุน (หมู)', image: pigGif, cardImage: pigCard, traits: 'Compassionate, generous, diligent', luckyNumbers: [2, 5, 8], color: 'pink' }
]

const fortunes = [
  { type: 'excellent', message: 'Excellent fortune awaits you! 🌟', color: 'text-yellow-400' },
  { type: 'good', message: 'Good luck is on your side! ✨', color: 'text-green-400' },
  { type: 'moderate', message: 'Steady progress ahead! 🎯', color: 'text-blue-400' },
  { type: 'challenging', message: 'Challenges bring growth! 💪', color: 'text-orange-400' }
]

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [selectedZodiac, setSelectedZodiac] = useState(null)
  const [fortune, setFortune] = useState(null)
  const [luckyNumber, setLuckyNumber] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleZodiacSelect = (zodiac) => {
    setSelectedZodiac(zodiac)
    setCurrentPage('card')
    setFortune(null)
    setLuckyNumber(null)
  }

  const goToSelection = () => {
    setCurrentPage('selection')
    setSelectedZodiac(null)
  }

  const goToLanding = () => {
    setCurrentPage('landing')
    setSelectedZodiac(null)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log('Error attempting to enable fullscreen:', err)
      })
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-16 relative">
        <button
          onClick={toggleFullscreen}
          className="absolute top-8 right-8 p-6 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-xl z-10"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>

        <div className="flex flex-col items-center w-full max-w-[2000px]">
          <div className="flex justify-center mb-12 w-full">
            <img 
              src={zodiacWheel} 
              alt="Chinese Zodiac Wheel" 
              className="w-full h-auto max-h-[90vh] object-contain rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              onClick={goToSelection}
              className="px-24 py-12 rounded-full font-bold text-6xl text-white bg-gradient-to-r from-yellow-500 via-red-600 to-orange-600 hover:from-yellow-600 hover:via-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-yellow-400 animate-pulse"
            >
              ✨ START ✨
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'card' && selectedZodiac) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-16 relative">
        <button
          onClick={toggleFullscreen}
          className="absolute top-8 right-8 p-6 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-xl z-10"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>

        <div className="flex flex-col items-center w-full max-w-[2000px]">
          <div className="flex justify-center mb-12 w-full">
            <img 
              src={selectedZodiac.cardImage} 
              alt={selectedZodiac.name} 
              className="w-full h-auto max-h-[90vh] object-contain rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              onClick={goToLanding}
              className="px-20 py-10 rounded-full font-bold text-5xl text-white bg-gradient-to-r from-yellow-500 via-red-600 to-orange-600 hover:from-yellow-600 hover:via-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-yellow-400"
            >
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <button
        onClick={toggleFullscreen}
        className="absolute top-8 right-8 p-6 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-xl z-20"
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      >
        {isFullscreen ? (
          <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>

      <div className="w-full max-w-[1600px] relative z-10">
        <div className="grid grid-cols-3 gap-x-12 gap-y-16 px-8 h-[60vh] mt-60">
          {zodiacAnimals.map((zodiac) => (
            <button
              key={zodiac.name}
              onClick={() => handleZodiacSelect(zodiac)}
              className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="relative mb-6 w-96 h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-200 rounded-3xl opacity-90 group-hover:opacity-100 transition-all duration-300 shadow-2xl group-hover:shadow-amber-400/60 rotate-3 group-hover:rotate-6"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg"></div>
                <div className="absolute inset-3 border-4 border-white rounded-2xl shadow-inner bg-gradient-to-br from-amber-50/50 to-transparent"></div>
                <img 
                  src={zodiac.image} 
                  alt={zodiac.name} 
                  className="relative z-10 w-80 h-80 object-contain filter brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-300"
                />
              </div>
              <div className="bg-gradient-to-b from-amber-800 to-amber-950 text-white rounded-2xl px-8 py-4 shadow-2xl group-hover:shadow-amber-900/50 transition-all duration-300 min-w-[240px] border-2 border-amber-700">
                <div className="text-2xl font-bold mb-1 tracking-wider">{zodiac.name.toUpperCase()}</div>
                <div className="text-lg font-light opacity-90">{zodiac.nameThai}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
