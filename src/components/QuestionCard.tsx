import { Question, ExamAnswer } from "@/types";
import { cn } from "@/lib/utils";
import LucideIcon from "./LucideIcon";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: ExamAnswer;
  onSelect: (index: number) => void;
  questionNumber: number;
  totalQuestions: number;
  isFlagged: boolean;
  onToggleFlag: () => void;
  color: string;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelect,
  questionNumber,
  totalQuestions,
  isFlagged,
  onToggleFlag,
  color,
}: QuestionCardProps) => {
  const labels = ["A", "B", "C", "D"];

  return (
    <div className="animate-fade-in space-y-6 sm:space-y-10">
      <div className="space-y-4 sm:space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          <span 
            className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-black/20"
            style={{ backgroundColor: color, color: "#fff" }}
          >
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="h-px flex-1 bg-white/5" />
          <button
            type="button"
            onClick={onToggleFlag}
            className={cn(
              "btn-hover-base btn-hover-soft inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition",
              isFlagged
                ? "border-transparent text-foreground shadow-lg"
                : "border-white/10 text-muted-foreground hover:bg-white/5 hover:text-foreground"
            )}
            style={
              isFlagged
                ? {
                    backgroundColor: `${color}18`,
                    color,
                    boxShadow: `0 12px 26px -18px ${color}`,
                  }
                : undefined
            }
            aria-pressed={isFlagged}
          >
            <LucideIcon name={isFlagged ? "BookmarkCheck" : "Bookmark"} size={14} />
            Review later
          </button>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-[1.2] tracking-tight">
          {question.text}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {question.options.map((opt, i) => {
          const isSelected = selectedAnswer === i;
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={cn(
                "btn-hover-base btn-hover-soft group relative flex w-full items-center gap-4 sm:gap-6 rounded-[1.25rem] sm:rounded-[1.5rem] border-2 p-4 sm:p-6 text-left transition-all duration-500",
                isSelected
                  ? "scale-[1.02]"
                  : "border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              )}
              style={
                isSelected
                  ? { 
                      borderColor: `${color}80`, 
                      backgroundColor: `${color}15`, 
                      boxShadow: `0 20px 40px -15px ${color}30` 
                    }
                  : undefined
              }
              aria-pressed={isSelected}
            >
              <span
                className={cn(
                  "flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-500",
                  isSelected ? "scale-110 shadow-2xl rotate-3" : "bg-white/5 text-muted-foreground group-hover:text-foreground group-hover:scale-105"
                )}
                style={isSelected ? { backgroundColor: color, color: "#fff" } : undefined}
              >
                {labels[i]}
              </span>
              <span className={cn(
                "text-sm sm:text-base md:text-lg font-bold transition-all duration-500 flex-1 leading-snug",
                isSelected ? "text-foreground translate-x-1" : "text-foreground/60 group-hover:text-foreground group-hover:translate-x-1"
              )}>
                {opt}
              </span>
              
              {isSelected && (
                <div 
                  className="absolute right-0 top-0 h-full w-1.5 opacity-100"
                  style={{ backgroundColor: color }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
