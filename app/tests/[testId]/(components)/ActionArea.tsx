"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookmarkIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ActionArea({ test }) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Implement save logic here
    setSaved(!saved);
  };

  return (
    <Card className="mb-8 sticky top-4">
      <CardHeader>
        <CardTitle>Take the Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href={`/tests/${test.id}/start-test`}>
          <Button className="w-full" size="lg">
            Begin Test
          </Button>
        </Link>
        {test.is_premium && (
          <p className="text-sm text-muted-foreground">
            This is a premium test. Unlock for full access.
          </p>
        )}
        <Button variant="outline" className="w-full" onClick={handleSave}>
          <BookmarkIcon className="mr-2 h-4 w-4" />
          {saved ? "Saved" : "Save for Later"}
        </Button>
      </CardContent>
    </Card>
  );
}
