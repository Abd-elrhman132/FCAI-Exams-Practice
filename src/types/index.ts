import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Chapter {
  id: string;
  name: string;
  description?: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  icon: IconName;
  description: string;
  color: string;
  professor?: string;
  chapters?: Chapter[];
  selectedChapter?: Chapter;
  questions: Question[];
}

export type ExamAnswer = number | null;

export interface ExamState {
  subject: Subject;
  questions: Question[];
  answers: ExamAnswer[];
  currentIndex: number;
  timeLimit: number | null;
  submitted: boolean;
}

export interface ExamResult {
  subject: Subject;
  questions: Question[];
  answers: ExamAnswer[];
  correct: number;
  incorrect: number;
  skipped: number;
  score: number;
}
