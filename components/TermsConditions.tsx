import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function TermsConditions() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Terms & Conditions</CardTitle>
        <p className="text-sm text-muted-foreground text-center">Effective Date: 05/03/2025</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <p>
          Welcome to <strong>Cerebral Quotient</strong>! By accessing and using our website,
          you agree to comply with the following Terms & Conditions ("T&C"). If you do not agree,
          please refrain from using our services.
        </p>

        <div>
          <h3 className="text-lg font-semibold">1. Use of Our Services</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>You must be at least 13 years old to use <strong>Cerebral Quotient</strong>.</li>
            <li>You agree to provide accurate and truthful information when registering an account.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">2. Intellectual Property</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>All content, including test results, website design, and analysis tools, are owned by <strong>Cerebral Quotient</strong>.</li>
            <li>You may not copy, modify, or distribute our content without prior written permission.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">3. User Conduct</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>You agree not to engage in any activities that may harm or disrupt our website.</li>
            <li>Any misuse, hacking attempts, or unauthorized access will lead to account termination.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">4. Disclaimer & Limitation of Liability</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Our personality insights are for informational purposes only and should not be considered professional advice.</li>
            <li>We do not guarantee the accuracy or effectiveness of any test results.</li>
            <li>We are not liable for any damages arising from your use of <strong>Cerebral Quotient</strong>.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">5. Account Termination</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>We reserve the right to suspend or terminate accounts that violate our policies.</li>
            <li>Users can request account deletion by contacting <strong>support@cerebralquotient.com</strong>.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">6. Changes to Terms & Conditions</h3>
          <p>
            We may update these T&C at any time. Continued use of our services constitutes
            acceptance of any modifications.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">7. Contact Us</h3>
          <p>
            For any questions regarding these Terms & Conditions, contact us at{" "}
            <strong>support@cerebralquotient.com</strong>.
          </p>
        </div>

        <Separator />
        
        <p className="text-sm text-center">
          By using <strong>Cerebral Quotient</strong>, you agree to abide by these Terms & Conditions.
        </p>
      </CardContent>
    </Card>
  );
}
