import OceanTest from '@/components/start-test/tests/ocean'
import { bfi44 } from '@/data/tests/ocean/questions/bfi44'
import React from 'react'

export default function TakeTestpage() {
  return (
    <div>
      <OceanTest oceanTestQuestionsData={bfi44}/>
    </div>
  )
} 