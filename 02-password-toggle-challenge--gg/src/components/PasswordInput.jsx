import { useState } from 'react'

import './PasswordInput.css'

function PasswordInput({ minimum = 8 }) {
  const [inputValue, setInputValue] = useState('')
  const [isInputValueVisible, setVisible] = useState(false)

  const thresholdMet = inputValue.length >= minimum

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleToggleVisibility = () => {
    setVisible((prevState) => !prevState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (thresholdMet) {
      alert('Password submitted')
      setInputValue('')
    } else {
      alert('You need a longer password')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='limited-text-input'>Password:</label>
        <span className={thresholdMet ? 'no-error' : 'error'}>{inputValue.length}</span>
      </div>
      <div>
        <input
          placeholder='Enter a password'
          type={isInputValueVisible ? 'text' : 'password'}
          id='limited-text-input'
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <span onClick={handleToggleVisibility}>
        {isInputValueVisible ? 'hide password 🙈' : 'show password 🙊'}
      </span>
    </form>
  )
}

export default PasswordInput
