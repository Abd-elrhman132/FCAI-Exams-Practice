const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto border-t border-border bg-background/80 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <div className="text-center text-muted-foreground/40 text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()} FCAI Exam Practice • Built for Excellence
        </div>
        <div className="flex items-center gap-2 text-muted-foreground/60 text-sm font-bold uppercase tracking-widest">
          Developed by 
          <a 
            href="https://abdelrahmanahmed-ten.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
          >
            Abdelrahman Ahmed
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
