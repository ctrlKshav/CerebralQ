import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsConditions } from "./TermsConditions";

export function LegalDocuments() {
  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="privacy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
        </TabsList>
        <TabsContent value="privacy">
          <PrivacyPolicy />
        </TabsContent>
        <TabsContent value="terms">
          <TermsConditions />
        </TabsContent>
      </Tabs>
    </div>
  );
}
