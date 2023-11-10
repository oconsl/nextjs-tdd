import Calculator from '@/components/calculator'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

const mockCalculatorFn = vi.fn()

//! RECUERDEN COMPLETAR LOS TEST FALTANTES

describe('Calculator Component', () => {
  describe('Render elements', () => {
    it('should render', () => {
      render(<Calculator calculator={mockCalculatorFn}/>)
    })
  
    it('should render a title', () => {
      render(<Calculator calculator={mockCalculatorFn}/>) //* ARRANGE
  
      const heading = screen.getByRole('heading', {
        name: /calculator/i
      }) //* ACT
  
      expect(heading).toBeInTheDocument() //* ASSERT
    })
  
    it('should render two inputs', () => {
      render(<Calculator calculator={mockCalculatorFn}/>)

      const inputs = screen.getAllByTestId('number-input')

      expect(inputs.length).toBe(2)
    })

    it('should return two inputs with attribute type="number"', () => {
      render(<Calculator calculator={mockCalculatorFn}/>)

      const inputs = screen.getAllByTestId('number-input')

      expect(inputs[0]).toHaveAttribute('type', 'number')
      expect(inputs[1]).toHaveAttribute('type', 'number')
    })

    it('should return two inputs with value="0"', () => {
      render(<Calculator calculator={mockCalculatorFn}/>)

      const inputs = screen.getAllByTestId('number-input')

      const input1 = inputs[0]
      const input2 = inputs[1]
      expect(input1).toHaveValue(0)
      expect(input2).toHaveValue(0)
    })

    it('should render five buttons', () => {
      render(<Calculator calculator={mockCalculatorFn}/>)

      const buttons = screen.getAllByRole('button')

      expect(buttons.length).toBe(5)
    })

    it('should render a button with "+"', () => {
      render(<Calculator calculator={mockCalculatorFn}/>)

      const button = screen.getByRole('button', {
        name: '+'
      })

      expect(button).toBeInTheDocument()
    })
  })

  describe('Behavior component', () => {
    it('should call calculator fn if a button is pressed', async () => {
      const user = userEvent.setup()
      render(<Calculator calculator={mockCalculatorFn}/>)

      const button = screen.getByRole('button', {
        name: '+'
      })
      await user.click(button)

      expect(mockCalculatorFn).toHaveBeenCalled()
    })

    it('should return the sum of two numbers', async () => {
      const user = userEvent.setup()
      const NUMBER1 = 5
      const NUMBER2 = 3
      const mockCalculatorResult = vi.fn().mockImplementationOnce(() => NUMBER1 + NUMBER2)
      render(<Calculator calculator={mockCalculatorResult}/>)

      const button = screen.getByRole('button', {
        name: '+'
      })
      const inputs = screen.getAllByTestId('number-input')
      await user.type(inputs[0], String(NUMBER1))
      await user.type(inputs[1], String(NUMBER2))
      await user.click(button)

      const result = screen.getByTestId('operation-result')

      expect(result).toBeInTheDocument()
      expect(result).toHaveTextContent("8")
    })
  })
})