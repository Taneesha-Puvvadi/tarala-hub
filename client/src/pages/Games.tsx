import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Game {
  id: string;
  title: string;
  subject: "German" | "Maths";
  grade: number;
  description: string;
  icon: string;
}

const games: Game[] = [
  {
    id: "german-vocab",
    title: "Vocabulary Match",
    subject: "German",
    grade: 2,
    description: "Match German words with their English translations in a fun card game.",
    icon: "🎴",
  },
  {
    id: "german-spelling",
    title: "Spelling Bee",
    subject: "German",
    grade: 3,
    description: "Listen to German words and spell them correctly to earn points.",
    icon: "🐝",
  },
  {
    id: "german-hangman",
    title: "Hangman - German Edition",
    subject: "German",
    grade: 4,
    description: "Classic hangman game with German vocabulary words.",
    icon: "🎮",
  },
  {
    id: "german-quiz",
    title: "German Grammar Quiz",
    subject: "German",
    grade: 5,
    description: "Test your German grammar knowledge with interactive quizzes.",
    icon: "❓",
  },
  {
    id: "maths-mental",
    title: "Mental Math Challenge",
    subject: "Maths",
    grade: 2,
    description: "Quick mental math problems to improve calculation speed.",
    icon: "⚡",
  },
  {
    id: "maths-puzzle",
    title: "Number Puzzle",
    subject: "Maths",
    grade: 3,
    description: "Solve number puzzles and logic problems.",
    icon: "🧩",
  },
  {
    id: "maths-race",
    title: "Math Race",
    subject: "Maths",
    grade: 3,
    description: "Race against the clock to solve math problems correctly.",
    icon: "🏁",
  },
  {
    id: "maths-fraction",
    title: "Fraction Master",
    subject: "Maths",
    grade: 4,
    description: "Learn and practice fractions with interactive games.",
    icon: "📐",
  },
  {
    id: "maths-geometry",
    title: "Geometry Quest",
    subject: "Maths",
    grade: 5,
    description: "Explore shapes, angles, and geometric concepts through gameplay.",
    icon: "🔺",
  },
];

export default function Games() {
  const germanGames = games.filter((g) => g.subject === "German");
  const mathsGames = games.filter((g) => g.subject === "Maths");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-purple-900">🎮 Learning Games</h1>
              <p className="text-gray-600 mt-2">Learn German and Maths through fun interactive games</p>
            </div>
            <Link href="/">
              <Button variant="outline">← Back Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* German Games Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-purple-900 mb-2">🇩🇪 German Games</h2>
            <p className="text-gray-600">Make learning German fun with interactive games</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanGames.map((game) => (
              <Card key={game.id} className="hover:shadow-lg transition-shadow cursor-pointer hover:border-purple-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{game.title}</CardTitle>
                      <CardDescription>Grade {game.grade}</CardDescription>
                    </div>
                    <span className="text-4xl">{game.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{game.description}</p>
                  <Button variant="default" className="w-full">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Maths Games Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-purple-900 mb-2">🔢 Maths Games</h2>
            <p className="text-gray-600">Master math skills while having fun</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsGames.map((game) => (
              <Card key={game.id} className="hover:shadow-lg transition-shadow cursor-pointer hover:border-purple-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{game.title}</CardTitle>
                      <CardDescription>Grade {game.grade}</CardDescription>
                    </div>
                    <span className="text-4xl">{game.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{game.description}</p>
                  <Button variant="default" className="w-full">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Use Section */}
        <section className="bg-purple-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">💡 Tips for Learning Through Games</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">🎯 Set Goals</h4>
              <p className="text-sm text-gray-700">
                Try to beat your previous score or complete games within a time limit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">📈 Track Progress</h4>
              <p className="text-sm text-gray-700">
                Keep track of which games you've completed and which areas need more practice.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">🏆 Earn Badges</h4>
              <p className="text-sm text-gray-700">
                Complete games and challenges to unlock special badges and achievements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

