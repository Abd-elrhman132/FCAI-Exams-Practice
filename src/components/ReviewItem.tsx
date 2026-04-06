import { Question, ExamAnswer } from "@/types";
import LucideIcon from "./LucideIcon";
import { cn } from "@/lib/utils";

interface ReviewItemProps {
  question: Question;
  answer: ExamAnswer;
  index: number;
}

const ReviewItem = ({ question, answer, index }: ReviewItemProps) => {
  const labels = ["A", "B", "C", "D"];
  const isCorrect = answer === question.correctIndex;
  const isSkipped = answer === null;

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 animate-fade-in relative overflow-hidden">
      {/* status accent */}
      <div 
        className="absolute top-0 left-0 w-1.5 h-full opacity-50"
        style={{ 
          backgroundColor: isSkipped ? "#6B7280" : isCorrect ? "#10B981" : "#EF4444" 
        }}
      />

      <div className="flex items-start gap-4 mb-6">
        <span
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shadow-lg shadow-black/20",
            isSkipped
              ? "bg-secondary text-muted-foreground"
              : isCorrect
              ? "bg-success text-success-foreground"
              : "bg-danger text-white"
          )}
        >
          {index + 1}
        </span>
        <h4 className="font-heading text-lg md:text-xl font-bold text-foreground leading-tight pt-1">
          {question.text}
        </h4>
      </div>

      <div className="space-y-3 ml-0 md:ml-14">
        {question.options.map((opt, i) => {
          const isThisCorrect = i === question.correctIndex;
          const isThisSelected = i === answer;

          return (
            <div 
              key={i} 
              className={cn(
                "text-sm md:text-base py-3 px-4 rounded-xl flex items-center gap-3 border transition-all duration-300",
                isThisCorrect 
                  ? "bg-success/10 text-success border-success/30 font-bold" 
                  : isThisSelected && !isThisCorrect
                  ? "bg-danger/10 text-danger border-danger/30 font-bold opacity-80"
                  : "text-muted-foreground bg-white/5 border-transparent"
              )}
            >
              <span className="font-black text-xs opacity-40 w-4">{labels[i]}</span>
              <span className="flex-1">{opt}</span>
              {isThisCorrect && (
                <div className="bg-success text-white p-1 rounded-full shadow-lg shadow-success/20">
                  <LucideIcon name="Check" size={12} strokeWidth={4} />
                </div>
              )}
              {isThisSelected && !isThisCorrect && (
                <div className="bg-danger text-white p-1 rounded-full shadow-lg shadow-danger/20">
                  <LucideIcon name="X" size={12} strokeWidth={4} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {question.explanation && (
        <div className="mt-6 ml-0 md:ml-14 p-5 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2 text-primary font-black uppercase tracking-[0.2em] text-[10px]">
              <LucideIcon name="Info" size={14} />
              Explanation
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed italic">
              {question.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewItem;
