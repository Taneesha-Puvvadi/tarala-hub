import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Video {
  id: string;
  title: string;
  subject: "German" | "Maths";
  grade: number;
  description: string;
  duration: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: "german-alphabet",
    title: "German Alphabet & Pronunciation",
    subject: "German",
    grade: 2,
    description: "Learn how to pronounce each letter of the German alphabet with clear examples.",
    duration: "8:45",
    thumbnail: "🔤",
  },
  {
    id: "german-numbers",
    title: "German Numbers 1-20",
    subject: "German",
    grade: 2,
    description: "Count from 1 to 20 in German with fun animations and repetition.",
    duration: "6:30",
    thumbnail: "🔢",
  },
  {
    id: "german-colors",
    title: "German Colors & Shapes",
    subject: "German",
    grade: 3,
    description: "Learn German color names and basic shapes through visual examples.",
    duration: "7:15",
    thumbnail: "🎨",
  },
  {
    id: "german-animals",
    title: "German Animal Names",
    subject: "German",
    grade: 3,
    description: "Discover how to name common animals in German with pronunciation guides.",
    duration: "9:20",
    thumbnail: "🦁",
  },
  {
    id: "german-family",
    title: "German Family Members",
    subject: "German",
    grade: 4,
    description: "Learn how to describe family relationships in German.",
    duration: "10:05",
    thumbnail: "👨‍👩‍👧‍👦",
  },
  {
    id: "maths-addition",
    title: "Addition Basics (0-20)",
    subject: "Maths",
    grade: 2,
    description: "Master basic addition with numbers up to 20 using visual aids.",
    duration: "7:40",
    thumbnail: "➕",
  },
  {
    id: "maths-subtraction",
    title: "Subtraction Fundamentals",
    subject: "Maths",
    grade: 2,
    description: "Learn subtraction concepts with clear examples and practice problems.",
    duration: "8:15",
    thumbnail: "➖",
  },
  {
    id: "maths-multiplication",
    title: "Introduction to Multiplication",
    subject: "Maths",
    grade: 3,
    description: "Understand multiplication as repeated addition with visual demonstrations.",
    duration: "11:30",
    thumbnail: "✖️",
  },
  {
    id: "maths-division",
    title: "Division Basics",
    subject: "Maths",
    grade: 4,
    description: "Learn division concepts and how to divide numbers into equal groups.",
    duration: "10:45",
    thumbnail: "➗",
  },
  {
    id: "maths-fractions",
    title: "Understanding Fractions",
    subject: "Maths",
    grade: 5,
    description: "Explore fractions, parts of a whole, and comparing fractions.",
    duration: "12:20",
    thumbnail: "🥧",
  },
];

export default function Videos() {
  const germanVideos = videos.filter((v) => v.subject === "German");
  const mathsVideos = videos.filter((v) => v.subject === "Maths");

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-red-900">🎥 Learning Videos</h1>
              <p className="text-gray-600 mt-2">Watch educational videos to learn German and Maths</p>
            </div>
            <Link href="/">
              <Button variant="outline">← Back Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* German Videos Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-2">🇩🇪 German Videos</h2>
            <p className="text-gray-600">Learn German through engaging video lessons</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer hover:border-red-300">
                <div className="relative bg-gradient-to-br from-red-200 to-red-100 h-40 flex items-center justify-center">
                  <span className="text-6xl">{video.thumbnail}</span>
                  <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>Grade {video.grade}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{video.description}</p>
                  <Button variant="default" className="w-full">
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Maths Videos Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-2">🔢 Maths Videos</h2>
            <p className="text-gray-600">Master math concepts through clear video explanations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer hover:border-red-300">
                <div className="relative bg-gradient-to-br from-red-200 to-red-100 h-40 flex items-center justify-center">
                  <span className="text-6xl">{video.thumbnail}</span>
                  <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>Grade {video.grade}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{video.description}</p>
                  <Button variant="default" className="w-full">
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Learning Tips Section */}
        <section className="bg-red-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-red-900 mb-4">📺 Tips for Learning with Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-900 mb-2">👀 Watch Actively</h4>
              <p className="text-sm text-gray-700">
                Take notes while watching and pause to practice what you've learned.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-900 mb-2">🔄 Rewatch & Review</h4>
              <p className="text-sm text-gray-700">
                Don't hesitate to rewatch videos to reinforce your understanding.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-900 mb-2">✏️ Practice After</h4>
              <p className="text-sm text-gray-700">
                After each video, try the related worksheets or games to practice.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

