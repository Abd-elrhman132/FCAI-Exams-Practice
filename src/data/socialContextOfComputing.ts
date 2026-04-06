import { Subject } from "@/types";

export const socialContextOfComputing: Subject = {
  id: "hu121",
  name: "Social Context of Computing",
  icon: "Globe",
  description:
    "Impact of computing on society, ethics, and professional responsibility.",
  color: "#6B7280",
  questions: [
    {
      id: "hu121",
      text: "Which of the following is a primary concern in the ethics of AI?",
      options: [
        "Algorithmic Bias",
        "CPU Clock Speed",
        "RAM Capacity",
        "GPU Core Count",
      ],
      correctIndex: 0,
      explanation:
        "Algorithmic bias is a significant ethical concern in AI development.",
    },
  ],
};
