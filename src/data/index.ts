import { Subject, SubjectSummary } from "@/types";

export const subjectSummaries: SubjectSummary[] = [
  {
    id: "MM304",
    name: "Intro to Multimedia",
    icon: "Film",
    description:
      "Multimedia modalities, authoring tools, XR technologies, hypermedia, web standards, and digital media history.",
    color: "#8B5CF6",
    professor: "Dr. Hossam Moftah",
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
  {
    id: "IS231",
    name: "File Management and Processing",
    icon: "HardDrive",
    description:
      "Storage media, secondary storage hierarchy, physical vs. logical files, buffering, indexing, B-trees, B+ trees, and hashing techniques.",
    color: "#10B981",
    professor: "Dr. Hager Mohammed",
    chapterCount: 5,
    questionCount: 100,
    chapters: [
      {
        id: "is231-chapter-1",
        name: "Chapter 1: Introduction to File Management & Storage Hierarchy",
        questionCount: 20,
        description:
          "RAM limitations, physical vs. logical files, storage hierarchy (HDD, SSD, tape), and B-trees.",
      },
      {
        id: "is231-chapter-2",
        name: "Chapter 2: Disks, Physical Organization & Performance Calculations",
        questionCount: 20,
        description:
          "Platters, cylinders, sectors, capacity calculations, seek time, rotational delay, and clusters.",
      },
      {
        id: "is231-chapter-3",
        name: "Chapter 3: I/O Operations, Buffering & Buffer Management",
        questionCount: 20,
        description:
          "File manager, system I/O buffers, DMA, disk controller, double buffering, LRU, buffer pools, and scatter/gather I/O.",
      },
      {
        id: "is231-chapter-4",
        name: "Chapter 4: Stream Files, Fields, Records & Record Organization",
        questionCount: 20,
        description:
          "Stream files, fields, records, field-separation methods, fixed-length fields, length indicators, delimiters, and RRN.",
      },
      {
        id: "is231-chapter-5",
        name: "Chapter 5: Keys, Searching, Blocking & File Organization",
        questionCount: 20,
        description:
          "Primary keys, secondary keys, canonical form, sequential search, blocking factor, direct access, file headers, and hashing.",
      },
    ],
  },
];

const subjectLoaders: Record<string, () => Promise<Subject>> = {
  MM304: () => import("./introToMultimedia").then((module) => module.introToMultimedia),
  mm304: () => import("./introToMultimedia").then((module) => module.introToMultimedia),
  IS231: () => import("./fileManagement").then((module) => module.fileManagement),
  is231: () => import("./fileManagement").then((module) => module.fileManagement),
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
