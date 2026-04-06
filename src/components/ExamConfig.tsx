import { useMemo, useState } from "react";
import { Chapter, Subject } from "@/types";
import LucideIcon from "./LucideIcon";
import { cn } from "@/lib/utils";
import { createSubjectForChapter, getSubjectQuestions } from "@/lib/subjectUtils";

interface ExamConfigProps {
  subject: Subject;
  onBegin: (subject: Subject, questionCount: number, timeLimit: number | null) => void;
  onBack: () => void;
}

const questionOptions = [5, 10, 15];
const timeOptions = [
  { label: "No Timer", value: null, icon: "Infinity" as const },
  { label: "15 min", value: 15, icon: "Timer" as const },
  { label: "30 min", value: 30, icon: "Timer" as const },
  { label: "60 min", value: 60, icon: "Timer" as const },
];

const ExamConfig = ({ subject, onBegin, onBack }: ExamConfigProps) => {
  const hasChapters = Boolean(subject.chapters?.length);
  const [selectedChapterId, setSelectedChapterId] = useState(
    subject.selectedChapter?.id ?? subject.chapters?.[0]?.id ?? null
  );
  const [timeLimit, setTimeLimit] = useState<number | null>(30);

  const selectedChapter = useMemo<Chapter | undefined>(
    () => subject.chapters?.find((chapter) => chapter.id === selectedChapterId),
    [subject.chapters, selectedChapterId]
  );

  const examSubject = selectedChapter
    ? createSubjectForChapter(subject, selectedChapter)
    : subject;

  const maxQ = getSubjectQuestions(examSubject).length;
  const availableOptions = questionOptions.filter((q) => q <= maxQ);
  if (!availableOptions.includes(maxQ)) availableOptions.push(maxQ);

  const [questionCount, setQuestionCount] = useState(Math.min(10, maxQ));

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapterId(chapter.id);
    setQuestionCount(Math.min(10, chapter.questions.length));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 paper-texture relative overflow-hidden">
      {/* Background Accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: subject.color }}
      />

      <div className="w-full max-w-lg relative z-10 animate-fade-in">
        <button
          onClick={onBack}
          className="btn-hover-base btn-hover-soft btn-hover-lift group mb-8 flex items-center gap-2 rounded-full px-2 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          <LucideIcon
            name="ArrowLeft"
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to subjects
        </button>

        <div className="bg-card/40 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Header Border */}
          <div
            className="absolute top-0 left-0 w-full h-1.5"
            style={{ backgroundColor: subject.color }}
          />

          <div className="text-center mb-12">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
              style={{ backgroundColor: `${subject.color}20`, color: subject.color }}
            >
              <LucideIcon name={subject.icon} size={40} strokeWidth={2} />
            </div>
            <h2 className="font-heading text-3xl font-black text-foreground mb-2">
              {subject.name}
            </h2>
            <p className="text-muted-foreground text-sm font-medium tracking-wide">
              Customize your practice session
            </p>
          </div>

          <div className="space-y-10">
            {hasChapters ? (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <LucideIcon name="BookOpen" size={18} style={{ color: subject.color }} />
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                    Choose Chapter
                  </label>
                </div>
                <div className="space-y-3">
                  {subject.chapters?.map((chapter) => {
                    const isSelected = chapter.id === selectedChapterId;

                    return (
                      <button
                        key={chapter.id}
                        type="button"
                        onClick={() => handleSelectChapter(chapter)}
                        className={cn(
                          "btn-hover-base btn-hover-soft w-full flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all duration-300",
                          isSelected
                            ? "border-transparent scale-[1.01]"
                            : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20"
                        )}
                        style={
                          isSelected
                            ? {
                                backgroundColor: `${subject.color}20`,
                                boxShadow: `0 12px 30px -12px ${subject.color}60`,
                              }
                            : undefined
                        }
                      >
                        <div>
                          <div className="text-sm font-black text-foreground">{chapter.name}</div>
                          {chapter.description ? (
                            <div className="text-xs text-muted-foreground mt-1">
                              {chapter.description}
                            </div>
                          ) : null}
                        </div>
                        <div className="text-right">
                          <div
                            className="text-xs font-black uppercase tracking-[0.2em]"
                            style={{ color: isSelected ? subject.color : undefined }}
                          >
                            {chapter.questions.length} Qs
                          </div>
                          {isSelected ? (
                            <div
                              className="text-[10px] font-black uppercase tracking-[0.2em] mt-1"
                              style={{ color: subject.color }}
                            >
                              Selected
                            </div>
                          ) : null}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div>
              <div className="flex items-center gap-2 mb-5">
                <LucideIcon name="ListChecks" size={18} style={{ color: subject.color }} />
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                  Select Questions
                </label>
              </div>
              <div className="flex gap-3">
                {availableOptions.map((n) => (
                  <button
                    key={`${selectedChapterId ?? "all"}-${n}`}
                    onClick={() => setQuestionCount(n)}
                    className={cn(
                      "btn-hover-base btn-hover-soft flex-1 rounded-2xl border-2 py-4 text-sm font-black transition-all duration-500",
                      questionCount === n
                        ? "text-white shadow-xl scale-110 z-10"
                        : "bg-white/[0.03] border-white/5 text-muted-foreground hover:border-white/10 hover:bg-white/[0.06] hover:scale-105"
                    )}
                    style={
                      questionCount === n
                        ? { 
                            backgroundColor: subject.color, 
                            borderColor: subject.color,
                            boxShadow: `0 10px 15px -3px ${subject.color}40`
                          }
                        : undefined
                    }
                  >
                    {n === maxQ ? `Full (${n})` : n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <LucideIcon name="Clock" size={18} style={{ color: subject.color }} />
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                  Time Budget
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {timeOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setTimeLimit(opt.value)}
                    className={cn(
                      "btn-hover-base btn-hover-soft flex items-center justify-center gap-3 rounded-2xl border-2 py-4 text-sm font-black transition-all duration-500",
                      timeLimit === opt.value
                        ? "text-white shadow-xl scale-105 z-10"
                        : "bg-white/[0.03] border-white/5 text-muted-foreground hover:border-white/10 hover:bg-white/[0.06] hover:scale-105"
                    )}
                    style={
                      timeLimit === opt.value
                        ? { 
                            backgroundColor: subject.color, 
                            borderColor: subject.color,
                            boxShadow: `0 10px 15px -3px ${subject.color}40`
                          }
                        : undefined
                    }
                  >
                    <LucideIcon name={opt.icon} size={16} strokeWidth={3} />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => onBegin(examSubject, questionCount, timeLimit ? timeLimit * 60 : null)}
              className="btn-hover-base btn-hover-solid btn-hover-lift mt-4 w-full rounded-2xl py-5 text-sm font-black uppercase tracking-[0.3em] shadow-2xl"
              style={{ 
                "--btn-glow": `${subject.color}80`,
                backgroundColor: subject.color, 
                color: "#fff",
                boxShadow: `0 20px 25px -5px ${subject.color}40`
              }}
            >
              Start Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamConfig;
