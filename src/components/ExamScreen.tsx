import { useEffect, useRef, useState } from "react";
import { Subject } from "@/types";
import { useExam } from "@/hooks/useExam";
import { useTimer } from "@/hooks/useTimer";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import LucideIcon from "./LucideIcon";
import { cn } from "@/lib/utils";

interface ExamScreenProps {
  subject: Subject;
  questionCount: number;
  timeLimit: number | null;
  onFinish: (result: ReturnType<typeof useExam>["result"]) => void;
  onBack: () => void;
}

const ExamScreen = ({ subject, questionCount, timeLimit, onFinish, onBack }: ExamScreenProps) => {
  const exam = useExam(subject, questionCount);
  const [showConfirm, setShowConfirm] = useState(false);
  const questionSectionRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    questionSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [exam.currentIndex]);

  const handleSubmit = () => {
    exam.submit();
  };

  const timer = useTimer(timeLimit, () => {
    exam.submit();
  });

  // Watch for submission
  if (exam.submitted && exam.result) {
    timer.stop();
    onFinish(exam.result);
    return null;
  }

  const handleSubmitClick = () => {
    if (exam.unansweredCount > 0) {
      setShowConfirm(true);
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen paper-texture pb-20">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3 sm:gap-4 min-w-0 w-full lg:w-auto">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <button 
                onClick={onBack}
                className="btn-hover-base btn-hover-soft btn-hover-lift rounded-full p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground flex-shrink-0"
              >
                <LucideIcon name="ArrowLeft" size={20} />
              </button>
              <div className="flex items-center gap-3 min-w-0">
                <div 
                  className="w-10 h-10 rounded-lg items-center justify-center hidden sm:flex"
                  style={{ backgroundColor: `${subject.color}20`, color: subject.color }}
                >
                  <LucideIcon name={subject.icon} size={20} />
                </div>
                <div className="min-w-0">
                  <span className="font-heading font-bold text-foreground block leading-tight truncate">
                    {subject.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block truncate">
                    {subject.selectedChapter?.name ?? "Exam Session"}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmitClick}
              className="btn-hover-base btn-hover-solid btn-hover-lift sm:hidden rounded-lg px-3 py-2 text-xs font-bold shadow-lg"
              style={{ 
                "--btn-glow": `${subject.color}80`,
                backgroundColor: subject.color, 
                color: "#fff",
                boxShadow: `0 10px 15px -3px ${subject.color}40, 0 4px 6px -4px ${subject.color}40`
              }}
            >
              Finish
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1 lg:justify-end">
            <div className="flex-1 max-w-full lg:max-w-md order-2 lg:order-1">
              <ProgressBar current={exam.currentIndex} total={exam.questions.length} color={subject.color} />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 order-1 lg:order-2">
              {timeLimit !== null && (
                <Timer formattedTime={timer.formatTime()} secondsLeft={timer.secondsLeft} isRunning={timer.isRunning} />
              )}
              <button
                onClick={handleSubmitClick}
                className="btn-hover-base btn-hover-solid btn-hover-lift hidden sm:flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold shadow-lg"
                style={{ 
                  "--btn-glow": `${subject.color}80`,
                  backgroundColor: subject.color, 
                  color: "#fff",
                  boxShadow: `0 10px 15px -3px ${subject.color}40, 0 4px 6px -4px ${subject.color}40`
                }}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Question navigator sidebar */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 order-2 lg:order-1">
          <div className="lg:sticky lg:top-32 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Progress</p>
              <span className="text-xs font-bold text-foreground/60">{Math.round((exam.currentIndex / exam.questions.length) * 100)}%</span>
            </div>
            
            <div className="grid grid-cols-5 min-[480px]:grid-cols-6 sm:grid-cols-8 lg:grid-cols-4 gap-2">
              {exam.questions.map((_, i) => {
                const isActive = i === exam.currentIndex;
                const isAnswered = exam.answers[i] !== null;
                return (
                  <button
                    key={i}
                    onClick={() => exam.goTo(i)}
                    className={cn(
                      "btn-hover-base btn-hover-soft relative aspect-square rounded-lg text-xs font-bold transition-all duration-300",
                      isActive 
                        ? "scale-110 shadow-lg z-10" 
                        : "hover:bg-white/10 text-muted-foreground hover:text-foreground",
                      isAnswered && !isActive && "text-foreground"
                    )}
                    style={
                      isActive
                        ? { backgroundColor: subject.color, color: "#fff" }
                        : isAnswered
                        ? { backgroundColor: `${subject.color}30` }
                        : undefined
                    }
                  >
                    {i + 1}
                    {isAnswered && !isActive && (
                      <div 
                        className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full translate-x-1/3 -translate-y-1/3" 
                        style={{ backgroundColor: subject.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: subject.color }} />
                <span>Current Question</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: subject.color }} />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Remaining</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main question area */}
        <div className="flex-1 order-1 lg:order-2">
          <div
            ref={questionSectionRef}
            className="bg-card/40 backdrop-blur-sm rounded-[1.75rem] sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-10 shadow-2xl relative overflow-hidden group scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32"
          >
            {/* Background Accent Glow */}
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none transition-all duration-700 group-hover:opacity-20" style={{ backgroundColor: subject.color }} />
            
            <div className="relative z-10">
              <QuestionCard
                question={exam.currentQuestion}
                selectedAnswer={exam.answers[exam.currentIndex]}
                onSelect={exam.selectAnswer}
                color={subject.color}
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-center mt-6 sm:mt-8 gap-3 sm:gap-4">
            <button
              onClick={exam.prev}
              disabled={exam.isFirst}
              className="btn-hover-base btn-hover-soft btn-hover-lift flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-bold text-foreground hover:bg-white/5 disabled:opacity-20 disabled:pointer-events-none w-full sm:w-auto"
            >
              <LucideIcon name="ChevronLeft" size={18} strokeWidth={3} />
              Previous
            </button>

            {exam.isLast ? (
              <button
                onClick={handleSubmitClick}
                className="btn-hover-base btn-hover-solid btn-hover-lift rounded-xl px-8 sm:px-10 py-3 text-sm font-black uppercase tracking-widest shadow-xl w-full sm:w-auto"
                style={{ 
                  "--btn-glow": `${subject.color}80`,
                  backgroundColor: subject.color, 
                  color: "#fff",
                  boxShadow: `0 20px 25px -5px ${subject.color}40, 0 10px 10px -5px ${subject.color}40`
                }}
              >
                Submit Exam
              </button>
            ) : (
              <button
                onClick={exam.next}
                disabled={exam.answers[exam.currentIndex] === null}
                className="btn-hover-base btn-hover-solid btn-hover-lift flex items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-bold shadow-xl disabled:opacity-30 disabled:pointer-events-none w-full sm:w-auto"
                style={{ 
                  "--btn-glow": `${subject.color}80`,
                  backgroundColor: subject.color, 
                  color: "#fff",
                  boxShadow: `0 20px 25px -5px ${subject.color}40, 0 10px 10px -5px ${subject.color}40`
                }}
              >
                Next
                <LucideIcon name="ChevronRight" size={18} strokeWidth={3} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-md animate-fade-in p-4">
          <div className="bg-card border border-white/10 rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-scale-in relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: subject.color }} />
            
            <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center text-warning mb-6 mx-auto">
              <LucideIcon name="CircleAlert" size={32} />
            </div>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 text-center">
              Almost Done!
            </h3>
            
            <p className="text-muted-foreground text-sm mb-8 text-center leading-relaxed">
              You have <span className="text-warning font-bold">{exam.unansweredCount}</span> unanswered
              questions. Unanswered questions will be marked as skipped.
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleSubmit}
                className="btn-hover-base btn-hover-solid btn-hover-lift w-full rounded-xl py-4 text-sm font-black uppercase tracking-widest shadow-lg"
                style={{ 
                  "--btn-glow": `${subject.color}80`,
                  backgroundColor: subject.color, 
                  color: "#fff",
                  boxShadow: `0 10px 15px -3px ${subject.color}40`
                }}
              >
                Submit Anyway
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="btn-hover-base btn-hover-soft btn-hover-lift w-full rounded-xl py-4 text-sm font-bold text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                Review Answers
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamScreen;
