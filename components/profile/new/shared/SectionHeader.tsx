import { MBTIResult } from "@/types/profileTypes";
import { Calendar } from "lucide-react";
import React from "react";

export default function SectionHeader({
  title,
  description,
  updatedAt,
}: {
  title: string;
  description: string;
  updatedAt: string;
}) {
  return (
    <div className="flex items-center pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
      <div className="flex-shrink-0 w-1.5 h-10 bg-emerald-500 rounded-full mr-4"></div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <div className="flex items-center text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{updatedAt}</span>
        </div>
      </div>
    </div>
  );
}
