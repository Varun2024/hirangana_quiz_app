/* eslint-disable no-unused-vars */
import { use, useEffect, useState } from 'react'

import './App.css'

function App() {
  const hiragana = [
    { romanji: 'a', hiragana: 'あ' },
    { romanji: 'i', hiragana: 'い' },
    { romanji: 'u', hiragana: 'う' },
    { romanji: 'e', hiragana: 'え' },
    { romanji: 'o', hiragana: 'お' },
    { romanji: 'ka', hiragana: 'か' },
    { romanji: 'ki', hiragana: 'き' },
    { romanji: 'ku', hiragana: 'く' },
    { romanji: 'ke', hiragana: 'け' },
    { romanji: 'ko', hiragana: 'こ' },
    { romanji: 'sa', hiragana: 'さ' },
    { romanji: 'shi', hiragana: 'し' },
    { romanji: 'su', hiragana: 'す' },
    { romanji: 'se', hiragana: 'せ' },
    { romanji: 'so', hiragana: 'そ' },
    { romanji: 'ta', hiragana: 'た' },
    { romanji: 'chi', hiragana: 'ち' },
    { romanji: 'tsu', hiragana: 'つ' },
    { romanji: 'te', hiragana: 'て' },
    { romanji: 'to', hiragana: 'と' },
    { romanji: 'na', hiragana: 'な' },
    { romanji: 'ni', hiragana: 'に' },
    { romanji: 'nu', hiragana: 'ぬ' },
    { romanji: 'ne', hiragana: 'ね' },
    { romanji: 'no', hiragana: 'の' },
    { romanji: 'ha', hiragana: 'は' },
    { romanji: 'hi', hiragana: 'ひ' },
    { romanji: 'fu', hiragana: 'ふ' },
    { romanji: 'he', hiragana: 'へ' },
    { romanji: 'ho', hiragana: 'ほ' },
    { romanji: 'ma', hiragana: 'ま' },
    { romanji: 'mi', hiragana: 'み' },
    { romanji: 'mu', hiragana: 'む' },
    { romanji: 'me', hiragana: 'め' },
    { romanji: 'mo', hiragana: 'も' },
    { romanji: 'ya', hiragana: 'や' },
    { romanji: 'yu', hiragana: 'ゆ' },
    { romanji: 'yo', hiragana: 'よ' },
    { romanji: 'ra', hiragana: 'ら' },
    { romanji: 'ri', hiragana: 'り' },
    { romanji: 'ru', hiragana: 'る' },
    { romanji: 're', hiragana: 'れ' },
    { romanji: 'ro', hiragana: 'ろ' },
    { romanji: 'wa', hiragana: 'わ' },
    { romanji: 'wo', hiragana: 'を' },
    { romanji: 'n', hiragana: 'ん' }
  ]

  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [error, setError] = useState(false)

  const setRandomHirigana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length)
    console.log()
    setCurrent(randomIndex)
  }


  const handleChange = evt => {
    setInput(evt.target.value)

  }

  const handleSubmit = evt => {
    evt.preventDefault()

    if (input.toLowerCase() === hiragana[current].romanji) {
      setStreak(streak + 1)
      setMaxStreak(Math.max(maxStreak, streak + 1))
      setError(false)

      localStorage.setItem("maxStreak", Math.max(maxStreak, streak))
      localStorage.setItem("streak", streak + 1)
    } else {
      setStreak(0)
      setError(`wrong!! current ans would be ${hiragana[current].hiragana} for ${hiragana[current].romanji}`)

      localStorage.setItem("streak", 0)
    }

    setInput('')
    setRandomHirigana()

  }
  useEffect(() => {
    setRandomHirigana()
    // localestorage stores as string it will concat it not parsed into int
    setStreak(parseInt(localStorage.getItem('streak')) || 0)
    setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
  }, [])
  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <header className='p-6 m-8'>
        <h1 className='text-2xl font-bold uppercase'>HiraganaQuiz</h1>
        <div className="">
          <p>{streak} / {maxStreak}</p>
        </div>
      </header>

      <div className="text-9xl font-bold mb-8">
        {hiragana[current].hiragana}
      </div>
      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <input type="text"
            value={input}
            onChange={handleChange}
            className=' w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-white outline-none text-center text-6xl'
          />
        </form>
      </div>

      {error && <p className='text-red-500 text-center'>{error}</p>}
    </div>
  )
}

export default App
