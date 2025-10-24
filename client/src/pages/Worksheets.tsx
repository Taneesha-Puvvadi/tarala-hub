import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Worksheet {
  id: string;
  title: string;
  subject: "German" | "Maths";
  grade: number;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const worksheets: Worksheet[] = [
  {
    id: "german-1",
    title: "German Alphabet & Pronunciation",
    subject: "German",
    grade: 2,
    description: "Learn the German alphabet with pronunciation guides and fun exercises.",
    difficulty: "Easy",
  },
  {
    id: "german-2",
    title: "Common German Words",
    subject: "German",
    grade: 2,
    description: "Practice everyday German vocabulary with matching and fill-in-the-blank activities.",
    difficulty: "Easy",
  },
  {
    id: "german-3",
    title: "German Numbers & Counting",
    subject: "German",
    grade: 3,
    description: "Master German numbers from 1-100 with interactive exercises.",
    difficulty: "Medium",
  },
  {
    id: "german-4",
    title: "German Colors & Shapes",
    subject: "German",
    grade: 3,
    description: "Learn German color and shape names through visual activities.",
    difficulty: "Easy",
  },
  {
    id: "german-5",
    title: "German Verbs & Tenses",
    subject: "German",
    grade: 4,
    description: "Introduction to German verbs and basic present tense conjugation.",
    difficulty: "Medium",
  },
  {
    id: "maths-1",
    title: "Addition Basics",
    subject: "Maths",
    grade: 2,
    description: "Practice single-digit and two-digit addition with visual aids.",
    difficulty: "Easy",
  },
  {
    id: "maths-2",
    title: "Subtraction Practice",
    subject: "Maths",
    grade: 2,
    description: "Develop subtraction skills with engaging problem sets.",
    difficulty: "Easy",
  },
  {
    id: "maths-3",
    title: "Multiplication Tables",
    subject: "Maths",
    grade: 3,
    description: "Master multiplication tables from 2x to 10x with drills and games.",
    difficulty: "Medium",
  },
  {
    id: "maths-4",
    title: "Division Fundamentals",
    subject: "Maths",
    grade: 4,
    description: "Learn division concepts and practice with real-world examples.",
    difficulty: "Medium",
  },
  {
    id: "maths-5",
    title: "Fractions & Decimals",
    subject: "Maths",
    grade: 5,
    description: "Understand fractions and decimals with visual representations.",
    difficulty: "Hard",
  },
];

export default function Worksheets() {
  const germanSheets = worksheets.filter((w) => w.subject === "German");
  const mathsSheets = worksheets.filter((w) => w.subject === "Maths");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-900">📚 Worksheets</h1>
              <p className="text-gray-600 mt-2">Download and practice German and Maths worksheets</p>
            </div>
            <Link href="/">
              <Button variant="outline">← Back Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* German Worksheets Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">🇩🇪 German Worksheets</h2>
            <p className="text-gray-600">Learn and practice the German language with our curated worksheets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanSheets.map((sheet) => (
              <Card key={sheet.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{sheet.title}</CardTitle>
                  <CardDescription>Grade {sheet.grade}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{sheet.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      sheet.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : sheet.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {sheet.difficulty}
                    </span>
                    <Button variant="default" size="sm">
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Maths Worksheets Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">🔢 Maths Worksheets</h2>
            <p className="text-gray-600">Master mathematical concepts with our progressive worksheets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsSheets.map((sheet) => (
              <Card key={sheet.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{sheet.title}</CardTitle>
                  <CardDescription>Grade {sheet.grade}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{sheet.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      sheet.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : sheet.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {sheet.difficulty}
                    </span>
                    <Button variant="default" size="sm">
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">📖 Worksheet Resources</h3>
          <p className="text-gray-700 mb-6">
            Our worksheets are curated from trusted educational sources. You can also find additional resources at:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">German Learning</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• BeeGerman.com - Free German worksheets</li>
                <li>• LearnOutLive.com - German PDF worksheets</li>
                <li>• StudyCat.com - Interactive German exercises</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Maths Practice</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• K5Learning.com - Grade-specific math worksheets</li>
                <li>• Math-Drills.com - 58,000+ free worksheets</li>
                <li>• WorksheetAid.com - Customizable math sheets</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

