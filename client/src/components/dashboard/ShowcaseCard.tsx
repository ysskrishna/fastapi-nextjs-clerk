import React from "react";

export interface ShowcaseCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ShowcaseCard({ title, children, className = "" }: ShowcaseCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800/50 p-5 sm:p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg ${className}`}>
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
} 