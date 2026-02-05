import { useRoute } from "wouter";
import { CONFIG } from "@/lib/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Layers, Zap, Database } from "lucide-react";
import { Link } from "wouter";
import NotFound from "./not-found";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const [match, params] = useRoute("/project/:id");
  const project = CONFIG.projects.find(p => p.id === params?.id);

  if (!match || !project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-8 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-heading">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.link && (
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        View Code <Github className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Tech & Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Layers className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Tech Stack</h3>
                </div>
                <ul className="space-y-2">
                  {project.techStack.map(item => (
                    <li key={item} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border/50">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Key Features</h3>
                </div>
                <ul className="space-y-2">
                  {project.features.map(item => (
                    <li key={item} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border/50">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Database className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Key Metrics</h3>
                </div>
                {project.metrics?.map(metric => (
                  <div key={metric.label} className="mb-4 last:mb-0">
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                    <div className="text-2xl font-bold font-mono">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
