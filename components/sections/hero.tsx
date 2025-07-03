"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-green-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I Build <span className="text-green-400">Digital</span>{" "}
              Experiences That Drive Results
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I create exceptional digital experiences that drive business
              growth and user engagement
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3"
              >
                <a href="#contact">
                  Start Your Project
                </a>
                <ArrowRight className="ml-2" size={20} />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 bg-transparent"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button> */}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pb-8 md:pb-0">
              <div>
                <div className="text-3xl font-bold text-green-400">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
