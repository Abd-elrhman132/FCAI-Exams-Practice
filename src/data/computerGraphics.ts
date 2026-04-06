import { Subject } from "@/types";

export const computerGraphics: Subject = {
  id: "CS251",
  name: "Computer Graphics",
  icon: "Shapes",
  description: "Algorithms and techniques for digital image synthesis.",
  color: "#F59E0B",
  questions: [
    {
      id: "CS251",
      text: "Which algorithm is commonly used for line drawing in computer graphics?",
      options: ["Dijkstra", "Bresenham", "Kruskal", "Prim"],
      correctIndex: 1,
      explanation:
        "Bresenham's line algorithm is an efficient algorithm for drawing lines on a raster grid.",
    },
  ],
};
