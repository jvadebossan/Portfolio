"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        alert('Thank you for your message! You will receive an update within 1 day.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-green-500/10 border-t border-green-500/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to <span className="text-green-400">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your free website audit and discover how much money your slow website is costing you. 
            Limited spots available this month.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card border-green-500/20">
              <CardHeader>
                <CardTitle className="text-card-foreground text-2xl">
                  Get Your Free Website Audit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-muted border-green-500/30 text-foreground placeholder:text-muted-foreground focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-muted border-green-500/30 text-foreground placeholder:text-muted-foreground focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-muted border-green-500/30 text-foreground placeholder:text-muted-foreground focus:border-green-500"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-muted border-green-500/30 text-foreground placeholder:text-muted-foreground focus:border-green-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3"
                  >
                    <Send className="mr-2" size={20} />
                    Get My Free Audit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <h3 className="text-card-foreground font-semibold">Email</h3>
                    <p className="text-muted-foreground">jvdebossan@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <h3 className="text-card-foreground font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+55 27 99802-2214</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <h3 className="text-card-foreground font-semibold">Location</h3>
                    <p className="text-muted-foreground">Available Worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-card-foreground font-semibold mb-2">
                  Limited Time Offer
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  First 5 clients this month get 20% off + free SEO setup. 
                  Don't miss out on this exclusive deal.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold w-full" asChild>
                  <a href="https://wa.me/5527998022214?text=Hi!%20I%20want%20to%20get%20the%2020%%20discount%20offer!">
                    Claim My Discount
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
