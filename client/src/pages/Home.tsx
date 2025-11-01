import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { Link } from "wouter";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Header */}
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🎓</span>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {APP_TITLE}
                </h1>
                <p className="text-xs text-gray-300">Learning Made Fun</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-2 items-center">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/20">Home</Button>
              </Link>
              <Link href="/worksheets">
                <Button variant="ghost" className="text-white hover:bg-white/20">Worksheets</Button>
              </Link>
              <Link href="/games">
                <Button variant="ghost" className="text-white hover:bg-white/20">Games</Button>
              </Link>
              <Link href="/videos">
                <Button variant="ghost" className="text-white hover:bg-white/20">Videos</Button>
              </Link>
              <Link href="/quizzes">
                <Button variant="ghost" className="text-white hover:bg-white/20">Quizzes</Button>
              </Link>
              {isAuthenticated && (
                <Link href="/admin">
                  <Button variant="ghost" className="text-white hover:bg-white/20">Admin</Button>
                </Link>
              )}
              <div className="border-l border-white/20 pl-4 ml-2">
                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-200">{user?.name}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => logout()}
                      className="border-white/30 text-white hover:bg-white/20"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <a href={getLoginUrl()}>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    >
                      Login
                    </Button>
                  </a>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Learn <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">German & Maths</span> the Fun Way!
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                TaRaLa-Hub is your complete learning platform for grades 1-9. Master skills through interactive worksheets, engaging games, and high-quality video lessons from Khan Academy and more.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/worksheets">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 text-base px-8"
                >
                  Start Learning
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative text-center">
                <div className="text-9xl mb-8 animate-bounce">🎓</div>
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all">
                    <div className="text-5xl mb-2">📚</div>
                    <p className="text-white text-sm font-semibold">Worksheets</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all">
                    <div className="text-5xl mb-2">🎮</div>
                    <p className="text-white text-sm font-semibold">Games</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all">
                    <div className="text-5xl mb-2">🎥</div>
                    <p className="text-white text-sm font-semibold">Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-4">What We Offer</h3>
          <p className="text-xl text-gray-300">Everything you need to succeed in your studies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md border border-blue-400/30 hover:border-blue-400/60 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="text-6xl mb-6">📚</div>
            <h4 className="text-2xl font-bold text-white mb-4">Worksheets</h4>
            <p className="text-gray-300 mb-6">
              Download and print German and Maths worksheets organized by grade level. Perfect for classroom or home practice.
            </p>
            <Link href="/worksheets">
              <Button 
                variant="outline" 
                className="w-full border-blue-400/50 text-blue-300 hover:bg-blue-500/20"
              >
                Browse Worksheets →
              </Button>
            </Link>
          </div>

          <div className="group bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md border border-purple-400/30 hover:border-purple-400/60 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-6xl mb-6">🎮</div>
            <h4 className="text-2xl font-bold text-white mb-4">Games</h4>
            <p className="text-gray-300 mb-6">
              Learn through interactive games that make education fun. Vocabulary matches, spelling bees, and math challenges await!
            </p>
            <Link href="/games">
              <Button 
                variant="outline" 
                className="w-full border-purple-400/50 text-purple-300 hover:bg-purple-500/20"
              >
                Play Games →
              </Button>
            </Link>
          </div>

          <div className="group bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-md border border-pink-400/30 hover:border-pink-400/60 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="text-6xl mb-6">🎥</div>
            <h4 className="text-2xl font-bold text-white mb-4">Videos</h4>
            <p className="text-gray-300 mb-6">
              Watch engaging video lessons that explain concepts clearly. Learn at your own pace with visual demonstrations.
            </p>
            <Link href="/videos">
              <Button 
                variant="outline" 
                className="w-full border-pink-400/50 text-pink-300 hover:bg-pink-500/20"
              >
                Watch Videos →
              </Button>
            </Link>
          </div>

          <div className="group bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md border border-green-400/30 hover:border-green-400/60 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-green-500/20">
            <div className="text-6xl mb-6">🎯</div>
            <h4 className="text-2xl font-bold text-white mb-4">Quizzes</h4>
            <p className="text-gray-300 mb-6">
              Test your knowledge with interactive multiple-choice quizzes. Get instant feedback and learn from detailed explanations.
            </p>
            <Link href="/quizzes">
              <Button 
                variant="outline" 
                className="w-full border-green-400/50 text-green-300 hover:bg-green-500/20"
              >
                Take Quizzes →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-4">Our Subjects</h3>
          <p className="text-xl text-gray-300">Comprehensive coverage for all your learning needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-md border border-blue-400/50 p-10 rounded-2xl hover:border-blue-400/80 transition-all">
            <h4 className="text-4xl font-bold text-white mb-6">🇩🇪 German Language</h4>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3">
                <span className="text-2xl text-blue-400">✓</span> Alphabet & Pronunciation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-blue-400">✓</span> Vocabulary Building
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-blue-400">✓</span> Basic Grammar
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-blue-400">✓</span> Conversational Phrases
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-blue-400">✓</span> Cultural Insights
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md border border-purple-400/50 p-10 rounded-2xl hover:border-purple-400/80 transition-all">
            <h4 className="text-4xl font-bold text-white mb-6">🔢 Mathematics</h4>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3">
                <span className="text-2xl text-purple-400">✓</span> Addition & Subtraction
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-purple-400">✓</span> Multiplication & Division
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-purple-400">✓</span> Fractions & Decimals
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-purple-400">✓</span> Geometry & Shapes
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl text-purple-400">✓</span> Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-4">Organized by Grade Level</h3>
          <p className="text-xl text-gray-300">Content tailored for each grade from 1 to 9</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((grade) => (
            <div 
              key={grade} 
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 text-white p-8 rounded-xl text-center transition-all transform hover:scale-105"
            >
              <div className="text-5xl font-bold mb-2">Grade {grade}</div>
              <p className="text-sm text-gray-100">Age {grade + 5}-{grade + 6}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-purple-500/20 border border-white/20">
          <h3 className="text-5xl font-bold text-white mb-6">Ready to Start Learning?</h3>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are improving their German and Maths skills with TaRaLa-Hub. Learn at your own pace with resources tailored to your grade level.
          </p>
          <Link href="/worksheets">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-base px-10 font-semibold"
            >
              Explore Resources Now →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TaRaLa-Hub</h4>
              <p className="text-gray-400">Making education fun and accessible for all students worldwide.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/worksheets">
                    <span className="hover:text-white cursor-pointer transition-colors">Worksheets</span>
                  </Link>
                </li>
                <li>
                  <Link href="/games">
                    <span className="hover:text-white cursor-pointer transition-colors">Games</span>
                  </Link>
                </li>
                <li>
                  <Link href="/videos">
                    <span className="hover:text-white cursor-pointer transition-colors">Videos</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Follow Us</h4>
              <p className="text-gray-400">Stay updated with new content and resources.</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500">
            <p>&copy; 2025 TaRaLa-Hub. All rights reserved. Empowering young learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

