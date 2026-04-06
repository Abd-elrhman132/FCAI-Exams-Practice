import LucideIcon from "./LucideIcon";
import { cn } from "@/lib/utils";

interface TimerProps {
  formattedTime: string;
  secondsLeft: number;
  isRunning: boolean;
}

const Timer = ({ formattedTime, secondsLeft, isRunning }: TimerProps) => {
  if (!isRunning && secondsLeft <= 0) return null;
  const isLow = secondsLeft <= 120;

  return (
    <div
      className={cn(
        "flex items-center gap-2 font-body font-bold text-lg tabular-nums px-4 py-2 rounded-xl transition-all duration-500",
        isLow 
          ? "bg-danger/10 text-danger border border-danger/20 animate-pulse" 
          : "bg-white/5 text-foreground border border-white/10"
      )}
      aria-label={`Time remaining: ${formattedTime}`}
    >
      <LucideIcon name="Timer" size={18} className={cn(isLow ? "text-danger" : "text-primary")} />
      {formattedTime}
    </div>
  );
};

export default Timer;
