
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

export function SkillCard({ icon, title, className }: SkillCardProps) {
  return (
    <div className={cn("skill-card hover-scale", className)}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-portfolio-primary">{icon}</div>
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
    </div>
  );
}
