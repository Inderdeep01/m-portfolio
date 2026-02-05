import { Button } from "@/components/ui/button";
import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 dark:bg-background/80 z-10" />
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-50 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <Terminal className="w-4 h-4" />
              <span>Full-Stack Architecture • .NET & Angular</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
              Building Scalable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Enterprise Solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {CONFIG.personal.bio}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-lg rounded-full" asChild>
                <a href="#projects">View Projects <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full bg-background/50 backdrop-blur-sm" asChild>
                <a href="/resume.pdf" target="_blank">Download Resume <Download className="ml-2 w-4 h-4" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
