"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqData = [
    {
      question: "How much does a website cost?",
      answer: "Our websites start at $450 for a complete, high-converting website. This includes design, development, SEO optimization, and 3 months of support. We also offer payment plans to make it more affordable."
    },
    {
      question: "How long does it take to build my website?",
      answer: "Most websites are completed within 1-2 weeks from start to finish. We work efficiently to get your business online quickly so you can start generating leads and sales immediately."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer 3 months of free support after launch, and then ongoing maintenance packages starting at $27/month. This includes updates, security patches, and technical support."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are built mobile-first, meaning they look and work perfectly on all devices - phones, tablets, and desktops. This is crucial for SEO and user experience."
    },
    {
      question: "Do you handle SEO optimization?",
      answer: "Yes, every website we build includes basic SEO optimization to help you rank better on Google. We also offer advanced SEO packages for businesses that want to dominate their local market."
    },
    {
      question: "What if I'm not happy with the design?",
      answer: "We offer unlimited revisions during the design phase to ensure you're 100% satisfied. Your happiness is our priority, and we won't consider the project complete until you love the result."
    },
    {
      question: "Can you help with existing websites?",
      answer: "Yes! We can redesign, optimize, or fix existing websites. Many of our clients come to us because their current website is slow, outdated, or not converting visitors into customers."
    },
    {
      question: "Do you offer hosting and domain services?",
      answer: "Yes, we can handle everything including domain registration, hosting setup, and SSL certificates. We recommend reliable hosting providers that ensure your website stays fast and secure."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-500/5 to-green-600/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our website development services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 border-green-500/20">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-green-500/10 last:border-b-0">
                    <AccordionTrigger className="text-left text-foreground hover:text-green-400 transition-colors py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 