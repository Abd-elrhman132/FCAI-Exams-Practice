import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LucideIcon from "@/components/LucideIcon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center paper-texture p-4">
      <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 max-w-md w-full text-center shadow-2xl animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
        
        <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary shadow-xl">
          <LucideIcon name="ShieldAlert" size={48} strokeWidth={1.5} />
        </div>

        <h1 className="font-heading text-6xl font-black text-foreground mb-4 tracking-tighter">404</h1>
        <p className="text-xl font-bold text-foreground/80 mb-8 tracking-tight">Oops! Page not found</p>
        
        <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <a 
          href="/" 
          className="btn-hover-base btn-hover-solid btn-hover-lift inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-primary-foreground shadow-xl shadow-primary/20"
        >
          <LucideIcon name="Home" size={16} strokeWidth={3} />
          Return to Portal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
