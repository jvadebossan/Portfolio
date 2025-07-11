"use client";

import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-500/5 to-green-600/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing from <span className="text-green-400">£450</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Choose the plan that fits your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">Basic Website</CardTitle>
              <div className="text-4xl font-bold text-green-400 mb-2">£450</div>
              <p className="text-muted-foreground">Perfect for small businesses</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">5-page responsive website</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Mobile-first design</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Basic SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Contact form</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">2 weeks delivery</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 block text-center"
              >
                Get Started
              </a>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/40 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </div>
            </div>
            <CardHeader className="text-center pt-6">
              <CardTitle className="text-2xl font-bold text-foreground">Professional</CardTitle>
              <div className="text-4xl font-bold text-green-400 mb-2">£850</div>
              <p className="text-muted-foreground">Best for growing businesses</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Everything in Basic +</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Up to 10 pages</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Advanced SEO setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Blog section</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Google Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">3 weeks delivery</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 block text-center"
              >
                Get Started
              </a>
            </CardContent>
          </Card>

          {/* E-commerce Plan */}
          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">E-commerce</CardTitle>
              <div className="text-4xl font-bold text-green-400 mb-2">£1,250</div>
              <p className="text-muted-foreground">For online stores</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Everything in Professional +</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Online store setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Payment gateway</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Product management</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">Order tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-sm">4 weeks delivery</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 block text-center"
              >
                Get Started
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include hosting setup, SSL certificate, and 3 months of support
          </p>
          <a 
            href="#contact" 
            className="text-green-400 hover:text-green-300 font-semibold underline"
          >
            Need a custom solution? Let's talk
          </a>
        </div>
      </div>
    </section>
  );
} 