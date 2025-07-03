import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Settings,
  ArrowRight,
  Database,
  Zap,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-green-400" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Secure",
      ],
      price: "Starting at $2,500",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-400" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      features: [
        "React Native",
        "Native Performance",
        "App Store Ready",
        "Push Notifications",
      ],
      price: "Starting at $5,000",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-400" />,
      title: "E-commerce",
      description:
        "Complete e-commerce solutions that drive sales and conversions",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Analytics",
        "Mobile Optimized",
      ],
      price: "Starting at $3,500",
    },
    {
      icon: <Settings className="w-12 h-12 text-green-400" />,
      title: "Consulting",
      description:
        "Technical consulting and code reviews for existing projects",
      features: [
        "Code Review",
        "Architecture Planning",
        "Performance Optimization",
        "Team Training",
      ],
      price: "$150/hour",
    },
  ];

  return (
    // <section id="services" className="py-20 bg-black">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
    //         My <span className="text-green-400">Services</span>
    //       </h2>
    //       <p className="text-xl text-gray-400 max-w-2xl mx-auto">
    //         Comprehensive development services to bring your ideas to life
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {services.map((service, index) => (
    //         <Card
    //           key={index}
    //           className="bg-gray-900 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
    //         >
    //           <CardHeader className="text-center">
    //             <div className="mb-4 flex justify-center">{service.icon}</div>
    //             <CardTitle className="text-white text-xl">{service.title}</CardTitle>
    //           </CardHeader>
    //           <CardContent className="space-y-4">
    //             <p className="text-gray-400 text-center">{service.description}</p>

    //             <ul className="space-y-2">
    //               {service.features.map((feature, featureIndex) => (
    //                 <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
    //                   <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
    //                   {feature}
    //                 </li>
    //               ))}
    //             </ul>

    //             <div className="pt-4 border-t border-green-500/20">
    //               <div className="text-green-400 font-bold text-lg text-center mb-4">{service.price}</div>
    //               <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
    //                 Get Started
    //                 <ArrowRight className="ml-2" size={16} />
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border-y border-green-500/20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Services That <span className="text-green-400">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I deliver solutions that grow your
            business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Globe className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-card-foreground">Web Development</CardTitle>
              <CardDescription className="text-muted-foreground">
                Custom websites and web applications built with modern
                technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React & Next.js Applications</li>
                <li>• Responsive Design</li>
                <li>• Performance Optimization</li>
                <li>• SEO Implementation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-card-foreground">Backend Development</CardTitle>
              <CardDescription className="text-muted-foreground">
                Scalable server-side solutions and API development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• RESTful APIs</li>
                <li>• Database Design</li>
                <li>• Authentication Systems</li>
                <li>• Cloud Integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-card-foreground">
                Performance Optimization
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Speed up your existing applications for better user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Code Optimization</li>
                <li>• Bundle Size Reduction</li>
                <li>• Caching Strategies</li>
                <li>• Core Web Vitals</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
