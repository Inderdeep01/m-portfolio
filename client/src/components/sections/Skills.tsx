import { Badge } from "@/components/ui/badge";
import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";

export function Skills() {
  const categories = [
    { name: "Backend", skills: CONFIG.skills.backend, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { name: "Frontend", skills: CONFIG.skills.frontend, color: "bg-teal-500/10 text-teal-500 border-teal-500/20" },
    { name: "Database", skills: CONFIG.skills.database, color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { name: "Cloud & DevOps", skills: CONFIG.skills.cloud, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { name: "Testing", skills: CONFIG.skills.testing, color: "bg-rose-500/10 text-rose-500 border-rose-500/20" },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset for building robust, end-to-end solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className={`font-normal ${category.color} hover:bg-opacity-20`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
