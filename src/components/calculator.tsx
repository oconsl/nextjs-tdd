"use client"

import React, { useState } from 'react'

type Props = {
  calculator: (a: number, b: number, operation?: string) => number
}

export default function Calculator ({ calculator }: Props) {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [result, setResult] = useState<number | string>(0)

  const handleChangeN1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setN1(Number(event.target.value))
  }
  
  const handleChangeN2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setN2(Number(event.target.value))
  }

  //* CURRYING FUNCTION
  const handleClick = (operation: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setResult(() => calculator(n1, n2, operation))
  }

  return (
    <>
      <h1>Calculator 🧮</h1>
      <label>
        number 1
        <input data-testid="number-input"  type="number" value={n1} onChange={handleChangeN1}/>
      </label>
      <label>
        number 2
        <input data-testid="number-input" type="number" value={n2} onChange={handleChangeN2}/>
      </label>
      <button onClick={handleClick('+')}>+</button>
      <button onClick={handleClick('-')}>-</button>
      <button onClick={handleClick('*')}>*</button>
      <button onClick={handleClick('/')}>/</button>
      <button onClick={handleClick('**')}>**</button>
      <p
        data-testid="operation-result"
      >
        {result}
      </p>
    </>
  )
}