import { describe, expect, it } from "vitest";
import { subjectSummaries } from ".";
import { introToMultimedia } from "./introToMultimedia";
import { getSubjectChapterCount, getSubjectQuestions } from "@/lib/subjectUtils";

const fullSubjects = [
  introToMultimedia,
];

describe("subject summaries", () => {
  it("match the full subject question banks", () => {
    for (const summary of subjectSummaries) {
      const subject = fullSubjects.find(
        (item) => item.id.toLowerCase() === summary.id.toLowerCase()
      );

      expect(subject, summary.id).toBeDefined();
      expect(summary.questionCount, summary.id).toBe(getSubjectQuestions(subject!).length);
      expect(summary.chapterCount, summary.id).toBe(getSubjectChapterCount(subject!));
    }
  });
});
