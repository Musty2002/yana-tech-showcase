import { motion } from "framer-motion";
import { Smartphone, Brain, Mic, Server, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Smartphone,
    title: "Android & Cross-Platform App Development",
    description:
      "Native Android applications and cross-platform solutions built with modern frameworks. From concept to deployment, we create mobile experiences that users love.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description:
      "Computer vision, natural language processing, and predictive analytics. We build intelligent systems that automate processes and extract valuable insights from data.",
  },
  {
    icon: Mic,
    title: "Voice & Conversational AI",
    description:
      "Voice assistants and chatbots with support for local languages including Hausa and Nigerian English. Perfect for customer service automation and accessibility.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Robust backend systems and RESTful APIs that power your applications. Built for scalability, security, and performance using modern cloud technologies.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "End-to-end data pipelines, big data processing, and analytics dashboards. Transform raw data into actionable business intelligence.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium mb-2 block">What We Offer</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive technology solutions tailored to your business needs.
              From mobile apps to AI systems, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life with our
              expertise in AI, mobile development, and data engineering.
            </p>
            <Button asChild size="lg" className="gradient-bg border-0">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;