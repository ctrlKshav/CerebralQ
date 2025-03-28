import { Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EmptyState() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 space-y-4 text-center">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            <Brain className="w-12 h-12 absolute inset-0 m-auto text-primary" />
          </div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Begin Your Journey
          </h2>
          <p className="text-muted-foreground">
            Take your first MBTI personality test to unlock insights about yourself.
          </p>
          <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg px-4 py-2 font-medium hover:opacity-90 transition-opacity">
            Take the Test
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
