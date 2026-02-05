import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4">Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering impact across financial and enterprise domains.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-8 border-l border-border space-y-12">
          {CONFIG.experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 bg-background border border-primary p-2 rounded-full text-primary">
                <Briefcase className="w-4 h-4" />
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-heading">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {job.description}
                </p>
                {job.achievements && (
                  <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
