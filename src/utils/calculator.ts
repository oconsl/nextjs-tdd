const validOperations = ['+', '-', '*', '/', '**']
const OPERATION_FN = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
  '**': (a: number, b: number) => a ** b,
}

function calculator (number1: number, number2: number, operation = '+') {
  if (!validOperations.includes(operation)) throw new Error('Invalid Operation')

  if (operation === '/' && number2 === 0) throw new Error('Syntax Error')

  const operationFn = OPERATION_FN[operation as keyof typeof OPERATION_FN]
  return operationFn(number1, number2)
}

export default calculator