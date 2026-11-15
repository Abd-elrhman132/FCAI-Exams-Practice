import { describe, expect, it } from "vitest";
import { fileManagement } from "./fileManagement";

describe("file management questions", () => {
  it("is grouped into chapters with valid questions", () => {
    expect(fileManagement.chapters).toHaveLength(1);
    expect(fileManagement.questions).toHaveLength(20);

    const chapter1 = fileManagement.chapters?.[0];
    expect(chapter1?.name).toBe("Chapter 1: Introduction to File Management & Storage Hierarchy");
    expect(chapter1?.questions).toHaveLength(20);

    for (const question of fileManagement.questions) {
      expect(question.options.length, question.id).toBeGreaterThanOrEqual(2);
      expect(new Set(question.options).size, question.id).toBe(question.options.length);
      expect(question.correctIndex, question.id).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex, question.id).toBeLessThan(question.options.length);
      expect(question.text.length, question.id).toBeGreaterThan(5);
    }
  });

  it("matches sample answers correctly", () => {
    // Q1: B (index 1) - Volatile
    expect(fileManagement.questions[0].correctIndex).toBe(1);
    // Q2: B (index 1) - Sequence of bytes
    expect(fileManagement.questions[1].correctIndex).toBe(1);
    // Q4: C (index 2) - 10 ms
    expect(fileManagement.questions[3].correctIndex).toBe(2);
    // Q6: B (index 1) - minimize disk accesses
    expect(fileManagement.questions[5].correctIndex).toBe(1);
    // Q7: D (index 3) - Magnetic tape
    expect(fileManagement.questions[6].correctIndex).toBe(3);
    // Q8: C (index 2) - B-trees
    expect(fileManagement.questions[7].correctIndex).toBe(2);
    // Q9: C (index 2) - B+ trees and hashing
    expect(fileManagement.questions[8].correctIndex).toBe(2);
    // TF1 (Q11): True (index 0)
    expect(fileManagement.questions[10].correctIndex).toBe(0);
    // TF2 (Q12): False (index 1)
    expect(fileManagement.questions[11].correctIndex).toBe(1);
    // TF10 (Q20): True (index 0)
    expect(fileManagement.questions[19].correctIndex).toBe(0);
  });
});
