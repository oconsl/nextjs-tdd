"use client"

import Calculator from '@/components/calculator'
import calculator from '@/utils/calculator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calculator calculator={calculator}/>
    </main>
  )
}
