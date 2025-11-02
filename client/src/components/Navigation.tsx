import { Button } from "@/components/ui/button";
import { APP_TITLE, getLoginUrl } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { Link } from "wouter";

export default function Navigation() {
  const { user, isAuthenticated, logout } = useAuth();
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Worksheets", path: "/worksheets" },
    { label: "Games", path: "/games" },
    { label: "Videos", path: "/videos" },
    { label: "Quizzes", path: "/quizzes" },
  ];

  return (
    <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-4xl">🎓</span>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {APP_TITLE}
                </h1>
                <p className="text-xs text-gray-300">Learning Made Fun</p>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`text-white transition-all ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/30 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-purple-500/50"
                      : "hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

            {/* Auth Section */}
            <div className="border-l border-white/20 pl-4 ml-2">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-200">{user?.name}</span>
                  <Link href="/admin">
                    <Button
                      variant="ghost"
                      className={`text-white transition-all ${
                        isActive("/admin")
                          ? "bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/30 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-purple-500/50"
                          : "hover:bg-white/20"
                      }`}
                    >
                      Admin
                    </Button>
                  </Link>
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {isAuthenticated ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => logout()}
                className="border-white/30 text-white hover:bg-white/20"
              >
                Logout
              </Button>
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
        </div>
      </div>
    </header>
  );
}

