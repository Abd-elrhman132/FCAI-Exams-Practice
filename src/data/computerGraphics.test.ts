import { describe, expect, it } from "vitest";
import { computerGraphics } from "./computerGraphics";

describe("computer graphics questions", () => {
  it("is grouped into five parts with valid questions", () => {
    expect(computerGraphics.chapters).toHaveLength(5);
    expect(computerGraphics.questions).toHaveLength(90);

    for (const chapter of computerGraphics.chapters ?? []) {
      expect(chapter.name).toMatch(/^Part \d:/);
      expect(chapter.questions.length, chapter.id).toBeGreaterThan(0);
    }

    for (const question of computerGraphics.questions) {
      expect(question.options, question.id).toHaveLength(4);
      expect(new Set(question.options).size, question.id).toBe(4);
      expect(question.correctIndex, question.id).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex, question.id).toBeLessThan(question.options.length);
    }
  });

  it("keeps the known part sizes from the source material", () => {
    expect(computerGraphics.chapters?.map((chapter) => chapter.questions.length)).toEqual([
      20,
      20,
      10,
      20,
      20,
    ]);
  });
});
