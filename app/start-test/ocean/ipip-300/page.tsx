import OceanTest from '@/components/start-test/ocean'
import { oceanTestQuestionsData } from '@/data/tests/ocean/questions/ipip300'
import React from 'react'

export default function TakeTestpage() {
  return (
    <div>
      <OceanTest oceanTestQuestionsData={oceanTestQuestionsData}/>
    </div>
  )
} 