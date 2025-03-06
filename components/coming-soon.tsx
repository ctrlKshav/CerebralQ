import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Wrench } from 'lucide-react'
import Link from 'next/link'

export default function ComingSoon() {
  return (
    <div className="min-h-screen animate-gradient-slow py-8 px-4 sm:px-8 md:px-16 flex items-center justify-center">
      <Card className="w-full max-w-2xl border-none bg-background/60 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <Wrench className="w-24 h-24 mx-auto mb-6 text-primary animate-pulse" />
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground drop-shadow-glow-primary">
            Work in Progress
          </h1>
        </CardHeader>
        <CardContent className="text-center pb-6">
          <p className="text-xl text-foreground">
            Our team is actively working on this page. We're putting the final touches to ensure the best experience for you. Check back soon!
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <Button size="lg" className="w-full">
              Return to Home
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full">
              Share Feedback With Us
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}