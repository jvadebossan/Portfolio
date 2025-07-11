"use client";

import { Check } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - About Me */}
            <div className="text-left space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  About <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Me</span>
                </h2>
                <p className="text-xl text-green-100 leading-relaxed">
                  I'm João, a passionate web developer with over 5 years of experience creating 
                  high-converting websites for small businesses. I specialize in building fast, 
                  mobile-friendly websites that actually generate leads and sales for my clients.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-sm text-green-200 font-medium">Websites Built</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">40%</div>
                  <div className="text-sm text-green-200 font-medium">Avg. Conversion Increase</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-green-200 font-medium">Client Satisfaction</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Audit
                </a>
                <a 
                  href="https://wa.me/5527998022214?text=Hi!%20I%20want%20to%20learn%20more%20about%20your%20services!"
                  className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Right Side - CTA */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Transform</span> Your Business?
                </h3>
                <p className="text-xl text-green-100 leading-relaxed">
                  Stop losing money on slow websites. Get a high-converting website that pays for itself in the first month.
                </p>
              </div>
              
              {/* Benefits List */}
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-green-100 text-lg font-medium group-hover:text-white transition-colors duration-300">Fast, mobile-friendly websites</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-green-100 text-lg font-medium group-hover:text-white transition-colors duration-300">SEO optimized for Google</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-green-100 text-lg font-medium group-hover:text-white transition-colors duration-300">High conversion rates</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-green-100 text-lg font-medium group-hover:text-white transition-colors duration-300">Ongoing support included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 