import { Loader2 } from 'lucide-react'
import React from 'react'

export default function LoadingSkeleton() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center'>
      <Loader2 className='h-10 w-10' />
    </div>
  )
}
