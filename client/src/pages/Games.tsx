import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Game {
  id: string;
  title: string;
  subject: "German" | "Maths";
  grade: number;
  description: string;
  icon: string;
  type: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const games: Game[] = [
  // German Games
  {
    id: "german-vocab",
    title: "Vocabulary Match",
    subject: "German",
    grade: 1,
    description: "Match German words with their English translations in a fun card game. Perfect for building vocabulary.",
    icon: "🎴",
    type: "Memory Game",
    difficulty: "Easy",
  },
  {
    id: "german-spelling",
    title: "Spelling Bee",
    subject: "German",
    grade: 2,
    description: "Listen to German words and spell them correctly to earn points. Improve pronunciation and spelling skills.",
    icon: "🐝",
    type: "Spelling",
    difficulty: "Medium",
  },
  {
    id: "german-hangman",
    title: "Hangman - German Edition",
    subject: "German",
    grade: 3,
    description: "Classic hangman game with German vocabulary words. Test your letter recognition and vocabulary knowledge.",
    icon: "🎮",
    type: "Word Game",
    difficulty: "Medium",
  },
  {
    id: "german-quiz",
    title: "German Grammar Quiz",
    subject: "German",
    grade: 4,
    description: "Test your German grammar knowledge with interactive quizzes. Cover verbs, nouns, adjectives, and more.",
    icon: "❓",
    type: "Quiz",
    difficulty: "Hard",
  },
  {
    id: "german-conversation",
    title: "Conversation Practice",
    subject: "German",
    grade: 5,
    description: "Practice real-world German conversations with AI. Learn natural dialogue and improve speaking skills.",
    icon: "💬",
    type: "Dialogue",
    difficulty: "Hard",
  },

  // Maths Games
  {
    id: "maths-mental",
    title: "Mental Math Challenge",
    subject: "Maths",
    grade: 1,
    description: "Quick mental math problems to improve calculation speed. Start with easy problems and progress to harder ones.",
    icon: "⚡",
    type: "Speed Game",
    difficulty: "Easy",
  },
  {
    id: "maths-puzzle",
    title: "Number Puzzle",
    subject: "Maths",
    grade: 2,
    description: "Solve number puzzles and logic problems. Develop critical thinking and problem-solving skills.",
    icon: "🧩",
    type: "Puzzle",
    difficulty: "Medium",
  },
  {
    id: "maths-race",
    title: "Math Race",
    subject: "Maths",
    grade: 2,
    description: "Race against the clock to solve math problems correctly. Beat your personal best and compete with friends.",
    icon: "🏁",
    type: "Speed Game",
    difficulty: "Medium",
  },
  {
    id: "maths-fraction",
    title: "Fraction Master",
    subject: "Maths",
    grade: 3,
    description: "Learn and practice fractions with interactive games. Master equivalent fractions, addition, and subtraction.",
    icon: "📐",
    type: "Concept Game",
    difficulty: "Medium",
  },
  {
    id: "maths-geometry",
    title: "Geometry Quest",
    subject: "Maths",
    grade: 4,
    description: "Explore shapes, angles, and geometric concepts through gameplay. Build spatial reasoning skills.",
    icon: "🔺",
    type: "Exploration",
    difficulty: "Hard",
  },
];

export default function Games() {
  const germanGames = games.filter((g) => g.subject === "German");
  const mathsGames = games.filter((g) => g.subject === "Maths");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                🎮 Learning Games
              </h1>
              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Learn German and Maths through fun interactive games
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
        {/* German Games Section */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🇩🇪 German Games
              </h2>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-semibold">
                Interactive
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Make learning German fun with interactive games. Build vocabulary, practice grammar, and improve pronunciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanGames.map((game) => (
              <div
                key={game.id}
                className="group bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/60 rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-cyan-300 text-sm mt-1">Grade {game.grade}</p>
                  </div>
                  <span className="text-4xl ml-3">{game.icon}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {game.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-200">
                      {game.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                  <Button
                    size="sm"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white border-0"
                  >
                    Play Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maths Games Section */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🔢 Maths Games
              </h2>
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-purple-300 text-sm font-semibold">
                Interactive
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Master math skills while having fun. Solve puzzles, race against the clock, and unlock achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsGames.map((game) => (
              <div
                key={game.id}
                className="group bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md border border-purple-400/30 hover:border-purple-400/60 rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-purple-300 text-sm mt-1">Grade {game.grade}</p>
                  </div>
                  <span className="text-4xl ml-3">{game.icon}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {game.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-200">
                      {game.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                  <Button
                    size="sm"
                    className="bg-purple-500 hover:bg-purple-600 text-white border-0"
                  >
                    Play Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="mb-20">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">💡 Tips for Learning Through Games</h3>
            <p className="text-gray-300 text-lg">
              Maximize your learning with these proven strategies for game-based education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-md border border-emerald-400/50 rounded-2xl p-8 hover:border-emerald-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <h4 className="text-xl font-bold text-white">Set Goals</h4>
              </div>
              <p className="text-gray-300">
                Try to beat your previous score or complete games within a time limit. Challenge yourself to improve.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-md border border-blue-400/50 rounded-2xl p-8 hover:border-blue-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📈</span>
                <h4 className="text-xl font-bold text-white">Track Progress</h4>
              </div>
              <p className="text-gray-300">
                Keep track of which games you've completed and which areas need more practice. Monitor your improvement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/30 to-yellow-500/30 backdrop-blur-md border border-orange-400/50 rounded-2xl p-8 hover:border-orange-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏆</span>
                <h4 className="text-xl font-bold text-white">Earn Badges</h4>
              </div>
              <p className="text-gray-300">
                Complete games and challenges to unlock special badges and achievements. Celebrate your success!
              </p>
            </div>
          </div>
        </section>

        {/* Game Types Info */}
        <section className="bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-pink-600/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">🎮 Game Types Available</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Our games include memory games, spelling challenges, quizzes, speed games, puzzles, and more. Each game is designed to make learning engaging and fun while building real skills.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Memory Games</span>
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Speed Challenges</span>
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Puzzles</span>
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Quizzes</span>
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Interactive Lessons</span>
          </div>
        </section>
      </main>
    </div>
  );
}

