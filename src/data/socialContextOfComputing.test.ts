import { describe, expect, it } from "vitest";
import { socialContextOfComputing } from "./socialContextOfComputing";

describe("social context of computing questions", () => {
  it("contains seven chapters with 30 questions each", () => {
    expect(socialContextOfComputing.chapters).toHaveLength(7);
    expect(socialContextOfComputing.questions).toHaveLength(210);

    for (const chapter of socialContextOfComputing.chapters ?? []) {
      expect(chapter.questions, chapter.id).toHaveLength(30);
    }
  });

  it("has valid answer indexes for every question", () => {
    for (const question of socialContextOfComputing.questions) {
      expect(question.options.length, question.id).toBeGreaterThanOrEqual(2);
      expect(question.correctIndex, question.id).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex, question.id).toBeLessThan(question.options.length);
    }
  });
});
