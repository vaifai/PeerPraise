import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Award, BarChart2, Mail, MessageSquare, Slack, ThumbsUp, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
        <a className="flex items-center justify-center" href="#">
          <ThumbsUp className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">PeerPraise</span>
        </a>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#integrations">
            Integrations
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#analytics">
            Analytics
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empower Your Team with PeerPraise
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Foster a culture of recognition and boost employee engagement with our seamless peer-to-peer appreciation platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Peer Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Empower employees to appreciate and recognize their colleagues' efforts and achievements.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Slack className="w-6 h-6 mr-2" />
                    Slack Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Seamlessly integrate with your existing Slack workspace for easy and instant recognition.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="w-6 h-6 mr-2" />
                    Insightful Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Gain valuable insights into team dynamics and recognition patterns with our powerful analytics.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="integrations" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Seamless Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Slack Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Integrate PeerPraise directly into your Slack workspace. Give kudos, view recognitions, and boost team morale without leaving Slack.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Web Dashboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Access a comprehensive web dashboard to manage recognitions, view team insights, and track engagement metrics all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="analytics" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="w-6 h-6 mr-2" />
                    Recognition Frequency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Track recognition trends over time to understand team dynamics and engagement levels.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-6 h-6 mr-2" />
                    Top Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Identify the most common areas of recognition to highlight team strengths and values.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Most Recognized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Discover your team's top performers and those who consistently embody company values.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "PeerPraise has transformed our company culture. It's now easier than ever to recognize and appreciate our colleagues' hard work."
                  </p>
                  <p className="mt-4 font-semibold">- Sarah J., HR Manager</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "The Slack integration is a game-changer. Our team engagement has skyrocketed since we started using PeerPraise."
                  </p>
                  <p className="mt-4 font-semibold">- Mike T., Team Lead</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "The analytics provided by PeerPraise give me invaluable insights into my team's performance and morale."
                  </p>
                  <p className="mt-4 font-semibold">- Lisa R., Department Manager</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input placeholder="Company" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Workplace?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of companies using PeerPraise to boost employee engagement and foster a culture of appreciation.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started Now</Button>
                <Button size="lg" variant="outline">Request a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 PeerPraise. All rights reserved.</p>
            <nav className="flex gap-4">
              <a className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Terms of Service
              </a>
              <a className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}