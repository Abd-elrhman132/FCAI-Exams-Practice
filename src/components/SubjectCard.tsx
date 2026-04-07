import { Subject } from "@/types";
import LucideIcon from "./LucideIcon";
import { cn } from "@/lib/utils";
import { getSubjectChapterCount, getSubjectQuestions } from "@/lib/subjectUtils";

interface SubjectCardProps {
  subject: Subject;
  onStart: (subject: Subject) => void;
}

const SubjectCard = ({ subject, onStart }: SubjectCardProps) => {
  const chapterCount = getSubjectChapterCount(subject);
  const questionCount = getSubjectQuestions(subject).length;

  return (
    <button
      type="button"
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card p-1 transition-all duration-500",
        "hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-primary/5",
        "active:scale-[0.98] cursor-pointer flex flex-col h-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
      onClick={() => onStart(subject)}
      aria-label={`Start practicing ${subject.name}`}
    >
      {/* Subject Color Accent Glow */}
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[80px] transition-all duration-700 group-hover:opacity-60 group-hover:scale-150"
        style={{ backgroundColor: subject.color, opacity: 0.1 }}
      />

      {/* Light Sweep Animation */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 scale-150" />
      </div>

      <div className="relative flex flex-col h-full rounded-[1.4rem] bg-card/80 backdrop-blur-xl p-7 border border-border/50 shadow-inner">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
          style={{
            backgroundColor: `${subject.color}15`,
            color: subject.color,
            boxShadow: `0 8px 20px -4px ${subject.color}30`,
          }}
        >
          <LucideIcon name={subject.icon} size={28} strokeWidth={2} />
        </div>

        <h3 className="font-heading text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
          {subject.name}
        </h3>

        {subject.professor && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 rounded-lg bg-secondary/50 border border-white/5 w-fit">
            <LucideIcon name="GraduationCap" size={14} className="text-muted-foreground" />
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
              {subject.professor}
            </p>
          </div>
        )}

        <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed font-medium line-clamp-3">
          {subject.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-black">
              Curriculum
            </span>
            <span className="text-sm font-black text-foreground/90 tabular-nums">
              {chapterCount > 0
                ? `${chapterCount} Chapters - ${questionCount} Questions`
                : `${questionCount} Questions`}
            </span>
          </div>

          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 group-hover:gap-4 shadow-xl active:scale-95"
            style={{
              backgroundColor: subject.color,
              color: "#fff",
              boxShadow: `0 10px 20px -5px ${subject.color}50`,
            }}
          >
            Practice
            <LucideIcon name="ArrowRight" size={14} strokeWidth={3} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default SubjectCard;
