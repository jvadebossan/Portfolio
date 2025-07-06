import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Globe,
  Database,
  Zap,
} from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border-y border-green-500/20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Solutions That <span className="text-green-400">Convert</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop losing money on slow websites. Get a high-converting website 
            that pays for itself in the first month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Globe className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-card-foreground">High-Converting Websites</CardTitle>
              <CardDescription className="text-muted-foreground">
                Websites that turn visitors into customers, not just traffic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 40% Average Conversion Increase</li>
                <li>• Mobile-First Design</li>
                <li>• Fast Loading (&lt; 2 seconds)</li>
                <li>• SEO Optimized for Google</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-card-foreground">E-commerce Solutions</CardTitle>
              <CardDescription className="text-muted-foreground">
                Online stores that sell 24/7 while you sleep
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Payment Gateway Integration</li>
                <li>• Inventory Management</li>
                <li>• Automated Order Processing</li>
                <li>• Customer Analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-card-foreground">
                Website Speed Optimization
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fix slow websites that are costing you customers and money
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 60% Faster Loading Times</li>
                <li>• Google PageSpeed Score 90+</li>
                <li>• Mobile Performance Boost</li>
                <li>• SEO Ranking Improvement</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
