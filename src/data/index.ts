import { Subject, SubjectSummary } from "@/types";

export const subjectSummaries: SubjectSummary[] = [
  {
    id: "it351",
    name: "Computer Networking",
    icon: "Network",
    description: "Network protocols, architectures, and data communication.",
    color: "#10B981",
    professor: "Dr. Eissa Sabry",
    chapterCount: 9,
    questionCount: 260,
  },
  {
    id: "CS251",
    name: "Computer Graphics",
    icon: "Shapes",
    description: "Digital images, geometric primitives, transformations, curves, and splines.",
    color: "#F59E0B",
    professor: "Dr. Mohamed Salah",
    chapterCount: 5,
    questionCount: 90,
  },
  {
    id: "cs211",
    name: "Data Structures",
    icon: "Database",
    description: "Fundamental concepts of data organization and management.",
    color: "#3B82F6",
    professor: "Dr. Noha Yehia",
    chapterCount: 10,
    questionCount: 290,
  },
  {
    id: "hu121",
    name: "Social Context of Computing",
    icon: "Globe",
    description:
      "Impact of computing on society, ethics, diversity, cybersecurity, and digital culture.",
    color: "#4F46E5",
    professor: "Noha Shabriya",
    chapterCount: 7,
    questionCount: 210,
  },
];

const subjectLoaders: Record<string, () => Promise<Subject>> = {
  it351: () => import("./computerNetworking").then((module) => module.computerNetworking),
  CS251: () => import("./computerGraphics").then((module) => module.computerGraphics),
  cs211: () => import("./dataStructures").then((module) => module.dataStructures),
  hu121: () =>
    import("./socialContextOfComputing").then((module) => module.socialContextOfComputing),
};

export async function loadSubject(subjectId: string) {
  const loader = subjectLoaders[subjectId];

  if (!loader) {
    throw new Error(`Unknown subject: ${subjectId}`);
  }

  return loader();
}

export const subjects = subjectSummaries;
