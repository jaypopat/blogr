import { Button } from "@/components/ui/button"
import { Code, Feather, Zap, Users, Github } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function BlogrLandingPage() {

  return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link className="flex items-center justify-center" href="#">
              <Feather className="h-8 w-8 mr-2 text-purple-600"/>
              <span className="font-bold text-xl text-purple-600">Blogr</span>
            </Link>
            <Navbar/>
          </div>
        </header>
        <main className="flex-1">
          <section
              className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    Welcome to Blogr
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                    The modern publishing platform for developers. Share your knowledge, grow your audience, and build
                    your brand.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className="bg-white text-purple-700 hover:bg-gray-200 text-lg px-6 py-3">Get Started</Button>
                  <Button variant="outline"
                          className="text-white border-white hover:bg-white hover:text-purple-700 text-lg px-6 py-3">Learn
                    More</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800">
                Why Developers Choose Blogr
              </h2>
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <Code className="h-16 w-16 mb-6 text-purple-600"/>
                  <h3 className="text-2xl font-bold mb-3 text-purple-800">Syntax Highlighting</h3>
                  <p className="text-gray-600 text-lg">Share your code snippets with beautiful syntax highlighting.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Zap className="h-16 w-16 mb-6 text-purple-600" />
                  <h3 className="text-2xl font-bold mb-3 text-purple-800">Fast and Responsive</h3>
                  <p className="text-gray-600 text-lg">Optimized for speed and great user experience on all devices.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-16 w-16 mb-6 text-purple-600" />
                  <h3 className="text-2xl font-bold mb-3 text-purple-800">Developer Community</h3>
                  <p className="text-gray-600 text-lg">Connect with like-minded developers and grow your network.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row py-10 w-full shrink-0 items-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Feather className="h-8 w-8 mr-3 text-purple-400" />
              <span className="font-bold text-xl text-purple-400">Blogr</span>
            </div>
            <p className="text-sm text-gray-400">© 2024 Blogr. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-6 sm:gap-8">
              <Link className="text-sm hover:text-purple-400 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:text-purple-400 transition-colors" href="#">
                Privacy
              </Link>
              <Link className="text-sm hover:text-purple-400 transition-colors" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
  )
}