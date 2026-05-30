import { useEffect, useMemo, useState } from "react";
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
    subject.selectedChapter?.id ?? null
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
  const allQuestionCount = getSubjectQuestions(subject).length;
  const availableOptions = questionOptions.filter((q) => q <= maxQ);
  const hasQuestions = maxQ > 0;
  if (hasQuestions && !availableOptions.includes(maxQ)) availableOptions.push(maxQ);

  const [questionCount, setQuestionCount] = useState(Math.min(10, maxQ));

  useEffect(() => {
    setQuestionCount((count) => Math.min(count, maxQ));
  }, [maxQ]);

  const sessionPresets = [
    {
      id: "quick",
      label: "Quick review",
      description: "Fast practice with no clock pressure.",
      icon: "Zap" as const,
      questions: Math.min(5, maxQ),
      time: null,
    },
    {
      id: "focused",
      label: "Focused drill",
      description: "A balanced run for everyday revision.",
      icon: "Target" as const,
      questions: Math.min(10, maxQ),
      time: 15,
    },
    {
      id: "mock",
      label: "Mock exam",
      description: "A tighter session before the real exam.",
      icon: "Timer" as const,
      questions: Math.min(15, maxQ),
      time: 30,
    },
  ];

  const activePreset = sessionPresets.find(
    (preset) => preset.questions === questionCount && preset.time === timeLimit
  );

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapterId(chapter.id);
    setQuestionCount(Math.min(10, chapter.questions.length));
  };

  const handleSelectAllChapters = () => {
    setSelectedChapterId(null);
    setQuestionCount(Math.min(10, allQuestionCount));
  };

  const selectedScopeLabel = selectedChapter?.name ?? "All lectures";
  const selectedTimeLabel = timeLimit ? `${timeLimit} min` : "No timer";

  return (
    <div className="min-h-screen px-4 py-6 sm:py-8 paper-texture relative overflow-hidden">
      <div
        className="absolute top-32 left-1/2 -translate-x-1/2 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] md:w-[680px] md:h-[680px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: subject.color }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10 animate-fade-in">
        <button
          onClick={onBack}
          className="btn-hover-base btn-hover-soft btn-hover-lift group mb-6 flex items-center gap-2 rounded-full px-2 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          <LucideIcon
            name="ArrowLeft"
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to subjects
        </button>

        <div className="mb-6 rounded-[2rem] border border-white/10 bg-card/50 p-5 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-3xl shadow-xl sm:h-20 sm:w-20"
                style={{ backgroundColor: `${subject.color}20`, color: subject.color }}
              >
                <LucideIcon name={subject.icon} size={32} strokeWidth={2} />
              </div>
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  <LucideIcon name="GraduationCap" size={13} style={{ color: subject.color }} />
                  Study setup
                </div>
                <h2 className="font-heading text-3xl font-black text-foreground sm:text-4xl">
                  {subject.name}
                </h2>
                <p className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground">
                  Choose the lectures, mode, question load, and timing for this practice session.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:min-w-[360px]">
              <div className="rounded-xl bg-background/30 p-3">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  Scope
                </div>
                <div className="mt-1 truncate text-sm font-black text-foreground">
                  {selectedScopeLabel}
                </div>
              </div>
              <div className="rounded-xl bg-background/30 p-3">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  Load
                </div>
                <div className="mt-1 text-sm font-black text-foreground">{questionCount} qs</div>
              </div>
              <div className="rounded-xl bg-background/30 p-3">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  Time
                </div>
                <div className="mt-1 text-sm font-black text-foreground">{selectedTimeLabel}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
          <section className="rounded-[2rem] border border-white/10 bg-card/40 p-5 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <LucideIcon name="BookOpen" size={18} style={{ color: subject.color }} />
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                    Lectures
                  </label>
                </div>
                <h3 className="font-heading text-2xl font-black text-foreground">Pick your scope</h3>
              </div>
              <div className="rounded-xl bg-white/[0.04] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">
                {maxQ} available questions
              </div>
            </div>

            {hasChapters ? (
              <div className="grid gap-3">
                <button
                  type="button"
                  onClick={handleSelectAllChapters}
                  className={cn(
                    "btn-hover-base btn-hover-soft flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                    selectedChapterId === null
                      ? "border-transparent shadow-xl"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20"
                  )}
                  style={
                    selectedChapterId === null
                      ? {
                          backgroundColor: `${subject.color}20`,
                          boxShadow: `0 16px 34px -18px ${subject.color}80`,
                        }
                      : undefined
                  }
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${subject.color}18`, color: subject.color }}
                    >
                      <LucideIcon name="ListChecks" size={22} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-base font-black text-foreground">All lectures</div>
                      <div className="mt-1 text-xs font-medium text-muted-foreground">
                        Mix questions across the full subject.
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-xs font-black uppercase tracking-[0.18em]"
                      style={{ color: selectedChapterId === null ? subject.color : undefined }}
                    >
                      {allQuestionCount} Qs
                    </div>
                    {selectedChapterId === null ? (
                      <div
                        className="mt-1 text-[10px] font-black uppercase tracking-[0.18em]"
                        style={{ color: subject.color }}
                      >
                        Selected
                      </div>
                    ) : null}
                  </div>
                </button>

                {subject.chapters?.map((chapter, index) => {
                  const isSelected = chapter.id === selectedChapterId;

                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => handleSelectChapter(chapter)}
                      className={cn(
                        "btn-hover-base btn-hover-soft w-full rounded-2xl border p-4 text-left transition-all duration-300",
                        isSelected
                          ? "border-transparent shadow-xl"
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20"
                      )}
                      style={
                        isSelected
                          ? {
                              backgroundColor: `${subject.color}20`,
                              boxShadow: `0 16px 34px -18px ${subject.color}80`,
                            }
                          : undefined
                      }
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex min-w-0 items-start gap-4">
                          <div
                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-black"
                            style={{
                              backgroundColor: isSelected ? subject.color : `${subject.color}18`,
                              color: isSelected ? "#fff" : subject.color,
                            }}
                          >
                            {index + 1}
                          </div>
                          <div className="min-w-0">
                            <div className="text-base font-black text-foreground">{chapter.name}</div>
                            {chapter.description ? (
                              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                {chapter.description}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div
                            className="text-xs font-black uppercase tracking-[0.18em]"
                            style={{ color: isSelected ? subject.color : undefined }}
                          >
                            {chapter.questions.length} Qs
                          </div>
                          {isSelected ? (
                            <div
                              className="mt-1 text-[10px] font-black uppercase tracking-[0.18em]"
                              style={{ color: subject.color }}
                            >
                              Selected
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-base font-black text-foreground">Full subject practice</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  This subject is ready as one combined question bank.
                </p>
              </div>
            )}
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-card/40 p-5 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8 lg:sticky lg:top-6 lg:self-start">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <LucideIcon name="Sparkles" size={18} style={{ color: subject.color }} />
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                  Session
                </label>
              </div>
              <h3 className="font-heading text-2xl font-black text-foreground">Tune the session</h3>
            </div>

            <div className="space-y-7">
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-sm font-black text-foreground">Study mode</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                    {activePreset?.label ?? "Custom"}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {sessionPresets.map((preset) => {
                    const isSelected = activePreset?.id === preset.id;

                    return (
                      <button
                        key={preset.id}
                        type="button"
                        disabled={!hasQuestions}
                        onClick={() => {
                          setQuestionCount(preset.questions);
                          setTimeLimit(preset.time);
                        }}
                        className={cn(
                          "btn-hover-base btn-hover-soft flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                          isSelected
                            ? "border-transparent text-foreground shadow-xl"
                            : "border-white/10 bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                        )}
                        style={
                          isSelected
                            ? {
                                backgroundColor: `${subject.color}18`,
                                boxShadow: `0 14px 30px -18px ${subject.color}80`,
                              }
                            : undefined
                        }
                      >
                        <span
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                          style={{
                            backgroundColor: isSelected ? subject.color : `${subject.color}20`,
                            color: isSelected ? "#fff" : subject.color,
                          }}
                        >
                          <LucideIcon name={preset.icon} size={19} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-black text-foreground">{preset.label}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {preset.description}
                          </span>
                        </span>
                        <span className="rounded-full bg-background/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]">
                          {preset.questions} Qs
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <LucideIcon name="ListChecks" size={17} style={{ color: subject.color }} />
                  <div className="text-sm font-black text-foreground">Questions</div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                  {hasQuestions ? (
                    availableOptions.map((n) => (
                      <button
                        key={`${selectedChapterId ?? "all"}-${n}`}
                        type="button"
                        onClick={() => setQuestionCount(n)}
                        className={cn(
                          "btn-hover-base btn-hover-soft rounded-2xl border py-4 text-sm font-black transition-all duration-300",
                          questionCount === n
                            ? "border-transparent text-white shadow-xl"
                            : "border-white/10 bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                        )}
                        style={
                          questionCount === n
                            ? {
                                backgroundColor: subject.color,
                                boxShadow: `0 12px 24px -14px ${subject.color}`,
                              }
                            : undefined
                        }
                      >
                        {n === maxQ ? `Full (${n})` : n}
                      </button>
                    ))
                  ) : (
                    <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-muted-foreground">
                      No questions are available for this scope yet.
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <LucideIcon name="Clock" size={17} style={{ color: subject.color }} />
                  <div className="text-sm font-black text-foreground">Time budget</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeOptions.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setTimeLimit(opt.value)}
                      className={cn(
                        "btn-hover-base btn-hover-soft flex items-center justify-center gap-3 rounded-2xl border py-4 text-sm font-black transition-all duration-300",
                        timeLimit === opt.value
                          ? "border-transparent text-white shadow-xl"
                          : "border-white/10 bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                      )}
                      style={
                        timeLimit === opt.value
                          ? {
                              backgroundColor: subject.color,
                              boxShadow: `0 12px 24px -14px ${subject.color}`,
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

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Ready session
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Lecture scope</span>
                    <span className="truncate text-right font-black text-foreground">{selectedScopeLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Questions</span>
                    <span className="font-black text-foreground">{questionCount}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-black text-foreground">{selectedTimeLabel}</span>
                  </div>
                </div>
              </div>

              <button
                disabled={!hasQuestions}
                onClick={() => onBegin(examSubject, questionCount, timeLimit ? timeLimit * 60 : null)}
                className="btn-hover-base btn-hover-solid btn-hover-lift w-full rounded-2xl py-4 sm:py-5 text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-2xl"
                style={{
                  "--btn-glow": `${subject.color}80`,
                  backgroundColor: subject.color,
                  color: "#fff",
                  boxShadow: `0 20px 25px -5px ${subject.color}40`,
                }}
              >
                {hasQuestions ? "Start Session" : "No Questions Yet"}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExamConfig;
