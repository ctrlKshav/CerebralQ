"use client";

import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Users, Calendar } from "lucide-react";
import { format } from "date-fns";

interface AccountDetailsProps {
  email: string;
  memberSince: string;
  connectedFriends: number;
  isVerified: boolean;
}

export function AccountDetails({ email, memberSince, connectedFriends, isVerified }: AccountDetailsProps) {
  return (
    <div className="bg-slate-900/30 rounded-xl p-6 backdrop-blur-sm border border-slate-800/50">
      <h2 className="text-xl font-semibold text-slate-100 mb-6">Account Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Mail className="h-4 w-4" />
            <span>Email Address</span>
          </div>
          <p className="text-slate-200 font-medium">{email}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Calendar className="h-4 w-4" />
            <span>Member Since</span>
          </div>
          <p className="text-slate-200 font-medium">
            {format(new Date(memberSince), "MMMM yyyy")}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Users className="h-4 w-4" />
            <span>Connected Friends</span>
          </div>
          <p className="text-slate-200 font-medium">{connectedFriends}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Shield className="h-4 w-4" />
            <span>Account Status</span>
          </div>
          {isVerified ? (
            <Badge variant="default" className="bg-emerald-500/20 text-emerald-400">
              Verified Account
            </Badge>
          ) : (
            <Badge variant="default" className="bg-yellow-500/20 text-yellow-400">
              Pending Verification
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}