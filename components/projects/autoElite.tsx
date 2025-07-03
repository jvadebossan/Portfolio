"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Car, Shield, Award, Users, Phone, Mail, MapPin, Star, ChevronRight, Menu, X } from "lucide-react"
import Image from "next/image"

export default function AutoElite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu when navigating
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredCars = [
    {
      id: 1,
      name: "BMW X5 2023",
      price: "$65,900",
      image: "/placeholder.svg?height=300&width=400&text=BMW+X5+2023",
      year: "2023",
      mileage: "12,000 mi",
      fuel: "Gasoline",
      transmission: "Automatic",
      badge: "Featured",
    },
    {
      id: 2,
      name: "Mercedes-Benz C-Class",
      price: "$45,500",
      image: "/placeholder.svg?height=300&width=400&text=Mercedes+C-Class",
      year: "2022",
      mileage: "25,000 mi",
      fuel: "Hybrid",
      transmission: "Automatic",
      badge: "Best Deal",
    },
    {
      id: 3,
      name: "Audi A4 Quattro",
      price: "$38,900",
      image: "/placeholder.svg?height=300&width=400&text=Audi+A4+Quattro",
      year: "2023",
      mileage: "8,500 mi",
      fuel: "Gasoline",
      transmission: "Manual",
      badge: "Popular",
    },
  ]

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "Every vehicle undergoes thorough inspection and comes with our quality guarantee.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Best Prices",
      description: "Competitive pricing with transparent deals and no hidden fees.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Support",
      description: "Our experienced team provides personalized service throughout your journey.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AutoElite</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("inventory")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Inventory
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" onClick={() => scrollToSection("contact")}>
                Schedule Test Drive
              </Button>
              <Button onClick={() => scrollToSection("contact")}>Get Quote</Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 mt-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("inventory")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Inventory
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Contact
                </button>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" size="sm" onClick={() => scrollToSection("contact")}>
                    Schedule Test Drive
                  </Button>
                  <Button size="sm" onClick={() => scrollToSection("contact")}>
                    Get Quote
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Premium Car Dealership</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find Your
                  <span className="text-blue-600 block">Dream Car</span>
                  Today
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover our extensive collection of premium vehicles. From luxury sedans to powerful SUVs, we have
                  the perfect car waiting for you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => scrollToSection("inventory")}
                >
                  Browse Inventory
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  Schedule Test Drive
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Cars Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Luxury+Car+Showroom"
                  alt="Luxury Car"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">4.9/5 Rating</div>
                      <div className="text-sm text-gray-600">From 2,500+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="inventory" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Featured Inventory</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Vehicles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium vehicles, each thoroughly inspected and ready for the road.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <Card
                key={car.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{car.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{car.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-blue-600 mb-4">{car.price}</CardDescription>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>Year: {car.year}</div>
                    <div>Mileage: {car.mileage}</div>
                    <div>Fuel: {car.fuel}</div>
                    <div>Transmission: {car.transmission}</div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      View Details
                    </Button>
                    <Button className="flex-1">Schedule Test Drive</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              View All Inventory
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AutoElite?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive automotive services to ensure you get the best car buying experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`text-center p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">About AutoElite</Badge>
              <h2 className="text-4xl font-bold text-gray-900">15+ Years of Excellence in Automotive Sales</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 2008, AutoElite has been the premier destination for luxury and premium vehicles. Our commitment
                to quality, transparency, and customer satisfaction has made us the trusted choice for thousands of car
                buyers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Certified pre-owned vehicles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Comprehensive warranty options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Financing solutions available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Expert maintenance services</span>
                </div>
              </div>
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=AutoElite+Dealership"
                alt="About AutoElite"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-600 text-white mb-4">Get In Touch</Badge>
                <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
                <p className="text-xl text-gray-300">
                  Contact our expert team today. We're here to help you find the perfect vehicle that matches your needs
                  and budget.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-gray-300">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-gray-300">info@autoelite.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-gray-300">123 Auto Street, Car City, CC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Textarea placeholder="Tell us about your dream car..." rows={4} />
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AutoElite</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect vehicle. Quality, service, and satisfaction guaranteed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("inventory")} className="hover:text-white transition-colors">
                    Inventory
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Services
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <div>Car Sales</div>
                <div>Financing</div>
                <div>Trade-ins</div>
                <div>Maintenance</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div>(555) 123-4567</div>
                <div>info@autoelite.com</div>
                <div>
                  123 Auto Street
                  <br />
                  Car City, CC 12345
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoElite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}