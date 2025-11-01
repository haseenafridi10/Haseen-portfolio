'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Instagram, Mail, Github } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    console.log(element);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="sm:mt-0 mt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className=" max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Haseen Afridi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Front End Developer & Creative Problem Solver
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            I craft beautiful, performant web experiences with modern technologies.
            Specializing in React, Next.js, and building scalable applications that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button size="lg" onClick={scrollToContact} className="group">
              Get In Touch
              <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-4 animate-fade-in">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/haseenafridi10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="hidden sm:flex h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
