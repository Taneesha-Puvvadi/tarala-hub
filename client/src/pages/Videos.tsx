import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

interface Video {
  id: string;
  title: string;
  subject: "German" | "Maths";
  grade: number;
  description: string;
  duration: string;
  thumbnail: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
}

const videos: Video[] = [
  // German Videos
  {
    id: "german-alphabet",
    title: "German Alphabet & Pronunciation",
    subject: "German",
    grade: 1,
    description: "Learn how to pronounce each letter of the German alphabet with clear examples and native speaker audio.",
    duration: "8:45",
    thumbnail: "🔤",
    difficulty: "Easy",
    topic: "Fundamentals",
  },
  {
    id: "german-numbers",
    title: "German Numbers 1-20",
    subject: "German",
    grade: 1,
    description: "Count from 1 to 20 in German with fun animations and repetition exercises. Perfect for beginners.",
    duration: "6:30",
    thumbnail: "🔢",
    difficulty: "Easy",
    topic: "Numbers",
  },
  {
    id: "german-colors",
    title: "German Colors & Shapes",
    subject: "German",
    grade: 2,
    description: "Learn German color names and basic shapes through visual examples and interactive demonstrations.",
    duration: "7:15",
    thumbnail: "🎨",
    difficulty: "Easy",
    topic: "Vocabulary",
  },
  {
    id: "german-animals",
    title: "German Animal Names",
    subject: "German",
    grade: 2,
    description: "Discover how to name common animals in German with pronunciation guides and fun facts.",
    duration: "9:20",
    thumbnail: "🦁",
    difficulty: "Medium",
    topic: "Vocabulary",
  },
  {
    id: "german-family",
    title: "German Family Members",
    subject: "German",
    grade: 3,
    description: "Learn how to describe family relationships in German with practical examples and conversation practice.",
    duration: "10:05",
    thumbnail: "👨‍👩‍👧‍👦",
    difficulty: "Medium",
    topic: "Vocabulary",
  },
  {
    id: "german-verbs",
    title: "Common German Verbs",
    subject: "German",
    grade: 4,
    description: "Master the most common German verbs with conjugation patterns and real-world usage examples.",
    duration: "12:30",
    thumbnail: "🎯",
    difficulty: "Hard",
    topic: "Grammar",
  },

  // Maths Videos
  {
    id: "maths-addition",
    title: "Addition Basics (0-20)",
    subject: "Maths",
    grade: 1,
    description: "Master basic addition with numbers up to 20 using visual aids and manipulatives. Perfect for beginners.",
    duration: "7:40",
    thumbnail: "➕",
    difficulty: "Easy",
    topic: "Arithmetic",
  },
  {
    id: "maths-subtraction",
    title: "Subtraction Fundamentals",
    subject: "Maths",
    grade: 1,
    description: "Learn subtraction concepts with clear examples and practice problems. Build strong foundational skills.",
    duration: "8:15",
    thumbnail: "➖",
    difficulty: "Easy",
    topic: "Arithmetic",
  },
  {
    id: "maths-multiplication",
    title: "Introduction to Multiplication",
    subject: "Maths",
    grade: 2,
    description: "Understand multiplication as repeated addition with visual demonstrations and real-world applications.",
    duration: "11:30",
    thumbnail: "✖️",
    difficulty: "Medium",
    topic: "Arithmetic",
  },
  {
    id: "maths-division",
    title: "Division Basics",
    subject: "Maths",
    grade: 3,
    description: "Learn division concepts and how to divide numbers into equal groups with visual models.",
    duration: "10:45",
    thumbnail: "➗",
    difficulty: "Medium",
    topic: "Arithmetic",
  },
  {
    id: "maths-fractions",
    title: "Understanding Fractions",
    subject: "Maths",
    grade: 4,
    description: "Explore fractions, parts of a whole, and comparing fractions with interactive visual representations.",
    duration: "12:20",
    thumbnail: "🥧",
    difficulty: "Hard",
    topic: "Fractions",
  },
  {
    id: "maths-geometry",
    title: "Introduction to Geometry",
    subject: "Maths",
    grade: 5,
    description: "Learn basic geometric shapes, properties, and how to calculate area and perimeter with real examples.",
    duration: "13:45",
    thumbnail: "🔺",
    difficulty: "Hard",
    topic: "Geometry",
  },
];

export default function Videos() {
  const germanVideos = videos.filter((v) => v.subject === "German");
  const mathsVideos = videos.filter((v) => v.subject === "Maths");

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
      <Navigation />
      {/* Navigation Header */}
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                🎥 Learning Videos
              </h1>
              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Watch educational videos to learn German and Maths
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
        {/* German Videos Section */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🇩🇪 German Videos
              </h2>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-semibold">
                Video Lessons
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Learn German through engaging video lessons with native speakers and clear explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {germanVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/60 rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative bg-gradient-to-br from-cyan-500/40 to-blue-600/40 h-40 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform">{video.thumbnail}</span>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-lg font-semibold border border-white/20">
                    ⏱️ {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-cyan-300 text-sm mt-1">Grade {video.grade}</p>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {video.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-200">
                        {video.topic}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(video.difficulty)}`}>
                      {video.difficulty}
                    </span>
                    <Button
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white border-0"
                    >
                      Watch
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maths Videos Section */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🔢 Maths Videos
              </h2>
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-purple-300 text-sm font-semibold">
                Video Lessons
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Master math concepts through clear video explanations with visual demonstrations and examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathsVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md border border-purple-400/30 hover:border-purple-400/60 rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative bg-gradient-to-br from-purple-500/40 to-pink-600/40 h-40 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform">{video.thumbnail}</span>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-lg font-semibold border border-white/20">
                    ⏱️ {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-purple-300 text-sm mt-1">Grade {video.grade}</p>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {video.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-200">
                        {video.topic}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(video.difficulty)}`}>
                      {video.difficulty}
                    </span>
                    <Button
                      size="sm"
                      className="bg-purple-500 hover:bg-purple-600 text-white border-0"
                    >
                      Watch
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Learning Tips Section */}
        <section className="mb-20">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">📺 Tips for Learning with Videos</h3>
            <p className="text-gray-300 text-lg">
              Maximize your learning with these proven strategies for video-based education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-md border border-emerald-400/50 rounded-2xl p-8 hover:border-emerald-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👀</span>
                <h4 className="text-xl font-bold text-white">Watch Actively</h4>
              </div>
              <p className="text-gray-300">
                Take notes while watching and pause to practice what you've learned. Engage with the material.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-md border border-blue-400/50 rounded-2xl p-8 hover:border-blue-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔄</span>
                <h4 className="text-xl font-bold text-white">Rewatch & Review</h4>
              </div>
              <p className="text-gray-300">
                Don't hesitate to rewatch videos to reinforce your understanding. Repetition builds mastery.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/30 to-yellow-500/30 backdrop-blur-md border border-orange-400/50 rounded-2xl p-8 hover:border-orange-400/80 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✏️</span>
                <h4 className="text-xl font-bold text-white">Practice After</h4>
              </div>
              <p className="text-gray-300">
                After each video, try the related worksheets or games to practice. Apply what you've learned.
              </p>
            </div>
          </div>
        </section>

        {/* Video Quality Info */}
        <section className="bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-pink-600/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">🎬 High-Quality Video Content</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            All our videos feature clear audio, visual demonstrations, and are designed for optimal learning. Each video is carefully structured to build concepts progressively.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">HD Quality</span>
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Subtitles</span>
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Native Speakers</span>
            <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm">Interactive</span>
          </div>
        </section>
      </main>
    </div>
  );
}

