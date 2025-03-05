import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function PrivacyPolicy() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Privacy Policy</CardTitle>
        <p className="text-sm text-muted-foreground text-center">Effective Date: 05/03/2025</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <p>
          Welcome to <strong>Cerebral Quotient</strong>. Your privacy is
          important to us, and this Privacy Policy explains how we collect, use, and protect your
          personal information.
        </p>

        <div>
          <h3 className="text-lg font-semibold">1. Information We Collect</h3>
          <p>When you use <strong>Cerebral Quotient</strong>, we may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Username</strong> – Required to create and identify your account.</li>
            <li><strong>Email Address</strong> – Used for account verification, communication, and updates.</li>
            <li><strong>MBTI Questionnaire Responses</strong> – Used to analyze and provide personality insights.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">2. How We Use Your Information</h3>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To create and manage user accounts.</li>
            <li>To analyze questionnaire responses and generate personality insights.</li>
            <li>To send important updates, notifications, or promotional content (you can opt out anytime).</li>
            <li>To improve website functionality and user experience.</li>
            <li>To comply with legal obligations and prevent fraud.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">3. Data Protection & Security</h3>
          <p>
            We take appropriate security measures to protect your information from unauthorized access,
            alteration, or disclosure. However, no online transmission or storage system is 100% secure.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">4. Sharing of Information</h3>
          <p>
            We do <strong>not</strong> sell or rent your personal information. We may share data only:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>With trusted service providers who assist us in website operations (under strict confidentiality agreements).</li>
            <li>If required by law or to protect our rights and users.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">5. Your Rights & Choices</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, update, or delete your personal data.</li>
            <li>Opt out of promotional emails.</li>
            <li>Request a copy of the data we store about you.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">6. Changes to This Privacy Policy</h3>
          <p>
            We may update this policy from time to time. Any changes will be posted on this page
            with an updated "Effective Date."
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <strong>support@cerebralquotient.com</strong>.
          </p>
        </div>

        <Separator />
        
        <p className="text-sm text-center">
          By using <strong>Cerebral Quotient</strong>, you agree to the terms outlined in this Privacy Policy.
        </p>
      </CardContent>
    </Card>
  );
}
