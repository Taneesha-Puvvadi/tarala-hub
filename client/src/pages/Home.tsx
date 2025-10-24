import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              <h1 className="text-2xl font-bold text-blue-900">TaRaLa-Hub</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/worksheets">
                <Button variant="ghost">Worksheets</Button>
              </Link>
              <Link href="/games">
                <Button variant="ghost">Games</Button>
              </Link>
              <Link href="/videos">
                <Button variant="ghost">Videos</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Learn German & Maths the Fun Way!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              TaRaLa-Hub is your complete learning platform for grades 2-5. Practice with worksheets, master skills through games, and learn from engaging videos.
            </p>
            <div className="flex gap-4">
              <Link href="/worksheets">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Learning
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4 animate-bounce">🎓</div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-4xl">📚</div>
                <div className="text-4xl">🎮</div>
                <div className="text-4xl">🎥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-5xl mb-4">📚</div>
              <CardTitle className="text-2xl">Worksheets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Download and print German and Maths worksheets organized by grade level. Perfect for classroom or home practice.
              </p>
              <Link href="/worksheets">
                <Button variant="outline" className="w-full">
                  Browse Worksheets
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-5xl mb-4">🎮</div>
              <CardTitle className="text-2xl">Games</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Learn through interactive games that make education fun. Vocabulary matches, spelling bees, and math challenges await!
              </p>
              <Link href="/games">
                <Button variant="outline" className="w-full">
                  Play Games
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-5xl mb-4">🎥</div>
              <CardTitle className="text-2xl">Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Watch engaging video lessons that explain concepts clearly. Learn at your own pace with visual demonstrations.
              </p>
              <Link href="/videos">
                <Button variant="outline" className="w-full">
                  Watch Videos
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Subjects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border-2 border-blue-200">
            <h4 className="text-3xl font-bold text-blue-900 mb-4">🇩🇪 German Language</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Alphabet & Pronunciation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Vocabulary Building
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Basic Grammar
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Conversational Phrases
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Cultural Insights
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-purple-200">
            <h4 className="text-3xl font-bold text-purple-900 mb-4">🔢 Mathematics</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> Addition & Subtraction
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> Multiplication & Division
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> Fractions & Decimals
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> Geometry & Shapes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">Organized by Grade Level</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[2, 3, 4, 5].map((grade) => (
            <div key={grade} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold mb-2">Grade {grade}</div>
              <p className="text-sm">Age {grade + 6}-{grade + 7}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are improving their German and Maths skills with TaRaLa-Hub.
          </p>
          <Link href="/worksheets">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Explore Resources Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">TaRaLa-Hub</h4>
              <p className="text-gray-400">Making education fun and accessible for all students.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/worksheets"><span className="hover:text-white">Worksheets</span></Link></li>
                <li><Link href="/games"><span className="hover:text-white">Games</span></Link></li>
                <li><Link href="/videos"><span className="hover:text-white">Videos</span></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <p className="text-gray-400">Stay updated with new content and resources.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TaRaLa-Hub. All rights reserved. Empowering young learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

