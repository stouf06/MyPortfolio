import { useEffect, useState } from "react";
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
import ContactSection from "../components/ContactSection";

export default function Home() {
  
  const skills = {
    backend: ["PHP", "Laravel", "JavaScript", "Node.js", "Hono.js"],
    database: ["MySQL", "SQLite"],
    frontend: ["React.js", "CSS", "Bootstrap", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Terminal", "Docker"],
  };

  const projects = [
    {
      title: ( <> Le Blog de Sophie <br/><br/> </> ),
      description: (
      <>
        C'est une plateforme d'échange et d'information développée avec Laravel, utilisant Breeze pour l’authentification, Blade pour le templating et Tailwind CSS pour le style. La base de données embarquée est SQLite, ce qui simplifie le démarrage et le déploiement.
      <br/><br/>
      </> ),
      tech: ["Laravel", "Breeze", "SQLite", "Blade", "Tailwind CSS"],
      github: "https://github.com/LaplateformeProjects/BlogLaravel",
      demo: "https://github.com/LaplateformeProjects/BlogLaravel/blob/main/laravel-blog/docs/demo.gif",
      figma: "https://www.figma.com/design/n4FAJF2M1svc4tNJAxZquO/Le-Blog-de-Sophie?node-id=0-1&p=f&t=Tj0EyM354R2cZ5bO-0",
      gamma: "https://gamma.app/docs/Le-Blog-de-Sophie-1r25pbxo8xnva5i",
    },
    {
      title: ( <> Les Repas de Lili <br/><br/> </> ),
      description:
        "C'est une plateforme de réservation développée en Node.js, fournissant une API REST pour interagir avec le frontend. Celui-ci est développé en React pour la gestion de l'interface utilisateur et Tailwindcss pour le style. Authentification JWT (Jason Web Token) pour sécuriser les interactions entre le client et l'API.",
      tech: ["Node.js", "Hono.js", "SQLite", "React.js", "Tailwind CSS"],
      github: "https://github.com/laplateformeio/lili-cdpi-cannes-grp1",
      figma: "https://www.figma.com/design/SyTD4u1bcAsAyo82pJBpWi/Les-repas-de-Lili?node-id=0-1&p=f&t=60qA77LbOQ8JI4kj-0",
      gamma: "https://gamma.app/docs/Les-Repas-de-Lili-gg7ojk69oznxdni",
    },
    {
      title: ( <> Portfolio <br/><br/> </> ),
      description: (
      <>
        C'est un site Carte de visite développé avec Next.js, TypeScript et Tailwind CSS, présentant mes compétences (Soft Skills et Technical Skills), mes projets et une fiche de contact.
        <br/><br/><br/><br/> 
      </> ),
      tech: ["TypeScript", "Next.js", "Tailwind CSS"],
      github: "https://github.com/stouf06/Mon-Portfolio",
      gamma: "https://gamma.app/docs/Mon-Portfolio-Presentation-du-Projet-687qi1ck2tssc72",
    },
  ];

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container px-4 py-4 mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex gap-2">
              <Globe className="text-xl font-bold text-emerald-600"/>
              <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            </div>
            <div className="flex gap-6">
              <Link
                href="#about"
                className="relative text-gray-600 transition-colors hover:text-gray-900
                          after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0
                        after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                A propos
              </Link>
              <Link 
                href="#skills" 
                className="relative text-gray-600 transition-colors hover:text-gray-900
                          after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0
                        after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Compétences
              </Link>
              <Link 
                href="#projects" 
                className="relative text-gray-600 transition-colors hover:text-gray-900
                          after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0
                        after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Projets
              </Link>
              <Link 
                href="#contact" 
                className="relative text-gray-600 transition-colors hover:text-gray-900
                          after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0
                        after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20">
        <div className="container mx-auto mb-24 text-center">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-7xl">
            Etudiant
            <span className="block text-emerald-600">Développeur Web</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
            Passionné par la création d'applications web modernes avec un code clair et des interfaces conviviales, j'ai étudié plusieurs technologies front-end et back-end.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#contact">
              <Button variant="default" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Entrer en contact
              </Button>
            </Link>
            <Link 
              href="https://github.com/stouf06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Github className="w-4 h-4 mr-2" />
                Profil GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* A propos (Soft skills) */}
      <section id="about" className="px-4 py-20 bg-white">
  <div className="container mx-auto">
    <div className="max-w-5xl mx-auto">
      <h2 className="mb-12 text-3xl italic font-bold text-center text-gray-900">- Soft Skills -</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-emerald-600">Personnel</h3>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>Adopter une attitude optimiste</li>
            <li>Rester courtois</li>
            <li>Faire preuve de confiance en soi</li>
            <li>Être patient</li>
            <li>Savoir gérer son stress</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-emerald-600">Communication</h3>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>Savoir écouter</li>
            <li>Se faire comprendre à l’oral et à l’écrit</li>
            <li>Être capable de négocier</li>
            <li>Prendre la parole en public</li>
            <li>Faire preuve d'assertivité</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-emerald-600">Réflexion</h3>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>Savoir se remettre en question</li>
            <li>Être créatif et innovant</li>
            <li>Savoir s'adapter</li>
            <li>Résoudre des problèmes complexes</li>
            <li>Mener une réflexion logique</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-emerald-600">Éthique professionnelle</h3>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>Être organisé</li>
            <li>Orienté résultat</li>
            <li>Faire preuve de ponctualité</li>
            <li>Avoir le sens du devoir</li>
            <li>Gérer la confidentialité des informations</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-emerald-600">Relationnel</h3>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>Développer l’intelligence émotionnelle</li>
            <li>Donner un feedback constructif</li>
            <li>Savoir collaborer</li>
            <li>Faire preuve d’empathie</li>
            <li>Respecter les différences</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-emerald-600">Leadership</h3>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>Résoudre des conflits</li>
            <li>Prendre des décisions</li>
            <li>Inspirer et définir une vision commune</li>
            <li>Motiver les autres</li>
            <li>Savoir fédérer autour de soi</li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</section>


      {/* Compétences Techniques (Hard skills) */}
      <section id="skills" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl italic font-bold text-center text-gray-900">
            - Hard Skills -
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => {
                const icon =
                  category === "backend" ? (
                  <Database className="w-6 h-6 text-emerald-600" />
                  ) : category === "database" ? (
                  <Database className="w-6 h-6 text-emerald-600" />
                  ) : category === "frontend" ? (
                  <Code className="w-6 h-6 text-emerald-600" />
                  ) : category === "tools" ? (
                  <Terminal className="w-6 h-6 text-emerald-600" />
                  ) : null;

                const description =
                  category === "backend"
                  ? "Technologies et frameworks côté serveur"
                  : category === "database"
                  ? "Gestion de bases de données et requêtes de données"
                  : category === "frontend"
                  ? "Développement de l’UI et intégration"
                  : category === "tools"
                  ? "Outils de développement et environnements de travail"
                  : "";

                return (
                  <Card
                    key={category}
                    className="flex flex-col items-center p-4 text-center"
                  >
                    <CardHeader className="flex flex-col items-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {icon}
                        <CardTitle className="text-lg capitalize text-emerald-700">
                          {category}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm text-gray-500">
                        {description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap justify-center gap-2">
                        {items.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl italic font-bold text-center text-gray-900">- Présentation des Projets -</h2>
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
                    {project.figma && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.figma}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Figma
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

      {/* Footer */}
      <section id="contact" className="px-4 py-20">
        <Card className="container mx-auto text-center">
          <h2 className="mt-4 mb-8 text-3xl italic font-bold text-gray-900">- Travaillons ensemble -</h2>
          <p className="mb-4 text-lg text-gray-600">
           Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. Échangeons et discutons de la façon dont nous pouvons travailler ensemble !
          </p>
        </Card>
      </section>

      {/* Fiche de contact */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Bouton de retour en haut */}
      <div className="fixed z-50 group bottom-6 right-6">
        <button
          onClick={scrollToTop}
          className={`${
            showScrollBtn ? "block" : "hidden"
          } p-3 transition-all duration-300 transform bg-white rounded-full shadow-lg text-gray-800 hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(99,102,241,0.4)] animate-pulse`}
          aria-label="Retour en haut"
        >
          ⬆️
        </button>

        {/* Tooltip à gauche avec animation */}
        <div className="absolute items-center hidden px-3 py-1 mr-3 text-xs font-medium text-white transition-all duration-300 ease-out transform scale-95 -translate-y-1/2 bg-black rounded shadow-md opacity-0 right-full top-1/2 group-hover:flex bg-opacity-80 group-hover:opacity-100 group-hover:scale-100">
          Retour en haut
          <div className="absolute w-2 h-2 rotate-45 -translate-y-1/2 bg-black bg-opacity-80 top-1/2 -right-1"></div>
        </div>
      </div>
    </div>
  );
}