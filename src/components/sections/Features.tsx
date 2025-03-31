
import { motion } from 'framer-motion';
import { Code2, Cpu, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Lightning Fast',
    description: 'Deploy in seconds with our optimized infrastructure.',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption.',
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Developer First',
    description: 'Built by developers, for developers.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'AI Powered',
    description: 'Smart automation with cutting-edge AI.',
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter gradient-text mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Powerful features to help you build, deploy, and scale your applications with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300" />
              <div className="relative p-6 space-y-4">
                <div className="p-3 bg-primary/5 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};