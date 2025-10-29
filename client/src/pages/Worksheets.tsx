import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Worksheet {
  id: string;
  title: string;
  subject: "German" | "Maths" | "English";
  grade: number;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topics: string[];
  source?: string;
}

const worksheets: Worksheet[] = [
  // German Worksheets
  {
    id: "german-1",
    title: "German Alphabet & Pronunciation",
    subject: "German",
    grade: 1,
    description: "Learn the German alphabet with pronunciation guides and fun exercises. Based on Khan Academy's language learning principles.",
    difficulty: "Easy",
    topics: ["Alphabet", "Pronunciation", "Letter Recognition"],
    source: "Khan Academy"
  },
  {
    id: "german-2",
    title: "Common German Words & Phrases",
    subject: "German",
    grade: 2,
    description: "Practice everyday German vocabulary with matching and fill-in-the-blank activities. Covers greetings, numbers, and basic nouns.",
    difficulty: "Easy",
    topics: ["Vocabulary", "Greetings", "Basic Nouns"],
    source: "Khan Academy"
  },
  {
    id: "german-3",
    title: "German Numbers & Counting (1-100)",
    subject: "German",
    grade: 2,
    description: "Master German numbers from 1-100 with interactive exercises. Includes counting, ordinal numbers, and number-based word problems.",
    difficulty: "Medium",
    topics: ["Numbers", "Counting", "Ordinals"],
    source: "Khan Academy"
  },
  {
    id: "german-4",
    title: "German Colors, Shapes & Adjectives",
    subject: "German",
    grade: 3,
    description: "Learn German color and shape names through visual activities. Includes adjective agreement and descriptive sentences.",
    difficulty: "Easy",
    topics: ["Colors", "Shapes", "Adjectives"],
    source: "Khan Academy"
  },
  {
    id: "german-5",
    title: "German Verbs & Present Tense",
    subject: "German",
    grade: 3,
    description: "Introduction to German verbs and basic present tense conjugation. Learn regular and common irregular verbs.",
    difficulty: "Medium",
    topics: ["Verbs", "Present Tense", "Conjugation"],
    source: "Khan Academy"
  },
  {
    id: "german-6",
    title: "German Articles & Gender (Der, Die, Das)",
    subject: "German",
    grade: 4,
    description: "Master German articles and noun gender. Includes nominative and accusative cases with practice exercises.",
    difficulty: "Medium",
    topics: ["Articles", "Gender", "Cases"],
    source: "Khan Academy"
  },
  {
    id: "german-7",
    title: "German Prepositions & Sentence Structure",
    subject: "German",
    grade: 5,
    description: "Learn German prepositions and how to build complex sentences. Covers dative and accusative prepositions.",
    difficulty: "Hard",
    topics: ["Prepositions", "Sentence Structure", "Cases"],
    source: "Khan Academy"
  },

  // Maths Worksheets
  {
    id: "maths-1",
    title: "Addition Basics (0-20)",
    subject: "Maths",
    grade: 1,
    description: "Practice single-digit and two-digit addition with visual aids. Aligned with Khan Academy's early math curriculum.",
    difficulty: "Easy",
    topics: ["Addition", "Number Bonds", "Counting On"],
    source: "Khan Academy"
  },
  {
    id: "maths-2",
    title: "Subtraction Fundamentals",
    subject: "Maths",
    grade: 1,
    description: "Develop subtraction skills with engaging problem sets. Includes visual representations and real-world scenarios.",
    difficulty: "Easy",
    topics: ["Subtraction", "Counting Back", "Part-Whole"],
    source: "Khan Academy"
  },
  {
    id: "maths-3",
    title: "Place Value & Number Sense",
    subject: "Maths",
    grade: 2,
    description: "Understand tens and ones, place value, and number comparison. Essential foundation for multi-digit arithmetic.",
    difficulty: "Medium",
    topics: ["Place Value", "Tens & Ones", "Comparison"],
    source: "Khan Academy"
  },
  {
    id: "maths-4",
    title: "Multiplication Tables (2x to 10x)",
    subject: "Maths",
    grade: 3,
    description: "Master multiplication tables from 2x to 10x with drills and games. Based on Khan Academy's multiplication mastery approach.",
    difficulty: "Medium",
    topics: ["Multiplication", "Times Tables", "Arrays"],
    source: "Khan Academy"
  },
  {
    id: "maths-5",
    title: "Division Fundamentals & Concepts",
    subject: "Maths",
    grade: 3,
    description: "Learn division concepts and practice with real-world examples. Includes division as sharing and grouping.",
    difficulty: "Medium",
    topics: ["Division", "Sharing", "Grouping"],
    source: "Khan Academy"
  },
  {
    id: "maths-6",
    title: "Fractions: Halves, Thirds & Fourths",
    subject: "Maths",
    grade: 4,
    description: "Understand fractions with visual representations. Covers identifying, comparing, and ordering fractions.",
    difficulty: "Medium",
    topics: ["Fractions", "Visual Models", "Comparison"],
    source: "Khan Academy"
  },
  {
    id: "maths-7",
    title: "Decimals & Decimal Place Value",
    subject: "Maths",
    grade: 4,
    description: "Master decimal notation and place value. Includes converting between fractions and decimals.",
    difficulty: "Hard",
    topics: ["Decimals", "Place Value", "Fractions to Decimals"],
    source: "Khan Academy"
  },
  {
    id: "maths-8",
    title: "Geometry: 2D Shapes & Properties",
    subject: "Maths",
    grade: 4,
    description: "Learn properties of 2D shapes including triangles, quadrilaterals, and circles. Includes area and perimeter.",
    difficulty: "Medium",
    topics: ["Geometry", "Shapes", "Area & Perimeter"],
    source: "Khan Academy"
  },
  {
    id: "maths-9",
    title: "Ratios & Proportions",
    subject: "Maths",
    grade: 5,
    description: "Understand ratios and proportional relationships. Includes real-world applications and problem solving.",
    difficulty: "Hard",
    topics: ["Ratios", "Proportions", "Rates"],
    source: "Khan Academy"
  },
];

export default function Worksheets() {
  const germanSheets = worksheets.filter((w) => w.subject === "German");
  const mathsSheets = worksheets.filter((w) => w.subject === "Maths");

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
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                📚 Worksheets
              </h1>
              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Practice German and Maths with worksheets from Khan Academy
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
        {/* German Worksheets Section */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🇩🇪 German Worksheets
              </h2>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-semibold">
                Khan Academy
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Learn and practice the German language with our curated worksheets. All content aligns with Khan Academy's language learning curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanSheets.map((sheet) => (
              <div
                key={sheet.id}
                className="group bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/60 rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {sheet.title}
                    </h3>
                    <p className="text-cyan-300 text-sm mt-1">Grade {sheet.grade}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {sheet.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {sheet.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(sheet.difficulty)}`}>
                    {sheet.difficulty}
                  </span>
                  <Button
                    size="sm"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white border-0"
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maths Worksheets Section */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🔢 Maths Worksheets
              </h2>
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-purple-300 text-sm font-semibold">
                Khan Academy
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Master mathematical concepts with our progressive worksheets. Aligned with Khan Academy's math curriculum for grades 1-9.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsSheets.map((sheet) => (
              <div
                key={sheet.id}
                className="group bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md border border-purple-400/30 hover:border-purple-400/60 rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {sheet.title}
                    </h3>
                    <p className="text-purple-300 text-sm mt-1">Grade {sheet.grade}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {sheet.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {sheet.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(sheet.difficulty)}`}>
                    {sheet.difficulty}
                  </span>
                  <Button
                    size="sm"
                    className="bg-purple-500 hover:bg-purple-600 text-white border-0"
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-20">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">📖 Worksheet Resources & References</h3>
            <p className="text-gray-300 text-lg">
              Our worksheets are curated from Khan Academy and other trusted educational sources. All content is aligned with modern curriculum standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Khan Academy Section */}
            <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-md border border-blue-400/50 rounded-2xl p-8 hover:border-blue-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎓</span>
                <h4 className="text-2xl font-bold text-white">Khan Academy</h4>
              </div>
              <p className="text-gray-300 mb-4">
                World-class free educational content covering math, science, and language arts for all grades.
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Math K-12:</strong> https://www.khanacademy.org/math</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Language Arts:</strong> https://www.khanacademy.org/reading-language-arts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Grade-Specific:</strong> https://www.khanacademy.org/math/k-8-grades</span>
                </li>
              </ul>
            </div>

            {/* German Learning Resources */}
            <div className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-blue-400/50 rounded-2xl p-8 hover:border-blue-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇩🇪</span>
                <h4 className="text-2xl font-bold text-white">German Learning</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Specialized resources for learning German language with worksheets and interactive exercises.
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Bee Bilingual:</strong> German worksheets for children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Deutsche Welle:</strong> Free German learning materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Goethe-Institut:</strong> Official German language resources</span>
                </li>
              </ul>
            </div>

            {/* Maths Resources */}
            <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md border border-purple-400/50 rounded-2xl p-8 hover:border-purple-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔢</span>
                <h4 className="text-2xl font-bold text-white">Maths Practice</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive math worksheet resources with thousands of practice problems for all grades.
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>K5Learning:</strong> Grade-specific math worksheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Math-Drills:</strong> 58,000+ free worksheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>IXL Math:</strong> Interactive math practice</span>
                </li>
              </ul>
            </div>

            {/* English Resources */}
            <div className="bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-md border border-emerald-400/50 rounded-2xl p-8 hover:border-emerald-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📝</span>
                <h4 className="text-2xl font-bold text-white">English & Language Arts</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Resources for reading, writing, grammar, and language development across all grade levels.
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>CommonLit:</strong> Free reading passages and lessons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Newsela:</strong> Leveled reading articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span><strong>Grammarly:</strong> Grammar and writing resources</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-pink-600/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">📚 Khan Academy Integration</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            All worksheets are aligned with Khan Academy's curriculum standards. Visit Khan Academy directly for interactive videos, practice exercises, and personalized learning paths.
          </p>
          <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-base px-8 font-semibold">
              Visit Khan Academy →
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
}

