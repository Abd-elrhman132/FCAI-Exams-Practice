import { Question, ExamAnswer } from "@/types";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: ExamAnswer;
  onSelect: (index: number) => void;
  color: string;
}

const QuestionCard = ({ question, selectedAnswer, onSelect, color }: QuestionCardProps) => {
  const labels = ["A", "B", "C", "D"];

  return (
    <div className="animate-fade-in space-y-10">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <span 
            className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-black/20"
            style={{ backgroundColor: color, color: "#fff" }}
          >
            Question Analysis
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground leading-[1.2] tracking-tight">
          {question.text}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((opt, i) => {
          const isSelected = selectedAnswer === i;
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={cn(
                "btn-hover-base btn-hover-soft group flex w-full items-center gap-6 rounded-[1.5rem] border-2 p-6 text-left transition-all duration-500",
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
                  "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-500",
                  isSelected ? "scale-110 shadow-2xl rotate-3" : "bg-white/5 text-muted-foreground group-hover:text-foreground group-hover:scale-105"
                )}
                style={isSelected ? { backgroundColor: color, color: "#fff" } : undefined}
              >
                {labels[i]}
              </span>
              <span className={cn(
                "text-base md:text-lg font-bold transition-all duration-500 flex-1 leading-snug",
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
