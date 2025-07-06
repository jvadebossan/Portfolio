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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Transform Your <span className="text-green-400">Business</span>{" "}
              With High-Converting Websites
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Stop losing customers to slow, outdated websites. I build fast, 
              modern websites that convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3"
                asChild
              >
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}>
                  Get Your Free Quote Now
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 bg-transparent"
                asChild
              >
                <a href="#portfolio" onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}>
                  See My Work
                </a>
              </Button>
            </div>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 bg-transparent"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button> */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center pb-8 md:pb-0 px-4">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Websites Built</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">40%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Avg. Conversion Increase</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">30 Days</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average Delivery</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
