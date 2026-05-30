import { useState } from "react";
import { ExamResult, IconName } from "@/types";
import ReviewItem from "./ReviewItem";
import LucideIcon from "./LucideIcon";
import { cn } from "@/lib/utils";

interface ResultsScreenProps {
  result: ExamResult;
  onRetake: () => void;
  onHome: () => void;
}

interface FeedbackMessage {
  text: string;
  icon: IconName;
  color: string;
}

function getMessage(score: number): FeedbackMessage {
  if (score >= 90) return { text: "Outstanding!", icon: "Trophy", color: "#F59E0B" };
  if (score >= 70) return { text: "Well done!", icon: "PartyPopper", color: "#10B981" };
  if (score >= 50) return { text: "Keep practicing.", icon: "Target", color: "#3B82F6" };
  return { text: "More revision needed.", icon: "BookOpen", color: "#EF4444" };
}

const ResultsScreen = ({ result, onRetake, onHome }: ResultsScreenProps) => {
  const [showReview, setShowReview] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "missed" | "skipped" | "correct">(
    "missed"
  );
  const msg = getMessage(result.score);
  const missedCount = result.incorrect + result.skipped;
  const nextStep =
    result.score >= 90
      ? "You are ready for a timed mock run or a different subject."
      : result.score >= 70
      ? "Review the missed questions, then retake this chapter with a timer."
      : result.score >= 50
      ? "Slow down and study explanations before taking another short drill."
      : "Start with a quick review session and focus on one chapter at a time.";
  const reviewItems = result.questions
    .map((question, index) => ({ question, answer: result.answers[index], index }))
    .filter(({ question, answer }) => {
      if (reviewFilter === "all") return true;
      if (reviewFilter === "skipped") return answer === null;
      if (reviewFilter === "correct") return answer === question.correctIndex;
      return answer === null || answer !== question.correctIndex;
    });

  return (
    <div className="min-h-screen paper-texture pb-20">
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-16">
        {/* Score Header */}
        <div className="text-center mb-12 animate-fade-in relative">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce"
            style={{ backgroundColor: `${msg.color}20`, color: msg.color }}
          >
            <LucideIcon name={msg.icon} size={40} strokeWidth={2.5} />
          </div>
          
          <h2 className="text-muted-foreground text-sm font-black uppercase tracking-[0.3em] mb-4">
            Exam Completed
          </h2>
          
          <div
            className="text-6xl sm:text-8xl md:text-9xl font-heading font-black animate-count-up mb-4 tracking-tighter"
            style={{ color: result.subject.color }}
          >
            {result.score}<span className="text-3xl sm:text-4xl opacity-50">%</span>
          </div>
          
          <p className="font-heading text-2xl sm:text-3xl text-foreground font-bold mb-2">
            {msg.text}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-xs font-bold uppercase tracking-wider">
            <LucideIcon name={result.subject.icon} size={12} />
            {result.subject.name}
          </div>
          {result.subject.selectedChapter ? (
            <div className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {result.subject.selectedChapter.name}
            </div>
          ) : null}
        </div>

        {/* Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 animate-fade-in">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center shadow-xl">
            <div className="text-3xl font-black text-success mb-1">{result.correct}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Correct</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center shadow-xl">
            <div className="text-3xl font-black text-danger mb-1">{result.incorrect}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Incorrect</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center shadow-xl">
            <div className="text-3xl font-black text-muted-foreground mb-1">{result.skipped}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Skipped</div>
          </div>
        </div>

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${result.subject.color}18`, color: result.subject.color }}
              >
                <LucideIcon name="BarChart3" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-black text-foreground">Study next</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{nextStep}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setReviewFilter("missed");
                setShowReview(true);
              }}
              className="btn-hover-base btn-hover-soft btn-hover-lift inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-black uppercase tracking-widest text-foreground hover:bg-white/5"
            >
              <LucideIcon name="Filter" size={16} />
              Review {missedCount} missed
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
          <button
            onClick={onRetake}
            className="btn-hover-base btn-hover-solid btn-hover-lift flex-1 flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-black uppercase tracking-widest shadow-xl"
            style={{ 
              "--btn-glow": `${result.subject.color}80`,
              backgroundColor: result.subject.color, 
              color: "#fff",
              boxShadow: `0 20px 25px -5px ${result.subject.color}40, 0 10px 10px -5px ${result.subject.color}40`
            }}
          >
            <LucideIcon name="RefreshCcw" size={18} strokeWidth={3} />
            Retake Exam
          </button>
          <button
            onClick={onHome}
            className="btn-hover-base btn-hover-soft btn-hover-lift flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-4 text-sm font-black uppercase tracking-widest text-foreground hover:bg-white/5"
          >
            <LucideIcon name="Home" size={18} strokeWidth={2.5} />
            Other Subjects
          </button>
        </div>

        {/* Review Section */}
        <div className="animate-fade-in">
          <button
            onClick={() => setShowReview((v) => !v)}
            className="btn-hover-base btn-hover-soft btn-hover-lift group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg hover:bg-white/10"
            aria-expanded={showReview}
            aria-controls="results-review-panel"
          >
            <div className="flex items-center gap-3">
              <LucideIcon name="SearchCheck" style={{ color: result.subject.color }} />
              <span className="font-bold uppercase tracking-widest text-sm">Detailed Review</span>
            </div>
            <LucideIcon 
              name="ChevronDown" 
              className={cn("transition-transform duration-300", showReview && "rotate-180")} 
            />
          </button>

          {showReview && (
            <div id="results-review-panel" className="mt-6 space-y-6 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "missed", label: "Missed", count: missedCount },
                  { id: "skipped", label: "Skipped", count: result.skipped },
                  { id: "correct", label: "Correct", count: result.correct },
                  { id: "all", label: "All", count: result.questions.length },
                ].map((filter) => {
                  const isSelected = reviewFilter === filter.id;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setReviewFilter(filter.id as typeof reviewFilter)}
                      className={cn(
                        "btn-hover-base btn-hover-soft rounded-xl border px-3 py-3 text-xs font-black uppercase tracking-widest transition",
                        isSelected
                          ? "border-transparent text-white shadow-lg"
                          : "border-white/10 bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                      )}
                      style={
                        isSelected
                          ? {
                              backgroundColor: result.subject.color,
                              boxShadow: `0 14px 28px -16px ${result.subject.color}`,
                            }
                          : undefined
                      }
                    >
                      {filter.label} <span className="opacity-70">({filter.count})</span>
                    </button>
                  );
                })}
              </div>

              {reviewItems.length > 0 ? (
                reviewItems.map(({ question, answer, index }) => (
                  <ReviewItem key={question.id} question={question} answer={answer} index={index} />
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm font-medium text-muted-foreground">
                  Nothing in this filter for this attempt.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
