import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Users, Trophy } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life",
    },
    {
      icon: <Trophy className="w-8 h-8 text-green-400" />,
      title: "Results Driven",
      description:
        "Focused on delivering solutions that drive business success",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Building Digital Solutions That Matter
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize
              in creating high-performance applications using React, Next.js,
              Node.js, and modern databases. My focus is on delivering solutions
              that not only look great but also drive real business results.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I believe in the power of clean code, user-centered design, and
              continuous learning. Every project is an opportunity to create
              something exceptional that exceeds expectations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-400 font-semibold w-32">
                  Frontend:
                </span>
                <span className="text-gray-300">
                  React, Next.js, TypeScript, Tailwind CSS
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 font-semibold w-32">
                  Backend:
                </span>
                <span className="text-gray-300">
                  Node.js, Python, PostgreSQL, MongoDB
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 font-semibold w-32">
                  Tools:
                </span>
                <span className="text-gray-300">Git, Docker, AWS, Vercel</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-green-500/20 hover:border-green-500/40 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h4 className="text-card-foreground font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
