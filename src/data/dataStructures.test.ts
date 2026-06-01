import { describe, expect, it } from "vitest";
import { dataStructures } from "./dataStructures";

const getQuestion = (id: string) => {
  const question = dataStructures.questions.find((item) => item.id === id);

  expect(question, `Missing question ${id}`).toBeDefined();

  return question!;
};

describe("data structure questions", () => {
  it("has valid answers and no duplicate options", () => {
    expect(dataStructures.questions).toHaveLength(290);

    for (const question of dataStructures.questions) {
      expect(question.options, question.id).toHaveLength(4);
      expect(new Set(question.options).size, question.id).toBe(4);
      expect(question.correctIndex, question.id).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex, question.id).toBeLessThan(question.options.length);
    }
  });

  it.each([
    ["cs211-lec2-q2", "double myList[10];"],
    ["cs211-ch2-q10", "for (IntSLLNode *pt = head; pt != nullptr; pt = pt->next)"],
    ["cs211-lec5-q10", "int*"],
    ["cs211-lec8-q5", "A[0]"],
    ["cs211-lec8-q6", "A[2 * i + 1]"],
    ["cs211-lec8-q7", "A[2 * i + 2]"],
    ["cs211-lec8-q8", "A[(i - 1) / 2]"],
    ["cs211-lec10-q23", "(hash(key) + i * i) % tableSize"],
  ])("uses the expected C++ answer for %s", (id, expectedAnswer) => {
    const question = getQuestion(id);

    expect(question.options[question.correctIndex]).toBe(expectedAnswer);
  });
});
