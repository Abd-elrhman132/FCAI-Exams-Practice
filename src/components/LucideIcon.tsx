import {
  ArrowDown, ArrowLeft, ArrowRight, BookOpen, Bot, Brain, Calculator,
  Check, ChevronLeft, ChevronRight, CircleAlert, Clock, Cpu, Database,
  Globe, GraduationCap, Home, Infinity as InfinityIcon, Info, ListChecks, Network,
  PartyPopper, RefreshCcw, SearchCheck, Shapes, ShieldAlert, Target,
  Timer, Trophy, X, LucideProps
} from "lucide-react";
import { IconName } from "@/types";

const iconMap = {
  ArrowDown, ArrowLeft, ArrowRight, BookOpen, Bot, Brain, Calculator,
  Check, ChevronLeft, ChevronRight, CircleAlert, Clock, Cpu, Database,
  Globe, GraduationCap, Home, Infinity: InfinityIcon, Info, ListChecks, Network,
  PartyPopper, RefreshCcw, SearchCheck, Shapes, ShieldAlert, Target,
  Timer, Trophy, X
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
