"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  BookOpen,
  User,
  Home,
  FileText,
  MessageCircle,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Publications", href: "#publications", icon: BookOpen },
    { name: "Resume", href: "#resume", icon: FileText },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ]

  const projects = [
    {
      title: "sash - Interactive C Shell",
      description:
        "A modular bash-like command interpreter written in C to handle process management, directory management, I/O redirection, piping, and signal handling using system calls.",
      technologies: ["C", "Operating Systems", "System Calls", "Unix"],
      github: "https://github.com/sankalp-bhat",
      demo: "#",
    },
    {
      title: "ImaGen - AI Image Generator",
      description:
        "Built and deployed a fullstack interactive application to generate AI-generated images using text-based prompts with the Dall-E API.",
      technologies: ["MERN Stack", "JavaScript", "Dall-E API", "React.js", "Node.js"],
      github: "https://github.com/sankalp-bhat",
      demo: "#",
    },
    {
      title: "Olympics Analysis Dashboard",
      description:
        "Implemented efficient data processing algorithms and optimized time series forecasting models using random forest classifiers to predict medal counts for Paris 2024.",
      technologies: ["Python", "Machine Learning", "JavaScript", "Data Visualization", "Random Forest"],
      github: "https://github.com/sankalp-bhat",
      demo: "#",
    },
    {
      title: "Marketify - Online Marketplace",
      description:
        "Implemented a database management system using PyMySQL for an online marketplace with user reviews, purchase tracking, and payment integration.",
      technologies: ["PyMySQL", "Database Management", "Python", "Payment Integration"],
      github: "https://github.com/sankalp-bhat",
      demo: "#",
    },
  ]

  const publications = [
    {
      title:
        "ArchXBench: A Six-Level Benchmark Suite for Evaluating Large Language Models in Complex Digital Systems Design",
      journal: "7th ACM/IEEE International Symposium on Machine Learning for CAD",
      year: "2025",
      authors: "Sankalp Bhat*, Siddhant Garg*, Mudit Gaur*, Suresh Purini, Sohan Mupparapu, Arun Ravindran",
      link: "#",
      abstract:
        "Modern SoC datapaths include deeply pipelined, domain-specific accelerators, but their RTL implementation and verification are still mostly done by hand. This paper introduces ArchXBench, a six-level benchmark suite that encompasses complex arithmetic circuits and other advanced digital subsystems drawn from domains such as cryptography, image processing, machine learning, and signal processing, to evaluate the capabilities of Large Language Models (LLMs) in hardware design automation.",
    },
  ]

  const skills = [
    "C",
    "C++",
    "JavaScript",
    "Python",
    "Embedded C",
    "SQL",
    "MATLAB",
    "Verilog",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "pandas",
    "OpenCV",
    "OpenMP",
    "Snowflake",
    "Terraform",
    "Large Language Models",
    "Multi-Agent Systems",
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Removed navigation from dependencies

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">Sankalp Bhat</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Sankalp Bhat
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Electronics and Communication Engineering student at IIIT Hyderabad, passionate about Computer
                Architecture, High Performance Computing and Large Language Models, Currently researching
                Multi-Agent Systems for hardware design automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("#resume")}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3"
                >
                  View My Work
                </Button>
              </div>
              {/* <div className="flex space-x-6 mt-8">
                <Link
                  href="https://github.com/sankalp-bhat"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sankalp-bhat-20a397a4/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:sankalp.b@research.iiit.ac.in"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div> */}
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/profile.jpg"
                      alt="Sankalp Bhat"
                      width={300}
                      height={300}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Optional: Add a subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and pushing the boundaries of technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm currently pursuing a dual degree (B.Tech + MS by Research) in Electronics and Communication
                  Engineering at IIIT Hyderabad. My journey spans across computer architecture, software engineering,
                  and cutting-edge research in Large Language Models and Multi-Agent Systems.
                </p>
                <p>
                  My experience includes internships at IBM Labs working on mainframe architecture and networking
                  protocols, and at Accelerize 360 as a Data Engineer working with Snowflake and cloud technologies. I'm
                  passionate about bridging the gap between hardware and software through innovative research and
                  practical applications.
                </p>
                <p>
                  As an undergraduate researcher in the Computer Systems Group, I'm working on benchmarking LLMs and
                  designing Multi-Agent Systems to aid hardware designers, with an accepted publication and one currently under review. I
                  also contribute to educational technology through Virtual Labs, creating interactive experiments for
                  Computer Architecture.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and contributions to various projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Publications</h2>
            {/* <p className="text-gray-400 max-w-2xl mx-auto">
              Research contributions in the field of Large Language Models for hardware design automation
            </p> */}
          </div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{publication.title}</h3>
                      <p className="text-gray-400 mb-2">{publication.authors}</p>
                      <p className="text-gray-500 mb-3">
                        {publication.journal} • {publication.year}
                      </p>
                      {publication.abstract && (
                        <p className="text-gray-300 text-sm leading-relaxed">{publication.abstract}</p>
                      )}
                    </div>
                    {/* <Link href={publication.link} className="text-blue-400 hover:text-blue-300 transition-colors ml-4">
                      <ExternalLink className="h-5 w-5" />
                    </Link> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Download my complete resume to learn more about my experience and qualifications
            </p>
            <Link
              href="pdf/Sankalp_Bhat_Resume.pdf"
              download="Sankalp_Bhat_Resume.pdf"
              className="inline-flex"
              target="_blank"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Data Engineer Intern</h4>
                  <p className="text-gray-400">Accelerize 360 • Jan 2025 - May 2025</p>
                  <ul className="mt-2 text-gray-300 space-y-1">
                    <li>• Designed automated data versioning system, improving efficiency by 54%</li>
                    <li>• Developed interactive dashboards migrating Excel to Retool with Snowflake</li>
                    <li>• Leveraged distributed cloud architecture for scalable data retrieval</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Software Engineering Intern</h4>
                  <p className="text-gray-400">IBM Labs • May 2024 - Aug 2024</p>
                  <ul className="mt-2 text-gray-300 space-y-1">
                    <li>• Automated testing of Telnet 3215 and 3270 protocol traffic on mainframe</li>
                    <li>• Upgraded kernel and TCP/IP libraries of Embedded FreeRTOS Operating System</li>
                    <li>• Implemented Thread Local Storage and functional verification</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Undergraduate Researcher</h4>
                  <p className="text-gray-400">Computer Systems Group, IIIT Hyderabad • May 2022 - Present</p>
                  <ul className="mt-2 text-gray-300 space-y-1">
                    <li>• Benchmarking Large Language Models and designing Multi-Agent Systems</li>
                    <li>• Research focus on hardware design automation for arithmetic circuits</li>
                    <li>• 2 publications under review in the field</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Software Developer</h4>
                  <p className="text-gray-400">Virtual Labs, IIIT Hyderabad • Mar 2025 - Present</p>
                  <ul className="mt-2 text-gray-300 space-y-1">
                    <li>• Designed interactive educational experiments for Computer Architecture</li>
                    <li>• Created simulations for Cache Coherence and Instruction Scheduling</li>
                    <li>• Developed tests and theory modules for educational platform</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Teaching Assistant</h4>
                  <p className="text-gray-400">IIIT Hyderabad • Aug 2022 - Dec 2024</p>
                  <p className="text-gray-400">Real Analysis, Linear Algebra, Partial Differential Equations</p>
                  <ul className="mt-2 text-gray-300 space-y-1">
                    <li>• Conducted weekly tutorial sessions for first-year and second-year students along with designing problem sets</li>
                    <li>• Designed and evaluated assignments, exams and projects (both written and computational)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">B.Tech + MS by Research</h4>
                  <p className="text-gray-400">
                    International Institute of Information Technology, Hyderabad • Sep 2020 - Present
                  </p>
                  <p className="mt-2 text-gray-300">Electronics and Communication Engineering</p>
                  <p className="text-gray-300">Dean's Merit List for 2020-21 (Top 10% of students)</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Achievements</h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h5 className="font-semibold text-white">Dean's Merit List</h5>
                    <p className="text-gray-400">2020-21 • Top 10% of students for both semesters</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h5 className="font-semibold text-white">Regional Mathematical Olympiad</h5>
                    <p className="text-gray-400">2018, 2019 • Top 50 students in Karnataka state</p>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <h5 className="font-semibold text-white">TV Room Quiz Club Coordinator</h5>
                    <p className="text-gray-400">IIIT Hyderabad • Content reaching thousands daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="mailto:sankalp.b@research.iiit.ac.in" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-gray-900 border-gray-800 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">sankalp.b@research.iiit.ac.in</p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/sankalp-bhat-20a397a4/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-gray-900 border-gray-800 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <Linkedin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                    <p className="text-gray-400">Connect with me professionally</p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="https://github.com/sankalp-bhat" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-gray-900 border-gray-800 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <Github className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                    <p className="text-gray-400">Check out my code</p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Sankalp Bhat. Built with Next.js and hosted on GitHub Pages.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
