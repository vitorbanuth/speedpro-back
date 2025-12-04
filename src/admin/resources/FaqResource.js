import { Faq } from "../../models/Faq.js";

export const FaqResource = {
  resource: Faq,
  options: {
    listProperties: ["id", "question", "answer"],
    properties: {
      question: {
        position: 1,
      },
      answer: {
        position: 2,
      },
    },
  },
};
