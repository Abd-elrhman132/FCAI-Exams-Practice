import { describe, expect, it } from "vitest";
import { introToMultimedia } from "./introToMultimedia";

describe("intro to multimedia questions", () => {
  it("is grouped into chapters with valid questions", () => {
    expect(introToMultimedia.chapters).toHaveLength(4);
    expect(introToMultimedia.questions).toHaveLength(160);

    const chapter1 = introToMultimedia.chapters?.[0];
    const chapter2 = introToMultimedia.chapters?.[1];
    const chapter3 = introToMultimedia.chapters?.[2];
    const chapter4 = introToMultimedia.chapters?.[3];

    expect(chapter1?.name).toBe("Lecture 1: Introduction to Multimedia");
    expect(chapter1?.questions.length).toBe(40);

    expect(chapter2?.name).toBe("Lecture 2: Multimedia Software Tools & Graphics Data Representation");
    expect(chapter2?.questions.length).toBe(40);

    expect(chapter3?.name).toBe("Lecture 3: Image Formats, Color Science & Color Models");
    expect(chapter3?.questions.length).toBe(40);

    expect(chapter4?.name).toBe("Lecture 4: Lossless Compression & Information Theory");
    expect(chapter4?.questions.length).toBe(40);

    for (const question of introToMultimedia.questions) {
      expect(question.options, question.id).toHaveLength(4);
      expect(new Set(question.options).size, question.id).toBe(4);
      expect(question.correctIndex, question.id).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex, question.id).toBeLessThan(question.options.length);
      expect(question.text.length, question.id).toBeGreaterThan(5);
    }
  });

  it("has correct answer matching for lecture 1 sample questions", () => {
    // Q1: B (index 1)
    expect(introToMultimedia.questions[0].correctIndex).toBe(1);
    // Q2: D (index 3)
    expect(introToMultimedia.questions[1].correctIndex).toBe(3);
    // Q40: A (index 0)
    expect(introToMultimedia.questions[39].correctIndex).toBe(0);
  });

  it("has correct answer matching for lecture 2 sample questions", () => {
    // Lec 2 Q1: B (index 1) - Digital Audio
    expect(introToMultimedia.questions[40].correctIndex).toBe(1);
    // Lec 2 Q2: C (index 2) - Cool Edit
    expect(introToMultimedia.questions[41].correctIndex).toBe(2);
    // Lec 2 Q32: A (index 0) - 37.5 KB
    expect(introToMultimedia.questions[71].correctIndex).toBe(0);
    // Lec 2 Q33: C (index 2) - 300 KB
    expect(introToMultimedia.questions[72].correctIndex).toBe(2);
    // Lec 2 Q40: B (index 1) - Multispectral / hyperspectral
    expect(introToMultimedia.questions[79].correctIndex).toBe(1);
  });

  it("has correct answer matching for lecture 3 sample questions", () => {
    // Lec 3 Q1: B (index 1) - GIF
    expect(introToMultimedia.questions[80].correctIndex).toBe(1);
    // Lec 3 Q2: C (index 2) - JPEG
    expect(introToMultimedia.questions[81].correctIndex).toBe(2);
    // Lec 3 Q27: C (index 2) - 300,000 km/s
    expect(introToMultimedia.questions[106].correctIndex).toBe(2);
    // Lec 3 Q35: C (index 2) - Yellow (R + G)
    expect(introToMultimedia.questions[114].correctIndex).toBe(2);
    // Lec 3 Q38: B (index 1) - (0.8, 0, 0.5)
    expect(introToMultimedia.questions[117].correctIndex).toBe(1);
    // Lec 3 Q40: B (index 1) - subtractive printing
    expect(introToMultimedia.questions[119].correctIndex).toBe(1);
  });

  it("has correct answer matching for lecture 4 sample questions", () => {
    // Lec 4 Q1: B (index 1) - reduce storage and bandwidth
    expect(introToMultimedia.questions[120].correctIndex).toBe(1);
    // Lec 4 Q7: C (index 2) - B0 / B1
    expect(introToMultimedia.questions[126].correctIndex).toBe(2);
    // Lec 4 Q8: B (index 1) - Entropy
    expect(introToMultimedia.questions[127].correctIndex).toBe(1);
    // Lec 4 Q31: D (index 3) - 2 bits
    expect(introToMultimedia.questions[150].correctIndex).toBe(3);
    // Lec 4 Q33: B (index 1) - 0.8113 bits
    expect(introToMultimedia.questions[152].correctIndex).toBe(1);
    // Lec 4 Q40: B (index 1) - NEW symbol
    expect(introToMultimedia.questions[159].correctIndex).toBe(1);
  });
});
