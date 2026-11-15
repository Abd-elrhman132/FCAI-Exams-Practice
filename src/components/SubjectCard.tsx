import { SubjectSummary } from "@/types";
import LucideIcon from "./LucideIcon";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  subject: SubjectSummary;
  isLoading?: boolean;
  onStart: (subjectId: string) => void;
}

const SubjectCard = ({ subject, isLoading = false, onStart }: SubjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-card p-6 sm:p-7 transition-all duration-300",
        "hover:shadow-2xl hover:-translate-y-1.5"
      )}
      style={{
        borderColor: `${subject.color}35`,
      }}
    >
      {/* Top Colorful Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${subject.color} 50%, transparent 95%)`,
        }}
      />

      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[70px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: subject.color }}
      />

      {/* Main Content */}
      <div>
        {/* Top Meta Row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shrink-0"
            style={{
              background: `linear-gradient(135deg, ${subject.color}28, ${subject.color}10)`,
              color: subject.color,
              border: `1px solid ${subject.color}40`,
              boxShadow: `0 10px 25px -5px ${subject.color}35`,
            }}
          >
            <LucideIcon name={subject.icon} size={28} strokeWidth={2.2} />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span
              className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg"
              style={{
                backgroundColor: `${subject.color}18`,
                color: subject.color,
                border: `1px solid ${subject.color}35`,
              }}
            >
              {subject.id}
            </span>
            <span className="font-mono text-xs font-bold text-muted-foreground tabular-nums">
              {subject.questionCount} Questions
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-extrabold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
          {subject.name}
        </h3>

        {/* Professor Badge */}
        {subject.professor && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/60 border border-border/60 mb-4 text-xs font-medium text-foreground/85">
            <LucideIcon name="GraduationCap" size={13} className="text-muted-foreground" />
            <span>{subject.professor}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {subject.description}
        </p>

        {/* Lectures pill tag */}
        {subject.chapterCount > 0 && (
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: `${subject.color}18`,
                color: subject.color,
              }}
            >
              {subject.chapterCount} Lectures Included
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              Easy • Medium • Hard
            </span>
          </div>
        )}
      </div>

      {/* Card Bottom / Action Row */}
      <div className="flex items-center justify-between pt-5 border-t border-border/60 mt-auto">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <LucideIcon name="ListChecks" size={14} style={{ color: subject.color }} />
          <span>Practice & Exam Modes</span>
        </div>

        <button
          type="button"
          onClick={() => onStart(subject.id)}
          disabled={isLoading}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:gap-3 active:scale-95 cursor-pointer"
          style={{
            backgroundColor: subject.color,
            boxShadow: `0 10px 25px -6px ${subject.color}60`,
          }}
        >
          {isLoading ? (
            <>
              <LucideIcon name="RefreshCcw" size={14} className="animate-spin" />
              <span>Loading</span>
            </>
          ) : (
            <>
              <span>Practice</span>
              <LucideIcon name="ArrowRight" size={14} strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
