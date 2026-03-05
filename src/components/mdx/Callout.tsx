"use client";

import { AlertTriangle, Info, CheckCircle, Zap } from "lucide-react";

const CALLOUT_STYLES = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-info-blue",
    icon: Info,
    title: "Info",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber",
    icon: AlertTriangle,
    title: "Perhatian",
  },
  success: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-ev-green",
    icon: CheckCircle,
    title: "Tips",
  },
  lexi: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-yamaha-blue",
    icon: Zap,
    title: "Lexi LX 155",
  },
};

interface CalloutProps {
  type?: keyof typeof CALLOUT_STYLES;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = CALLOUT_STYLES[type];
  const Icon = style.icon;

  return (
    <div
      className={`${style.bg} border-l-4 ${style.border} rounded-r-lg p-4 my-4`}
    >
      <div className="flex items-center gap-2 font-semibold mb-1">
        <Icon size={18} />
        {title || style.title}
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
