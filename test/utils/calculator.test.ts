import { describe, it, expect } from 'vitest'
import calculator from '@/utils/calculator'

//* RGR => Red | Green | Refactor

describe('Calculator function', () => {
  it('should be a function', () => {
    expect(typeof calculator).toBe('function')
  })

  it('should return a number if called with two params', () => {
    const result = calculator(1, 2, '+')
    expect(typeof result).toBe('number')
  })

  it('should return the sum of two numbers', () => {
    const result = calculator(1, 2, '+')
    expect(result).toBe(3)
  })

  it('should return the substract of two numbers', () => {
    const result = calculator(5, 2, '-')
    expect(result).toBe(3)
  })

  it('should return the multiply of two number', () => {
    const result = calculator(3, 5, '*')
    expect(result).toBe(15)
  })

  it('should return the division of two number', () => {
    const result = calculator(10, 2, '/')
    expect(result).toBe(5)
  })

  it('should throw an error if number2 is zero and operation is "/"', () => {
    expect(() => calculator(10, 0, '/')).toThrowError()
  })

  it('should throw an error if operation is not valid', () => {
    expect(() => calculator(1, 2, 'hola')).toThrowError()
  })

  it('should sum two by default if operation is undefined', () => {
    const result = calculator(3, 7)
    expect(result).toBe(10)
  })

  it('should return the power of number1 to number2', () => {
    const result = calculator(10, 2, '**')
    expect(result).toBe(100)
  })
})