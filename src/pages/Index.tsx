import { useState, lazy, Suspense, useEffect } from "react";
import { Subject, ExamResult } from "@/types";
import { subjects } from "@/data";
import SubjectCard from "@/components/SubjectCard";
import LucideIcon from "@/components/LucideIcon";

const ExamConfig = lazy(() => import("@/components/ExamConfig"));
const ExamScreen = lazy(() => import("@/components/ExamScreen"));
const ResultsScreen = lazy(() => import("@/components/ResultsScreen"));

const heroItems = [
  {
    title: "Architecture",
    subtitle: "Computer Systems",
    icon: "Cpu" as const,
    iconClassName: "text-primary",
    offsetClassName: "",
    floatClassName: "hero-float-a",
  },
  {
    title: "Networking",
    subtitle: "Data Communication",
    icon: "Network" as const,
    iconClassName: "text-blue-400",
    offsetClassName: "md:translate-y-8",
    floatClassName: "hero-float-b hero-float-delay-1",
  },
  {
    title: "Data Science",
    subtitle: "Statistical Analysis",
    icon: "Database" as const,
    iconClassName: "text-emerald-400",
    offsetClassName: "",
    floatClassName: "hero-float-b hero-float-delay-2",
  },
  {
    title: "AI & ML",
    subtitle: "Neural Networks",
    icon: "Brain" as const,
    iconClassName: "text-fuchsia-400",
    offsetClassName: "md:translate-y-8",
    floatClassName: "hero-float-a hero-float-delay-3",
  },
];

const heroAvatars = [
  "/hero-person-1.jpg",
  "/hero-person-2.jpg",
  "/hero-person-3.jpg",
  "/hero-person-4.jpg",
];

type Screen =
  | { type: "home" }
  | { type: "config"; subject: Subject }
  | { type: "exam"; subject: Subject; questionCount: number; timeLimit: number | null }
  | { type: "results"; result: ExamResult };

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const [screen, setScreen] = useState<Screen>({ type: "home" });

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

  // Home screen
  return (
    <div className="min-h-screen paper-texture relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="hero-orb absolute left-[-8%] top-[-6%] h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[96px] pointer-events-none hidden md:block" />
      <div className="hero-orb absolute bottom-[-10%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-blue-500/15 blur-[96px] pointer-events-none [animation-delay:2s] hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* New Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[100svh] py-12 sm:py-16 lg:py-20">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-border mb-6 sm:mb-8 backdrop-blur-xl shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(139,92,246,0.8)] animate-pulse" />
              <span className="text-foreground/70 text-[9px] font-black uppercase tracking-[0.4em]">
                Advanced Examination Systems
              </span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black text-foreground mb-6 sm:mb-8 tracking-tighter leading-[0.95] text-balance">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/60 animate-gradient-x">
                Academic Legacy
              </span>
            </h1>
            
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed font-medium text-balance">
              The premier preparation platform for FCAI students. High-fidelity simulations, real-time analytics, and exhaustive subject coverage.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <button 
                onClick={() => {
                  const el = document.getElementById('subjects-grid');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-hover-base btn-hover-solid btn-hover-lift flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-xl shadow-primary/25"
              >
                Explore Subjects
                <LucideIcon name="ArrowDown" size={18} strokeWidth={3} />
              </button>
              
              <div className="flex -space-x-3 justify-center" aria-hidden="true">
                {heroAvatars.map((avatarSrc) => (
                  <div
                    key={avatarSrc}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden shadow-lg"
                  >
                    <img
                      src={avatarSrc}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                  +2k
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 font-bold uppercase tracking-widest text-center lg:text-left">
                Join 2,000+ Students
              </p>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="flex-1 relative w-full max-w-md sm:max-w-xl lg:max-w-none animate-scale-in transform-gpu">
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-square w-full">
              {/* Abstract Shape Background */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-primary/20 via-blue-500/10 to-transparent rotate-3 scale-95 blur-xl opacity-80" />
              
              {/* Main Decorative Container */}
              <div className="absolute inset-0 glass-card rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 flex items-center justify-center overflow-hidden border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                
                {/* Floating Elements */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full relative z-10">
                  {heroItems.map((item) => (
                    <div
                      key={item.title}
                      className={item.offsetClassName}
                    >
                      <div className={`hero-card ${item.floatClassName} p-4 sm:p-6`}>
                        <LucideIcon name={item.icon} className={`${item.iconClassName} mb-3 sm:mb-4`} size={28} />
                        <h3 className="font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none hidden sm:block" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full pointer-events-none hidden sm:block" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div id="subjects-grid" className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-4">Core Curriculum</h2>
            <p className="text-muted-foreground font-medium max-w-lg">Select a specialized track to begin your examination simulation. All content is aligned with current academic standards.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-white/5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Available Subjects: <span className="text-foreground ml-1">{subjects.length}</span>
          </div>
        </div>

        {/* Subject grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in pb-24">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onStart={(s) => setScreen({ type: "config", subject: s })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
