import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Terminal,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const skills = {
    backend: ["PHP", "Laravel", "JavaScript", "Node.js", "Hono.js"],
    frontend: ["React.js", "CSS", "Bootstrap", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Terminal"],
  };

  const projects = [
    {
      title: "Le Blog de Sophie",
      description:
        "Le Blog de Sophie est une plateforme développée avec Laravel, utilisant Breeze pour l’authentification, Blade pour le templating et Tailwind CSS pour le style. La base de données embarquée est SQLite, ce qui simplifie le démarrage et le déploiement.",
      tech: ["Laravel", "Breeze", "SQLite", "Blade", "Tailwind CSS"],
      github: "https://github.com/LaplateformeProjects/BlogLaravel",
      demo: "https://github.com/LaplateformeProjects/BlogLaravel/blob/main/laravel-blog/docs/demo.gif",
      gamma: "https://gamma.app/docs/Le-Blog-de-Sophie-1r25pbxo8xnva5i",
    },
    {
      title: "Les Tables Cannoises (Backend)",
      description:
        "Le backend sera développé en PHP, fournissant une API REST pour interagir avec le frontend. Les tables de la base de données seront structurées pour répondre aux besoins fonctionnels du projet. Des requêtes optimisées seront implémentées pour le filtrage et la recherche, garantissant des performances optimales.",
      tech: ["PHP", "MySQL"],
      github: "https://github.com/LaplateformeProjects/Les_Tables_Cannoises_Backend",
      demo: "",
      gamma: "https://gamma.app/docs/Les-Tables-Cannoises-k7jahgd3rz6zt3o",
    },
    {
      title: "Les Tables Cannoises (Frontend)",
      description:
        "Le frontend sera développé en utilisant React pour la gestion de l'interface utilisateur et Tailwind CSS pour le style.",
      tech: ["React.js", "Tailwind CSS"],
      github: "https://github.com/LaplateformeProjects/Les_Tables_Cannoises_Frontend",
      demo: "",
      gamma: "https://gamma.app/docs/Les-Tables-Cannoises-k7jahgd3rz6zt3o",
    },
    {
      title: "Les Repas de Lili",
      description:
        "",
      tech: ["Node.js", "Hono.js", "SQLite", "React.js", "Tailwind CSS"],
      github: "https://github.com/laplateformeio/lili-cdpi-cannes-grp1",
      demo: "",
      gamma: "https://gamma.app/docs/Les-Repas-de-Lili-gg7ojk69oznxdni",
    },
    {
      title: "Portfolio",
      description:
        "Mon-Portfolio est un site portfolio développé avec Next.js, TypeScript et Tailwind CSS, présentant mes compétences, projets et contact.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS"],
      github: "https://github.com/stouf06/Mon-Portfolio",
      demo: "https://github.com/stouf06/Mon-Portfolio/blob/main/README.md",
      gamma: "https://gamma.app/docs/Mon-Portfolio-Presentation-du-Projet-687qi1ck2tssc72",
    },
    {
      title: "Laravel + React SPA",
      description:
        "Single Page Application combining Laravel API backend with React frontend for seamless user experience",
      tech: ["Laravel", "React.js", "Sanctum", "Inertia.js", "Tailwind CSS"],
      github: "",
      demo: "",
      gamma: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container px-4 py-4 mx-auto">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <div className="flex gap-6">
              <Link href="#about" className="text-gray-600 transition-colors hover:text-gray-900">
                About
              </Link>
              <Link href="#skills" className="text-gray-600 transition-colors hover:text-gray-900">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-600 transition-colors hover:text-gray-900">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 transition-colors hover:text-gray-900">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
            Studient
            <span className="block text-emerald-600">Web Developer</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
            Passionate about creating modern web applications with clean code and user-friendly interfaces.
            I studied in both frontend and backend technologies.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">About Me</h2>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="mb-6 text-lg text-gray-600">
                  I'm a junior full-stack web developer with a passion for creating efficient, scalable web
                  applications...
                </p>
                <p className="mb-6 text-lg text-gray-600">
                  I enjoy working with modern frameworks and tools...
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Team Player</Badge>
                  <Badge variant="secondary">Quick Learner</Badge>
                  <Badge variant="secondary">Detail Oriented</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <Code className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <h3 className="font-semibold">Frontend</h3>
                  <p className="text-sm text-gray-600">React, CSS, Tailwind</p>
                </Card>
                <Card className="p-6 text-center">
                  <Database className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <h3 className="font-semibold">Backend</h3>
                  <p className="text-sm text-gray-600">PHP, Laravel, Node.js</p>
                </Card>
                <Card className="p-6 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <h3 className="font-semibold">Full-Stack</h3>
                  <p className="text-sm text-gray-600">End-to-end development</p>
                </Card>
                <Card className="p-6 text-center">
                  <Terminal className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <h3 className="font-semibold">Tools</h3>
                  <p className="text-sm text-gray-600">Git, GitHub, CLI</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Technical Skills</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 capitalize">
                      {category === "backend" ? (
                        <Database className="w-5 h-5 text-emerald-600" />
                      ) : category === "frontend" ? (
                        <Code className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Terminal className="w-5 h-5 text-emerald-600" />
                      )}
                      {category}
                    </CardTitle>
                    <CardDescription>
                      {category === "backend"
                        ? "Server-side technologies and frameworks"
                        : category === "frontend"
                        ? "User interface and styling technologies"
                        : "Development tools and version control"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github}>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.demo}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {project.gamma && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.gamma}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Gamma
                        </Link>
                      </Button>
                    )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Let's Work Together</h2>
          <p className="mb-8 text-lg text-gray-600">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work
            together!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
