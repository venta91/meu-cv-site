'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Twitter, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's connect for new opportunities or to discuss product, tech, and innovation</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Card className="h-full border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-quintoandar-darkGray">Send a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Input type="text" placeholder="Your Name" className="border-gray-300" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" className="border-gray-300" />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Your Message" 
                        className="border-gray-300 min-h-[120px]" 
                      />
                    </div>
                    <Button className="w-full bg-quintoandar-blue hover:bg-blue-700">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/2">
            <Card className="h-full border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-quintoandar-darkGray">Contact Information</CardTitle>
                <CardDescription className="text-gray-600">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                    <p className="text-lg text-quintoandar-blue">ventania91@gmail.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Location</h3>
                    <p className="text-lg text-gray-700">Rio de Janeiro, Brazil</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://linkedin.com/in/ventania" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-quintoandar-lightBlue hover:bg-quintoandar-blue hover:text-white text-quintoandar-blue transition-colors duration-200"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-quintoandar-lightBlue hover:bg-quintoandar-blue hover:text-white text-quintoandar-blue transition-colors duration-200"
                      >
                        <Twitter size={24} />
                      </a>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-quintoandar-blue text-quintoandar-blue hover:bg-quintoandar-lightBlue">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
