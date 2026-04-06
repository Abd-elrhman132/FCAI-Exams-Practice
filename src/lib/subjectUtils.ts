import { Chapter, Subject } from "@/types";

export function getSubjectQuestions(subject: Subject) {
  return subject.chapters?.flatMap((chapter) => chapter.questions) ?? subject.questions;
}

export function getSubjectChapterCount(subject: Subject) {
  return subject.chapters?.length ?? 0;
}

export function createSubjectForChapter(subject: Subject, chapter: Chapter): Subject {
  return {
    ...subject,
    selectedChapter: chapter,
    chapters: [chapter],
    questions: chapter.questions,
  };
}
