import { useState, lazy, Suspense, useEffect, useMemo } from "react";
import { Subject, ExamResult } from "@/types";
import { loadSubject, subjectSummaries } from "@/data";
import SubjectCard from "@/components/SubjectCard";
import LucideIcon from "@/components/LucideIcon";
import { toast } from "@/hooks/use-toast";

const ExamConfig = lazy(() => import("@/components/ExamConfig"));
const ExamScreen = lazy(() => import("@/components/ExamScreen"));
const ResultsScreen = lazy(() => import("@/components/ResultsScreen"));

type Screen =
  | { type: "home" }
  | { type: "config"; subject: Subject }
  | { type: "exam"; subject: Subject; questionCount: number; timeLimit: number | null }
  | { type: "results"; result: ExamResult };

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [screen, setScreen] = useState<Screen>({ type: "home" });
  const [loadingSubjectId, setLoadingSubjectId] = useState<string | null>(null);

  const curriculumStats = useMemo(() => {
    const questionCount = subjectSummaries.reduce(
      (total, subject) => total + subject.questionCount,
      0
    );
    const chapterCount = subjectSummaries.reduce(
      (total, subject) => total + subject.chapterCount,
      0
    );

    return { questionCount, chapterCount };
  }, []);

  const handleStartSubject = async (subjectId: string) => {
    setLoadingSubjectId(subjectId);

    try {
      const subject = await loadSubject(subjectId);
      setScreen({ type: "config", subject });
    } catch (error) {
      console.error(error);
      toast({
        title: "Subject could not load",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingSubjectId(null);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen.type]);

  if (screen.type === "config") {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <ExamConfig
          subject={screen.subject}
          onBegin={(examSubject, qc, tl) =>
            setScreen({ type: "exam", subject: examSubject, questionCount: qc, timeLimit: tl })
          }
          onBack={() => setScreen({ type: "home" })}
        />
      </Suspense>
    );
  }

  if (screen.type === "exam") {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <ExamScreen
          subject={screen.subject}
          questionCount={screen.questionCount}
          timeLimit={screen.timeLimit}
          onFinish={(result) => {
            if (result) setScreen({ type: "results", result });
          }}
          onBack={() => setScreen({ type: "home" })}
        />
      </Suspense>
    );
  }

  if (screen.type === "results") {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <ResultsScreen
          result={screen.result}
          onRetake={() =>
            setScreen({
              type: "exam",
              subject: screen.result.subject,
              questionCount: screen.result.questions.length,
              timeLimit: null,
            })
          }
          onHome={() => setScreen({ type: "home" })}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-foreground/15 selection:text-foreground">
      {/* Subtle modern background grid */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_65%,transparent_100%)] opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14 min-h-[82svh] py-12 sm:py-16 lg:py-20">
          {/* Left Column: Headline & Controls */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-sm mb-6 shadow-sm">
              <LucideIcon name="GraduationCap" size={15} className="text-foreground" />
              <span className="text-foreground/80 text-xs font-semibold tracking-wide">
                Faculty of Computers & Artificial Intelligence
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.05] text-balance">
              Practice FCAI Exams, <br />
              <span className="text-muted-foreground font-extrabold">
                Lecture by Lecture.
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal text-balance">
              Authentic multiple-choice questions collected directly from official lecture slides. Drill chapters individually, test timing under pressure, and review step-by-step solutions.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("subjects-grid");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 rounded-xl bg-foreground px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-background shadow-lg transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
              >
                <span>Browse Subjects</span>
                <LucideIcon name="ArrowDown" size={15} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={() => handleStartSubject("MM304")}
                disabled={loadingSubjectId === "MM304"}
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-200 hover:bg-secondary active:scale-95 cursor-pointer"
              >
                {loadingSubjectId === "MM304" ? (
                  <LucideIcon name="RefreshCcw" size={14} className="animate-spin" />
                ) : (
                  <>
                    <LucideIcon name="Zap" size={14} className="text-foreground/70" />
                    <span>Practice MM304</span>
                  </>
                )}
              </button>
            </div>

            {/* Curriculum Stat Strip */}
            <div className="mt-10 pt-8 border-t border-border/70 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="rounded-xl border border-border/60 bg-card/60 p-4 text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-mono font-black text-foreground tabular-nums">
                  {subjectSummaries.length}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                  Subjects Active
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/60 p-4 text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-mono font-black text-foreground tabular-nums">
                  {curriculumStats.chapterCount}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                  Lectures
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/60 p-4 text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-mono font-black text-foreground tabular-nums">
                  {curriculumStats.questionCount}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                  Total Questions
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Live Exam Mockup (Replaces abstract AI shapes) */}
          <div className="flex-1 w-full max-w-md sm:max-w-xl lg:max-w-none">
            <div className="rounded-2xl border border-border bg-card shadow-2xl p-6 sm:p-7 relative overflow-hidden backdrop-blur-sm">
              {/* Subtle top card glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500/80 via-purple-500/80 to-blue-500/80" />

              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/70">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-foreground border border-border/60">
                    MM304 · Lecture 1
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Question 08 of 40
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/80 border border-border/60 text-xs font-mono font-semibold text-foreground">
                  <LucideIcon name="Clock" size={13} className="text-muted-foreground" />
                  <span>24:18</span>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="font-heading text-base sm:text-lg font-bold text-foreground mb-5 leading-snug">
                Which three technologies are included under the XR (Extended Reality) umbrella?
              </h2>

              {/* Options Mockup */}
              <div className="space-y-2.5 mb-5">
                {[
                  { key: "A", text: "HTML, XML, and XSL", state: "default" },
                  { key: "B", text: "2D, 3D, and 4D animation", state: "default" },
                  { key: "C", text: "AR, MR, and VR", state: "correct" },
                  { key: "D", text: "Text, audio, and video", state: "default" },
                ].map((opt) => (
                  <div
                    key={opt.key}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all ${
                      opt.state === "correct"
                        ? "border-emerald-500/60 bg-emerald-500/10 text-foreground font-semibold shadow-sm"
                        : "border-border/60 bg-secondary/30 text-muted-foreground hover:bg-secondary/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center border ${
                          opt.state === "correct"
                            ? "bg-emerald-500 text-white border-emerald-500"
                            : "bg-background border-border text-foreground"
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span>{opt.text}</span>
                    </div>

                    {opt.state === "correct" && (
                      <span className="text-emerald-500 flex items-center gap-1 text-[11px] font-bold">
                        <LucideIcon name="Check" size={14} strokeWidth={3} />
                        Correct
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Explanation Banner */}
              <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-xs text-foreground/90 flex items-start gap-2.5 leading-relaxed">
                <LucideIcon name="Info" size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Explanation:</strong> XR is an umbrella category that encompasses Augmented Reality (AR), Mixed Reality (MR), and Virtual Reality (VR).
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div id="subjects-grid" className="pt-10 sm:pt-14 mb-8 sm:mb-10 border-t border-border/70">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                Curriculum
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
                Choose What to Practice
              </h2>
            </div>
            <p className="text-muted-foreground text-sm font-normal max-w-sm">
              Select a course below to practice by chapter or run a full timed simulation.
            </p>
          </div>
        </div>

        {/* Colorful Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-24">
          {subjectSummaries.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              isLoading={loadingSubjectId === subject.id}
              onStart={handleStartSubject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
