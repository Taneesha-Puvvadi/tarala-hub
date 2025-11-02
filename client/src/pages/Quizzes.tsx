import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Quiz {
  id: string;
  title: string;
  subject: "English" | "Maths" | "German";
  grade: number;
  description: string;
  icon: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questions: QuizQuestion[];
}

const quizzes: Quiz[] = [
  // English Quizzes
  {
    id: "english-vocab-1",
    title: "English Vocabulary - Grade 1",
    subject: "English",
    grade: 1,
    description: "Learn common English words and their meanings.",
    icon: "📚",
    difficulty: "Easy",
    questions: [
      {
        id: "q1",
        question: "What is the opposite of 'hot'?",
        options: ["Warm", "Cold", "Warm", "Freezing"],
        correctAnswer: 1,
        explanation: "The opposite of 'hot' is 'cold'. Cold means low temperature.",
      },
      {
        id: "q2",
        question: "Which word means a large body of water?",
        options: ["River", "Ocean", "Stream", "Pond"],
        correctAnswer: 1,
        explanation: "An ocean is a large body of water that covers most of Earth.",
      },
      {
        id: "q3",
        question: "What do we call a young dog?",
        options: ["Kitten", "Puppy", "Calf", "Chick"],
        correctAnswer: 1,
        explanation: "A young dog is called a puppy.",
      },
    ],
  },
  {
    id: "english-grammar-2",
    title: "English Grammar - Grade 2",
    subject: "English",
    grade: 2,
    description: "Test your knowledge of basic English grammar rules.",
    icon: "✏️",
    difficulty: "Medium",
    questions: [
      {
        id: "q1",
        question: "Which sentence is correct?",
        options: ["She go to school", "She goes to school", "She going to school", "She gone to school"],
        correctAnswer: 1,
        explanation: "The correct form is 'She goes to school' (third person singular present tense).",
      },
      {
        id: "q2",
        question: "What is the plural of 'child'?",
        options: ["Childs", "Children", "Childes", "Childies"],
        correctAnswer: 1,
        explanation: "The plural of 'child' is 'children' (irregular plural).",
      },
      {
        id: "q3",
        question: "Which word is a noun?",
        options: ["Run", "Happy", "Table", "Quickly"],
        correctAnswer: 2,
        explanation: "A noun is a person, place, or thing. 'Table' is a noun (a thing).",
      },
    ],
  },
  {
    id: "english-reading-3",
    title: "English Reading Comprehension - Grade 3",
    subject: "English",
    grade: 3,
    description: "Improve your reading comprehension skills with short passages.",
    icon: "📖",
    difficulty: "Hard",
    questions: [
      {
        id: "q1",
        question: "In the story, what did the character do first?",
        options: ["Went to school", "Ate breakfast", "Played outside", "Watched TV"],
        correctAnswer: 1,
        explanation: "Based on the passage, eating breakfast happened first in the morning.",
      },
      {
        id: "q2",
        question: "What was the main idea of the passage?",
        options: ["Sports are fun", "Learning is important", "Friends are helpful", "Pets need care"],
        correctAnswer: 2,
        explanation: "The main idea was about how friends help each other in difficult times.",
      },
      {
        id: "q3",
        question: "What does the word 'brave' mean in the passage?",
        options: ["Scared", "Courageous", "Angry", "Sad"],
        correctAnswer: 1,
        explanation: "'Brave' means courageous or showing courage despite fear.",
      },
    ],
  },

  // Maths Quizzes
  {
    id: "maths-addition-1",
    title: "Maths Addition - Grade 1",
    subject: "Maths",
    grade: 1,
    description: "Practice basic addition with numbers up to 20.",
    icon: "➕",
    difficulty: "Easy",
    questions: [
      {
        id: "q1",
        question: "What is 5 + 3?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
        explanation: "5 + 3 = 8. Count on your fingers: 5, 6, 7, 8.",
      },
      {
        id: "q2",
        question: "What is 10 + 5?",
        options: ["14", "15", "16", "17"],
        correctAnswer: 1,
        explanation: "10 + 5 = 15. Start from 10 and add 5 more.",
      },
      {
        id: "q3",
        question: "What is 7 + 2?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 1,
        explanation: "7 + 2 = 9. Count: 7, 8, 9.",
      },
    ],
  },
  {
    id: "maths-multiplication-2",
    title: "Maths Multiplication - Grade 2",
    subject: "Maths",
    grade: 2,
    description: "Learn multiplication facts and tables.",
    icon: "✖️",
    difficulty: "Medium",
    questions: [
      {
        id: "q1",
        question: "What is 3 × 4?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
        explanation: "3 × 4 = 12. This means 3 groups of 4, or 4 + 4 + 4 = 12.",
      },
      {
        id: "q2",
        question: "What is 5 × 6?",
        options: ["28", "29", "30", "31"],
        correctAnswer: 2,
        explanation: "5 × 6 = 30. This means 5 groups of 6, or 6 + 6 + 6 + 6 + 6 = 30.",
      },
      {
        id: "q3",
        question: "What is 7 × 8?",
        options: ["54", "55", "56", "57"],
        correctAnswer: 2,
        explanation: "7 × 8 = 56. Memorize this multiplication fact.",
      },
    ],
  },
  {
    id: "maths-fractions-3",
    title: "Maths Fractions - Grade 3",
    subject: "Maths",
    grade: 3,
    description: "Master fractions and parts of a whole.",
    icon: "🥧",
    difficulty: "Hard",
    questions: [
      {
        id: "q1",
        question: "What fraction is shaded if 2 out of 4 parts are colored?",
        options: ["1/2", "1/3", "1/4", "2/3"],
        correctAnswer: 0,
        explanation: "2 out of 4 parts equals 2/4, which simplifies to 1/2.",
      },
      {
        id: "q2",
        question: "Which fraction is larger: 1/2 or 1/3?",
        options: ["1/2", "1/3", "They are equal", "Cannot compare"],
        correctAnswer: 0,
        explanation: "1/2 is larger than 1/3. Half of something is more than a third.",
      },
      {
        id: "q3",
        question: "What is 1/4 + 1/4?",
        options: ["1/2", "1/8", "2/8", "1/4"],
        correctAnswer: 0,
        explanation: "1/4 + 1/4 = 2/4 = 1/2. Two quarters make one half.",
      },
    ],
  },

  // German Quizzes
  {
    id: "german-vocab-1",
    title: "German Vocabulary - Grade 1",
    subject: "German",
    grade: 1,
    description: "Learn basic German words and phrases.",
    icon: "🇩🇪",
    difficulty: "Easy",
    questions: [
      {
        id: "q1",
        question: "What does 'Hallo' mean in English?",
        options: ["Goodbye", "Hello", "Thank you", "Please"],
        correctAnswer: 1,
        explanation: "'Hallo' means 'Hello' in English. It's a common greeting.",
      },
      {
        id: "q2",
        question: "What does 'Danke' mean?",
        options: ["Please", "Thank you", "Excuse me", "Goodbye"],
        correctAnswer: 1,
        explanation: "'Danke' means 'Thank you' in English.",
      },
      {
        id: "q3",
        question: "What does 'Ja' mean?",
        options: ["No", "Yes", "Maybe", "I don't know"],
        correctAnswer: 1,
        explanation: "'Ja' means 'Yes' in English.",
      },
    ],
  },
  {
    id: "german-numbers-2",
    title: "German Numbers - Grade 2",
    subject: "German",
    grade: 2,
    description: "Practice German numbers and counting.",
    icon: "🔢",
    difficulty: "Medium",
    questions: [
      {
        id: "q1",
        question: "What is the German word for 'five'?",
        options: ["Vier", "Fünf", "Sechs", "Sieben"],
        correctAnswer: 1,
        explanation: "'Fünf' is the German word for 'five'.",
      },
      {
        id: "q2",
        question: "What is the German word for 'ten'?",
        options: ["Neun", "Acht", "Zehn", "Elf"],
        correctAnswer: 2,
        explanation: "'Zehn' is the German word for 'ten'.",
      },
      {
        id: "q3",
        question: "What is the German word for 'twenty'?",
        options: ["Neunzehn", "Zwanzig", "Dreißig", "Vierzig"],
        correctAnswer: 1,
        explanation: "'Zwanzig' is the German word for 'twenty'.",
      },
    ],
  },
  {
    id: "german-grammar-3",
    title: "German Grammar - Grade 3",
    subject: "German",
    grade: 3,
    description: "Test your German grammar knowledge.",
    icon: "📝",
    difficulty: "Hard",
    questions: [
      {
        id: "q1",
        question: "What is the correct article for 'Buch' (book)?",
        options: ["Die", "Das", "Der", "Den"],
        correctAnswer: 1,
        explanation: "'Das Buch' is correct. 'Buch' is a neuter noun.",
      },
      {
        id: "q2",
        question: "How do you say 'I am' in German?",
        options: ["Du bist", "Ich bin", "Er ist", "Wir sind"],
        correctAnswer: 1,
        explanation: "'Ich bin' means 'I am' in German.",
      },
      {
        id: "q3",
        question: "What is the plural of 'das Kind' (child)?",
        options: ["Die Kinder", "Die Kinds", "Das Kindes", "Der Kinder"],
        correctAnswer: 0,
        explanation: "The plural of 'das Kind' is 'die Kinder'.",
      },
    ],
  },
];

interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResult: boolean;
  selectedAnswer: number | null;
}

function QuizComponent({ quiz }: { quiz: Quiz }) {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResult: false,
    selectedAnswer: null,
  });

  const currentQuestion = quiz.questions[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerClick = (optionIndex: number) => {
    if (state.showResult) return;

    setState((prev) => ({
      ...prev,
      selectedAnswer: optionIndex,
      showResult: true,
    }));

    if (optionIndex === currentQuestion.correctAnswer) {
      setState((prev) => ({
        ...prev,
        score: prev.score + 1,
      }));
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Quiz completed
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: 0,
        selectedAnswer: null,
        showResult: false,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showResult: false,
      }));
    }
  };

  const handleRetakeQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      selectedAnswer: null,
    });
  };

  const quizCompleted = state.currentQuestionIndex === quiz.questions.length && state.showResult;
  const percentage = Math.round((state.score / quiz.questions.length) * 100);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/quizzes">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 mb-6">
              ← Back to Quizzes
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">{quiz.title}</h1>
          <p className="text-gray-300">{quiz.description}</p>
        </div>

        {!quizCompleted ? (
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">
                  Question {state.currentQuestionIndex + 1} of {quiz.questions.length}
                </span>
                <span className="text-sm text-cyan-300 font-semibold">Score: {state.score}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 border border-white/20">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((state.currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">{currentQuestion.question}</h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = state.selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correctAnswer;
                  const showCorrect = state.showResult && isCorrect;
                  const showIncorrect = state.showResult && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={state.showResult}
                      className={`w-full p-4 rounded-xl text-left font-semibold transition-all border ${
                        showCorrect
                          ? "bg-emerald-500/30 border-emerald-400/60 text-emerald-300"
                          : showIncorrect
                            ? "bg-rose-500/30 border-rose-400/60 text-rose-300"
                            : isSelected
                              ? "bg-white/20 border-white/40 text-white"
                              : "bg-white/10 border-white/20 text-gray-200 hover:bg-white/20 hover:border-white/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showCorrect && <span>✓</span>}
                        {showIncorrect && <span>✗</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {state.showResult && (
              <div className="mb-8 bg-white/10 border border-white/20 rounded-xl p-4">
                <p className="text-sm text-gray-200">
                  <span className="font-semibold text-cyan-300">Explanation: </span>
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {state.showResult && (
              <Button
                onClick={handleNextQuestion}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white border-0 py-3 text-lg font-semibold"
              >
                {isLastQuestion ? "Complete Quiz" : "Next Question"}
              </Button>
            )}
          </div>
        ) : (
          // Quiz Results
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md border border-purple-400/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Quiz Completed! 🎉</h2>

            {/* Score Circle */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border-4 border-cyan-400/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-300">{percentage}%</div>
                  <div className="text-sm text-gray-300 mt-2">
                    {state.score} / {quiz.questions.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Message */}
            <div className="mb-8">
              {percentage === 100 && (
                <p className="text-xl text-emerald-300 font-semibold">Perfect Score! Outstanding! 🌟</p>
              )}
              {percentage >= 80 && percentage < 100 && (
                <p className="text-xl text-cyan-300 font-semibold">Excellent Work! Keep it up! 👏</p>
              )}
              {percentage >= 60 && percentage < 80 && (
                <p className="text-xl text-amber-300 font-semibold">Good Job! Practice more to improve! 📚</p>
              )}
              {percentage < 60 && (
                <p className="text-xl text-rose-300 font-semibold">Keep Practicing! You'll improve! 💪</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleRetakeQuiz}
                className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 px-6 py-2"
              >
                Retake Quiz
              </Button>
              <Link href="/quizzes">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-2">
                  Back to Quizzes
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Quizzes() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  if (selectedQuiz) {
    return <QuizComponent quiz={selectedQuiz} />;
  }

  const englishQuizzes = quizzes.filter((q) => q.subject === "English");
  const mathsQuizzes = quizzes.filter((q) => q.subject === "Maths");
  const germanQuizzes = quizzes.filter((q) => q.subject === "German");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-500/20 border-emerald-400/50 text-emerald-300";
      case "Medium":
        return "bg-amber-500/20 border-amber-400/50 text-amber-300";
      case "Hard":
        return "bg-rose-500/20 border-rose-400/50 text-rose-300";
      default:
        return "bg-gray-500/20 border-gray-400/50 text-gray-300";
    }
  };

  const QuizCard = ({ quiz }: { quiz: Quiz }) => (
    <div
      onClick={() => setSelectedQuiz(quiz)}
      className="group bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/60 rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {quiz.title}
          </h3>
          <p className="text-cyan-300 text-sm mt-1">Grade {quiz.grade}</p>
        </div>
        <span className="text-4xl ml-3">{quiz.icon}</span>
      </div>

      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{quiz.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(quiz.difficulty)}`}>
          {quiz.difficulty}
        </span>
        <span className="text-xs text-gray-300">{quiz.questions.length} questions</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Navigation Header */}
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🎯 Interactive Quizzes
              </h1>
              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Test your knowledge with interactive multiple-choice questions
              </p>
            </div>
            <Link href="/">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                ← Back Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* English Quizzes */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                🇬🇧 English Quizzes
              </h2>
              <span className="px-3 py-1 bg-green-500/20 border border-green-400/50 rounded-full text-green-300 text-sm font-semibold">
                Interactive
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Improve your English vocabulary, grammar, and reading comprehension skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {englishQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>

        {/* Maths Quizzes */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🔢 Maths Quizzes
              </h2>
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-purple-300 text-sm font-semibold">
                Interactive
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Master math concepts through interactive quizzes covering arithmetic, multiplication, and fractions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>

        {/* German Quizzes */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🇩🇪 German Quizzes
              </h2>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-semibold">
                Interactive
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Learn German vocabulary, numbers, and grammar through engaging quizzes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>

        {/* Quiz Tips Section */}
        <section className="bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-pink-600/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">💡 Tips for Quiz Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🧠</span>
                <h4 className="text-lg font-bold text-white">Read Carefully</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Read each question and all answer options carefully before selecting your answer.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">⏱️</span>
                <h4 className="text-lg font-bold text-white">Take Your Time</h4>
              </div>
              <p className="text-gray-300 text-sm">
                There's no time limit. Think through each question and choose the best answer.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📚</span>
                <h4 className="text-lg font-bold text-white">Learn from Mistakes</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Read the explanations carefully to understand why an answer is correct or incorrect.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

