import { describe, expect, it } from "vitest";
import { subjectSummaries } from ".";
import { computerNetworking } from "./computerNetworking";
import { computerGraphics } from "./computerGraphics";
import { dataStructures } from "./dataStructures";
import { socialContextOfComputing } from "./socialContextOfComputing";
import { getSubjectChapterCount, getSubjectQuestions } from "@/lib/subjectUtils";

const fullSubjects = [
  computerNetworking,
  computerGraphics,
  dataStructures,
  socialContextOfComputing,
];

describe("subject summaries", () => {
  it("match the full subject question banks", () => {
    for (const summary of subjectSummaries) {
      const subject = fullSubjects.find((item) => item.id === summary.id);

      expect(subject, summary.id).toBeDefined();
      expect(summary.questionCount, summary.id).toBe(getSubjectQuestions(subject!).length);
      expect(summary.chapterCount, summary.id).toBe(getSubjectChapterCount(subject!));
    }
  });
});
