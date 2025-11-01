'use client';

import { Award, Code, Coffee, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const stats = [
  { icon: Code, label: 'Projects Completed', value: '5+' },
  { icon: Users, label: 'Internships', value: '3+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Award, label: 'Awards Won', value: '0' },
];


export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Creative Developer Based in Pakistan</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate front-end developer with a focus on building responsive and accessible web applications.
                I specialize in creating intuitive, dynamic user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in web development started with a curiosity about how things work on the internet.
                Today, I work with cutting-edge technologies to bring ideas to life and solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying a good cup of coffee while reading about the latest industry trends.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <Image
                  src="/Haseen_khan.jpeg"
                  alt="Developer workspace"
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
