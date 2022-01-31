export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Who is Banksy?",
    image:
      "https://images.unsplash.com/photo-1516345079912-c3e011a5a848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
    answers: [
      "No one knows",
      "Boris Johnson",
      "Elon Musk",
      "God Almighty",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "How much did Beeple's Everydays: the First 5000 Days sell for?",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Everydays%2C_the_First_5000_Days.jpg/270px-Everydays%2C_the_First_5000_Days.jpg",
    answers: ["$1", "$42", "$69 million", "Beeple who?"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What does JPEG stand for?",
    image:
      "https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
    answers: ["Joint Photographic Experts Group", "Jolly Photographic Experts Group", "Joint Photographic Ether Group", "Joint Photographic Experts Grant"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "What's the first most used dApp on Ethereum?",
    answers: ["Uniswap", "CryptoKitty", "Crypto Punks", "Yearn"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Who created Bitcoin?",
    answers: ["Vitalik Buterin", "Elon Musk", "Do Kwon", "No one knows"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
