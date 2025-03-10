"use client";

import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Users, Calendar } from "lucide-react";

interface AccountDetailsProps {
  email: string;
  memberSince: string;
  connectedFriends: number;
  isVerified: boolean;
}

export function AccountDetails({ email, memberSince, connectedFriends, isVerified }: AccountDetailsProps) {
  return (
    <div className="bg-card/80 dark:bg-card/30 rounded-xl p-6 backdrop-blur-sm border border-border shadow-sm">
      <h2 className="text-xl font-semibold text-foreground mb-6">Account Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>Email Address</span>
          </div>
          <p className="text-foreground font-medium">{email}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Member Since</span>
          </div>
          <p className="text-foreground font-medium">
            {new Date(memberSince).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Connected Friends</span>
          </div>
          <p className="text-foreground font-medium">{connectedFriends}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Account Status</span>
          </div>
          {isVerified ? (
            <Badge variant="outline" className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
              Verified Account
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800">
              Pending Verification
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}