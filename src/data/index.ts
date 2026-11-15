import { Subject, SubjectSummary } from "@/types";

export const subjectSummaries: SubjectSummary[] = [
  {
    id: "MM304",
    name: "Intro to Multimedia",
    icon: "Film",
    description:
      "Multimedia modalities, authoring tools, XR technologies, hypermedia, web standards, and digital media history.",
    color: "#8B5CF6",
    professor: "Prof. Hossam Moftah",
    chapterCount: 4,
    questionCount: 160,
    chapters: [
      {
        id: "mm304-lecture-1",
        name: "Lecture 1: Introduction to Multimedia",
        questionCount: 40,
        description: "Modalities, authoring tools, XR (AR/VR/MR), e-learning, animation, and technology timeline.",
      },
      {
        id: "mm304-lecture-2",
        name: "Lecture 2: Multimedia Software Tools & Graphics Data Representation",
        questionCount: 40,
        description: "Audio/video editing tools, 3D APIs, future trends, bit depth calculations, and LUTs.",
      },
      {
        id: "mm304-lecture-3",
        name: "Lecture 3: Image Formats, Color Science & Color Models",
        questionCount: 40,
        description: "GIF, JPEG, PNG, TIFF, optics, reflection, additive RGB and subtractive CMYK.",
      },
      {
        id: "mm304-lecture-4",
        name: "Lecture 4: Lossless Compression & Information Theory",
        questionCount: 40,
        description: "Entropy, self-information, RLC, Shannon-Fano algorithm, and Huffman coding.",
      },
    ],
  },
];

const subjectLoaders: Record<string, () => Promise<Subject>> = {
  MM304: () => import("./introToMultimedia").then((module) => module.introToMultimedia),
  mm304: () => import("./introToMultimedia").then((module) => module.introToMultimedia),
};

export async function loadSubject(subjectId: string) {
  const normalizedId =
    Object.keys(subjectLoaders).find(
      (key) => key.toLowerCase() === subjectId.toLowerCase()
    ) || subjectId;
  const loader = subjectLoaders[normalizedId];

  if (!loader) {
    throw new Error(`Unknown subject: ${subjectId}`);
  }

  return loader();
}

export const subjects = subjectSummaries;
