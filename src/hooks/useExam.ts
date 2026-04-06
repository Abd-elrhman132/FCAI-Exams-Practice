import { useState, useCallback, useMemo } from "react";
import { Subject, ExamAnswer, ExamResult } from "@/types";
import { getSubjectQuestions } from "@/lib/subjectUtils";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useExam(subject: Subject, questionCount: number) {
  const questions = useMemo(
    () => shuffleArray(getSubjectQuestions(subject)).slice(0, questionCount),
    [subject, questionCount]
  );

  const [answers, setAnswers] = useState<ExamAnswer[]>(
    () => new Array(questions.length).fill(null)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const selectAnswer = useCallback((index: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = index;
      return next;
    });
  }, [currentIndex]);

  const goTo = useCallback((i: number) => {
    if (i >= 0 && i < questions.length) setCurrentIndex(i);
  }, [questions.length]);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const submit = useCallback(() => setSubmitted(true), []);

  const result: ExamResult | null = useMemo(() => {
    if (!submitted) return null;
    let correct = 0, incorrect = 0, skipped = 0;
    questions.forEach((q, i) => {
      if (answers[i] === null) skipped++;
      else if (answers[i] === q.correctIndex) correct++;
      else incorrect++;
    });
    return {
      subject,
      questions,
      answers,
      correct,
      incorrect,
      skipped,
      score: Math.round((correct / questions.length) * 100),
    };
  }, [submitted, questions, answers, subject]);

  const unansweredCount = answers.filter((a) => a === null).length;

  return {
    questions,
    answers,
    currentIndex,
    submitted,
    selectAnswer,
    next,
    prev,
    goTo,
    submit,
    result,
    unansweredCount,
    currentQuestion: questions[currentIndex],
    isFirst: currentIndex === 0,
    isLast: currentIndex === questions.length - 1,
  };
}
