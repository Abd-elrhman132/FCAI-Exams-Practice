import {
  ArrowDown, ArrowLeft, ArrowRight, BarChart3, BookOpen, Bookmark,
  BookmarkCheck, Bot, Brain, Calculator, Check, ChevronLeft, ChevronRight,
  CircleAlert, Clock, Cpu, Database, Filter, Globe, GraduationCap, Home,
  Infinity as InfinityIcon, Info, ListChecks, Network, PartyPopper,
  RefreshCcw, Search, SearchCheck, Shapes, ShieldAlert, Sparkles, Target,
  Timer, Trophy, X, Zap, LucideProps
} from "lucide-react";
import { IconName } from "@/types";

const iconMap = {
  ArrowDown, ArrowLeft, ArrowRight, BarChart3, BookOpen, Bookmark,
  BookmarkCheck, Bot, Brain, Calculator, Check, ChevronLeft, ChevronRight,
  CircleAlert, Clock, Cpu, Database, Filter, Globe, GraduationCap, Home,
  Infinity: InfinityIcon, Info, ListChecks, Network, PartyPopper,
  RefreshCcw, Search, SearchCheck, Shapes, ShieldAlert, Sparkles, Target,
  Timer, Trophy, X, Zap
};

interface LucideIconProps extends LucideProps {
  name: IconName;
}

const LucideIcon = ({ name, ...props }: LucideIconProps) => {
  const Icon = iconMap[name as keyof typeof iconMap];
  if (!Icon) {
    console.warn(`Icon ${name} is missing from LucideIcon.tsx`);
    return null;
  }
  return <Icon {...props} />;
};

export default LucideIcon;
