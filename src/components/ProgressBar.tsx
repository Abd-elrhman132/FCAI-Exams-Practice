import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  color: string;
}

const ProgressBar = ({ current, total, color }: ProgressBarProps) => {
  const pct = ((current + 1) / total) * 100;

  return (
    <div className="w-full group">
      <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-bold transition-colors group-hover:text-foreground/60">
        <span>
          Task {current + 1} <span className="opacity-40 mx-1">/</span> {total}
        </span>
        <span className="font-black tabular-nums">{Math.round(pct)}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
        <div
          className="h-full rounded-full transition-all duration-700 ease-in-out shadow-lg"
          style={{ 
            width: `${pct}%`, 
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}40`
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
