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
import ratButton from './assets/images/botton/Rat.png'
import oxButton from './assets/images/botton/Ox.png'
import tigerButton from './assets/images/botton/Tiger.png'
import rabbitButton from './assets/images/botton/Rabbit.png'
import dragonButton from './assets/images/botton/Dragon.png'
import snakeButton from './assets/images/botton/Snake.png'
import horseButton from './assets/images/botton/Horse.png'
import goatButton from './assets/images/botton/Goat.png'
import monkeyButton from './assets/images/botton/Money.png'
import roosterButton from './assets/images/botton/Rooster.png'
import dogButton from './assets/images/botton/Dog.png'
import pigButton from './assets/images/botton/Pig.png'

const cardImages = {
  Rat: ratCard,
  Ox: oxCard,
  Tiger: tigerCard,
  Rabbit: rabbitCard,
  Dragon: dragonCard,
  Snake: snakeCard,
  Horse: horseCard,
  Goat: goatCard,
  Monkey: monkeyCard,
  Rooster: roosterCard,
  Dog: dogCard,
  Pig: pigCard
}

const zodiacAnimals = [
  { name: 'Rat', nameThai: 'ปีชวด (หนู)', image: ratGif, buttonImage: ratButton, traits: 'Quick-witted, resourceful, versatile', luckyNumbers: [2, 3], color: 'blue' },
  { name: 'Ox', nameThai: 'ปีฉลู (วัว)', image: oxGif, buttonImage: oxButton, traits: 'Diligent, dependable, strong', luckyNumbers: [1, 4], color: 'yellow' },
  { name: 'Tiger', nameThai: 'ปีขาล (เสือ)', image: tigerGif, buttonImage: tigerButton, traits: 'Brave, confident, competitive', luckyNumbers: [1, 3, 4], color: 'orange' },
  { name: 'Rabbit', nameThai: 'ปีเถาะ (กระต่าย)', image: rabbitGif, buttonImage: rabbitButton, traits: 'Quiet, elegant, kind', luckyNumbers: [3, 4, 6], color: 'pink' },
  { name: 'Dragon', nameThai: 'ปีมะโรง (มังกร)', image: dragonGif, buttonImage: dragonButton, traits: 'Confident, intelligent, enthusiastic', luckyNumbers: [1, 6, 7], color: 'red' },
  { name: 'Snake', nameThai: 'ปีมะเส็ง (งู)', image: snakeGif, buttonImage: snakeButton, traits: 'Enigmatic, wise, graceful', luckyNumbers: [2, 8, 9], color: 'green' },
  { name: 'Horse', nameThai: 'ปีมะเมีย (ม้า)', image: horseGif, buttonImage: horseButton, traits: 'Animated, active, energetic', luckyNumbers: [2, 3, 7], color: 'purple' },
  { name: 'Goat', nameThai: 'ปีมะแม (แพะ)', image: goatGif, buttonImage: goatButton, traits: 'Calm, gentle, sympathetic', luckyNumbers: [3, 4, 9], color: 'green' },
  { name: 'Monkey', nameThai: 'ปีวอก (ลิง)', image: monkeyGif, buttonImage: monkeyButton, traits: 'Sharp, smart, curious', luckyNumbers: [1, 7, 8], color: 'yellow' },
  { name: 'Rooster', nameThai: 'ปีระกา (ไก่)', image: roosterGif, buttonImage: roosterButton, traits: 'Observant, hardworking, courageous', luckyNumbers: [5, 7, 8], color: 'red' },
  { name: 'Dog', nameThai: 'ปีจอ (สุนัข)', image: dogGif, buttonImage: dogButton, traits: 'Lovely, honest, prudent', luckyNumbers: [3, 4, 9], color: 'brown' },
  { name: 'Pig', nameThai: 'ปีกุน (หมู)', image: pigGif, buttonImage: pigButton, traits: 'Compassionate, generous, diligent', luckyNumbers: [2, 5, 8], color: 'pink' }
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
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleZodiacSelect = (zodiac) => {
    setSelectedZodiac(zodiac)
    setCurrentPage('card')
    setFortune(null)
    setLuckyNumber(null)
    const imgUrl = cardImages[zodiac.name]
    setCardImageUrl(imgUrl)
    
    const img = new Image()
    img.src = imgUrl
    if (img.complete && img.naturalHeight !== 0) {
      setImageLoaded(true)
      setImageLoading(false)
    } else {
      setImageLoaded(false)
      setImageLoading(true)
    }
  }

  const goToSelection = () => {
    setCurrentPage('selection')
    setSelectedZodiac(null)
    setImageLoaded(true)
    setImageLoading(false)
  }

  const goToLanding = () => {
    setCurrentPage('landing')
    setSelectedZodiac(null)
    
    const img = new Image()
    img.src = zodiacWheel
    if (img.complete && img.naturalHeight !== 0) {
      setImageLoaded(true)
      setImageLoading(false)
    } else {
      setImageLoaded(false)
      setImageLoading(true)
    }
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
    const preloadImages = [
      zodiacWheel, 
      bgImage,
      ratGif, oxGif, tigerGif, rabbitGif, dragonGif, snakeGif,
      horseGif, goatGif, monkeyGif, roosterGif, dogGif, pigGif,
      ratButton, oxButton, tigerButton, rabbitButton, dragonButton, snakeButton,
      horseButton, goatButton, monkeyButton, roosterButton, dogButton, pigButton
    ]
    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (currentPage === 'selection') {
      Object.values(cardImages).forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }
  }, [currentPage])

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8 px-16 relative">
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
          <div className="flex justify-center mb-6 w-full px-4 relative">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[78vh] bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-[2.5rem] shadow-2xl animate-pulse"></div>
              </div>
            )}
            <img 
              src={zodiacWheel} 
              alt="Chinese Zodiac Wheel" 
              className={`w-full h-auto max-h-[78vh] object-contain rounded-[2.5rem] shadow-2xl transition-all duration-700 ${imageLoading ? 'opacity-0 blur-lg scale-95' : 'opacity-100 blur-0 scale-100'}`}
              loading="eager"
              decoding="async"
              fetchpriority="high"
              onLoad={() => {
                setImageLoaded(true)
                setImageLoading(false)
              }}
            />
          </div>
          <div className={`flex justify-center w-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={goToSelection}
              className="px-20 py-10 rounded-full font-bold text-5xl text-white bg-gradient-to-r from-yellow-500 via-red-600 to-orange-600 hover:from-yellow-600 hover:via-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-yellow-400 animate-pulse"
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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8 px-16 relative">
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 p-3 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-300 transform hover:scale-110 shadow-xl z-10"
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
          <div className="flex justify-center mb-6 w-full px-4 relative">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[78vh] bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-[2.5rem] shadow-2xl"></div>
              </div>
            )}
            <img 
              src={cardImageUrl} 
              alt={selectedZodiac.name} 
              className={`w-full h-auto max-h-[78vh] object-contain rounded-[2.5rem] shadow-2xl transition-opacity duration-200 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              loading="eager"
              decoding="sync"
              fetchpriority="high"
              onLoad={() => {
                setImageLoaded(true)
                setImageLoading(false)
              }}
            />
          </div>
          <div className={`flex justify-center w-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={goToLanding}
              className="px-20 py-10 rounded-full font-bold text-4xl text-white bg-gradient-to-r from-yellow-500 via-red-600 to-orange-600 hover:from-yellow-600 hover:via-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-yellow-400"
            >
              ✨ Back to Home ✨
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
        className="absolute top-4 right-4 p-3 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-300 transform hover:scale-110 shadow-xl z-20"
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

      <div className="w-full max-w-[1200px] relative z-10 py-8">
        <div className="grid grid-cols-3 gap-8 px-8">
          {zodiacAnimals.map((zodiac) => (
            <button
              key={zodiac.name}
              onClick={() => handleZodiacSelect(zodiac)}
              className="group flex flex-col items-center transition-all duration-200 transform hover:scale-105 cursor-pointer"
            >
              <div className="relative mb-3 w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-200 rounded-2xl opacity-90 group-hover:opacity-100 transition-all duration-300 shadow-xl group-hover:shadow-amber-400/60 rotate-2 group-hover:rotate-3"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-white to-white rounded-2xl shadow-lg"></div>
                <img 
                  src={zodiac.image} 
                  alt={zodiac.name} 
                  className="relative z-10 w-20 h-20 object-contain group-hover:brightness-110 transition-opacity duration-200"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <img 
                src={zodiac.buttonImage} 
                alt={`${zodiac.name} - ${zodiac.nameThai}`} 
                className="w-full max-w-[180px] h-auto object-contain rounded-3xl border-4 border-yellow-400 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                loading="eager"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
