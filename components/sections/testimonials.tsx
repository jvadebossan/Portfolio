import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Exceptional work! The developer delivered our e-commerce platform ahead of schedule and exceeded all expectations. The attention to detail and code quality is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with this developer was a game-changer for our startup. The mobile app they built has received incredible user feedback and helped us secure Series A funding.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The website redesign increased our conversion rate by 40%. Professional, responsive, and delivered exactly what we needed to scale our business.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Founder, EduTech Platform",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Incredible technical expertise and business understanding. The learning management system they built is now serving thousands of students worldwide.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "Product Manager, FinanceApp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Security, performance, and user experience - all delivered flawlessly. Our banking app passed all security audits and launched successfully.",
      rating: 5,
    },
    {
      name: "James Miller",
      role: "VP Engineering, CloudTech",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The consulting work helped us optimize our entire tech stack. Performance improved by 60% and our development team learned valuable best practices.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client <span className="text-green-400">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-green-500/10 border-green-500/20 hover:border-green-500/40 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="text-foreground font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-green-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
