import OceanTest from '@/components/start-test/tests/ocean'
import { ipip300 } from '@/data/tests/ocean/questions/ipip300'
import React from 'react'

export default function TakeTestpage() {
  return (
    <div>
      <OceanTest oceanTestQuestionsData={ipip300}/>
    </div>
  )
} 