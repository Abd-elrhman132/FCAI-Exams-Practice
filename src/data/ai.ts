import { Subject } from "@/types";

export const ai: Subject = {
  id: "CS261",
  name: "AI",
  icon: "Bot",
  description: "Introduction to Artificial Intelligence and Machine Learning.",
  color: "#8B5CF6",
  questions: [
    {
      id: "CS261",
      text: "In AI, what does 'BFS' stand for?",
      options: [
        "Best First Search",
        "Breadth First Search",
        "Binary First Search",
        "Basic Functional Search",
      ],
      correctIndex: 1,
      explanation: "BFS stands for Breadth First Search.",
    },
  ],
};
