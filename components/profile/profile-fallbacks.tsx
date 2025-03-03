import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function UserNotFoundFallback({ username }: { username: string }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="p-8 text-center">
        <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center mb-6">
          <span className="text-4xl text-muted-foreground">?</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">User Not Found</h1>
        <p className="text-muted-foreground mb-6">
          We couldn't find a user with the username <strong>"{username}"</strong>.
          This user may not exist or might have changed their username.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tests">Explore Tests</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export function NoTestsFallback({ username }: { username: string }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Basic profile header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-primary">{username.charAt(0).toUpperCase()}</span>
          </div>
          <h1 className="text-3xl font-bold">{username}</h1>
        </div>
        
        {/* No tests message */}
        <Card className="p-8 text-center">
          <div className="w-20 h-20 bg-muted/50 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-medium mb-2">No Test Results Yet</h2>
          <p className="text-muted-foreground mb-6">
            {username} hasn't taken any personality tests yet. Check back later or take a test yourself!
          </p>
          <Button asChild>
            <Link href="/tests">Take a Personality Test</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}

export function IncompleteDataFallback({ username }: { username: string }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Basic profile header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-primary">{username.charAt(0).toUpperCase()}</span>
          </div>
          <h1 className="text-3xl font-bold">{username}</h1>
        </div>
        
        {/* Incomplete data message */}
        <Card className="p-8 text-center">
          <div className="w-20 h-20 bg-muted/50 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-medium mb-2">Incomplete Test Data</h2>
          <p className="text-muted-foreground mb-6">
            {username} has taken tests, but the data is incomplete. Some features of their profile may not be available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/tests">Take a Test</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
