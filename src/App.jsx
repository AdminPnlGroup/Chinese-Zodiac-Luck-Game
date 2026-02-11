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
import zodiacWheel from './assets/images/Card Image/chinese-zodiac-wheel.png'
import bgImage from './assets/images/Card Image/BG.png'

const cardImages = {
  Rat: () => import('./assets/images/Card Image/Rat.jpg'),
  Ox: () => import('./assets/images/Card Image/Ox.jpg'),
  Tiger: () => import('./assets/images/Card Image/Tiger.jpg'),
  Rabbit: () => import('./assets/images/Card Image/Rabbit.jpg'),
  Dragon: () => import('./assets/images/Card Image/Dragon.jpg'),
  Snake: () => import('./assets/images/Card Image/Snake.jpg'),
  Horse: () => import('./assets/images/Card Image/Horse.jpg'),
  Goat: () => import('./assets/images/Card Image/Goat.jpg'),
  Monkey: () => import('./assets/images/Card Image/Monkey.jpg'),
  Rooster: () => import('./assets/images/Card Image/Rooster.jpg'),
  Dog: () => import('./assets/images/Card Image/Dog.jpg'),
  Pig: () => import('./assets/images/Card Image/Pig.jpg')
}

const zodiacAnimals = [
  { name: 'Rat', nameThai: 'ปีชวด (หนู)', image: ratGif, traits: 'Quick-witted, resourceful, versatile', luckyNumbers: [2, 3], color: 'blue' },
  { name: 'Ox', nameThai: 'ปีฉลู (วัว)', image: oxGif, traits: 'Diligent, dependable, strong', luckyNumbers: [1, 4], color: 'yellow' },
  { name: 'Tiger', nameThai: 'ปีขาล (เสือ)', image: tigerGif, traits: 'Brave, confident, competitive', luckyNumbers: [1, 3, 4], color: 'orange' },
  { name: 'Rabbit', nameThai: 'ปีเถาะ (กระต่าย)', image: rabbitGif, traits: 'Quiet, elegant, kind', luckyNumbers: [3, 4, 6], color: 'pink' },
  { name: 'Dragon', nameThai: 'ปีมะโรง (มังกร)', image: dragonGif, traits: 'Confident, intelligent, enthusiastic', luckyNumbers: [1, 6, 7], color: 'red' },
  { name: 'Snake', nameThai: 'ปีมะเส็ง (งู)', image: snakeGif, traits: 'Enigmatic, wise, graceful', luckyNumbers: [2, 8, 9], color: 'green' },
  { name: 'Horse', nameThai: 'ปีมะเมีย (ม้า)', image: horseGif, traits: 'Animated, active, energetic', luckyNumbers: [2, 3, 7], color: 'purple' },
  { name: 'Goat', nameThai: 'ปีมะแม (แพะ)', image: goatGif, traits: 'Calm, gentle, sympathetic', luckyNumbers: [3, 4, 9], color: 'green' },
  { name: 'Monkey', nameThai: 'ปีวอก (ลิง)', image: monkeyGif, traits: 'Sharp, smart, curious', luckyNumbers: [1, 7, 8], color: 'yellow' },
  { name: 'Rooster', nameThai: 'ปีระกา (ไก่)', image: roosterGif, traits: 'Observant, hardworking, courageous', luckyNumbers: [5, 7, 8], color: 'red' },
  { name: 'Dog', nameThai: 'ปีจอ (สุนัข)', image: dogGif, traits: 'Lovely, honest, prudent', luckyNumbers: [3, 4, 9], color: 'brown' },
  { name: 'Pig', nameThai: 'ปีกุน (หมู)', image: pigGif, traits: 'Compassionate, generous, diligent', luckyNumbers: [2, 5, 8], color: 'pink' }
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
  const [cardImageUrl, setCardImageUrl] = useState(null)
  const [fortune, setFortune] = useState(null)
  const [luckyNumber, setLuckyNumber] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)

  const handleZodiacSelect = async (zodiac) => {
    setSelectedZodiac(zodiac)
    setImageLoading(true)
    setCurrentPage('card')
    setFortune(null)
    setLuckyNumber(null)
    
    const imageModule = await cardImages[zodiac.name]()
    setCardImageUrl(imageModule.default)
    setImageLoading(false)
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

  useEffect(() => {
    const preloadImages = [zodiacWheel, bgImage]
    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-16 relative">
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 p-3 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-xl z-10"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>

        <div className="flex flex-col items-center w-full max-w-[2000px]">
          <div className="flex justify-center mb-8 w-full">
            <img 
              src={zodiacWheel} 
              alt="Chinese Zodiac Wheel" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-3xl shadow-2xl"
              loading="eager"
            />
          </div>
          <div className="flex justify-center w-full mb-8">
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
          className="absolute top-4 right-4 p-3 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-xl z-10"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>

        <div className="flex flex-col items-center w-full max-w-[2000px]">
          <div className="flex justify-center mb-8 w-full">
            {imageLoading ? (
              <div className="w-full h-[85vh] flex items-center justify-center">
                <div className="text-4xl text-gray-400 animate-pulse">Loading...</div>
              </div>
            ) : (
              <img 
                src={cardImageUrl} 
                alt={selectedZodiac.name} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-3xl shadow-2xl"
                loading="eager"
              />
            )}
          </div>
          <div className="flex justify-center w-full mb-8">
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
        className="absolute top-4 right-4 p-3 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-xl z-20"
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      >
        {isFullscreen ? (
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>

      <div className="w-full max-w-[1300px] relative z-10 py-6">
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 px-4">
          {zodiacAnimals.map((zodiac) => (
            <button
              key={zodiac.name}
              onClick={() => handleZodiacSelect(zodiac)}
              className="group flex flex-col items-center transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="relative mb-3 w-42 h-42 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-200 rounded-3xl opacity-90 group-hover:opacity-100 transition-all duration-300 shadow-xl group-hover:shadow-amber-400/60 rotate-2 group-hover:rotate-3"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg"></div>
                <div className="absolute inset-2 border-3 border-white rounded-2xl shadow-inner bg-gradient-to-br from-amber-50/50 to-transparent"></div>
                <img 
                  src={zodiac.image} 
                  alt={zodiac.name} 
                  className="relative z-10 w-36 h-36 object-contain filter brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="bg-gradient-to-b from-amber-800 to-amber-950 text-white rounded-xl px-5 py-2.5 shadow-xl group-hover:shadow-amber-900/50 transition-all duration-300 min-w-[180px] border-2 border-amber-700">
                <div className="text-lg font-bold mb-0.5 tracking-wider">{zodiac.name.toUpperCase()}</div>
                <div className="text-sm font-light opacity-90">{zodiac.nameThai}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
