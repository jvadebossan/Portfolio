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
        "Our website was losing customers daily. After the redesign, our conversion rate jumped from 2% to 6% in just 30 days. ROI was 300% in the first month!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Website was loading in 8 seconds. Now it loads in 1.2 seconds. Our bounce rate dropped 65% and sales increased 40% immediately.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "We were spending $5000/month on ads but converting poorly. The new website increased our conversion rate by 40%. Now we're profitable!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Founder, EduTech Platform",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Our old site was costing us $10,000/month in lost sales. The new website paid for itself in 2 weeks and now generates $50K/month.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "Product Manager, FinanceApp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Mobile users were leaving immediately. After the mobile optimization, our mobile conversions increased 300% and revenue doubled.",
      rating: 5,
    },
    {
      name: "James Miller",
      role: "VP Engineering, CloudTech",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Website was ranking #50 on Google. After SEO optimization, we're now #3 and getting 500% more organic traffic. Game changer!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real <span className="text-green-400">Results</span> From Real Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how I've helped businesses increase their revenue and stop losing money
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
