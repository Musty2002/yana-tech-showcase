import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  index: number;
}

const ProjectCard = ({ title, category, description, technologies, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30">
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            {category.split(" • ").map((cat, i) => (
              <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                {cat}
              </Badge>
            ))}
          </div>
          <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <span className="text-sm font-medium text-foreground">Key Technologies:</span>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;