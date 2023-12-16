import { useState } from 'react'

import './LimitedTextInput.css'

export default function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue, setInputValue] = useState('')

  const charsLeft = characterLimit - inputValue.length

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (charsLeft < 0) {
      alert('The input exceeds the character limit. Please shorten your text.')
    } else {
      alert('Thanks for your submission')
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='limited-text-input'>Limited Text Input:</label>
        <span className={`${charsLeft >= 0 ? 'no-error' : 'error'}`}>
          Characters remaining: {charsLeft}
        </span>
      </div>
      <input
        type='text'
        placeholder='Enter some text'
        id='limited-text-input'
        value={inputValue}
        onChange={handleChange}
      />

      <button type='submit' className='primary'>
        Submit
      </button>
    </form>
  )
}
