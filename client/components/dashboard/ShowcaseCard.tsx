import React from "react";

export interface ShowcaseCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ShowcaseCard({ title, children, className = "" }: ShowcaseCardProps) {
  return (
    <div className={`bg-card p-5 sm:p-6 border border-border rounded-xl shadow-lg ${className}`}>
      <h2 className="text-xl font-semibold mb-4 text-card-foreground">
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
} 