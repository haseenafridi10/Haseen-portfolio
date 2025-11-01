'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  images: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Zoom Clone - Bloom',
    description: 'Bloom is a modern video conferencing app built with Next.js, designed for seamless real-time communication.',
    longDescription: 'Bloom is a powerful and elegant video conferencing platform built using Next.js, inspired by Zoom but crafted for the modern web. It enables users to create, join, and manage video meetings instantly with crystal-clear audio, high-quality video, and smooth real-time performance. .',
    category: 'Web App',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stream SDK'],
    image: '/project_03.jpeg',
    images: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    github: 'https://github.com',
    demo: 'https://zoom-clone-nopa.vercel.app/',
  },
  {
    id: 2,
    title: 'Resturant Website',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'A powerful task management application with drag-and-drop boards, team collaboration features, and real-time synchronization. Built with React and WebSockets for instant updates across all team members.',
    category: 'Web App',
    tags: ['React', 'Next js', 'Typescript', 'Tailwind CSS'],
    image: 'https://th.bing.com/th/id/OIP.h7_k9_I7rRjfYgxCu0X-iwHaEi?w=298&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    images: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    github: 'https://github.com',
    demo: 'https://resturant-website-omega-nine.vercel.app/'
  },
  {
    id: 3,
    title: 'Editable Resume',
    description: 'Beautiful weather application with location-based forecasts',
    longDescription: 'An elegant weather application that provides detailed forecasts, weather alerts, and historical data. Features smooth animations, offline support, and customizable widgets.',
    category: 'Mobile App',
    tags: ['React ', 'TypeScript', 'Tailwind CSS'],
    image: '/project_02.jpg',
    images: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    demo: 'https://editable-resume-project.vercel.app/',
  },
];

// const categories = ['All', 'Web App', 'Mobile App'];

export function Projects() {
  // const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [visibleCount, setVisibleCount] = useState(6);

  // const filteredProjects = projects.filter(
  //   (project) => selectedCategory === 'All' || project.category === selectedCategory
  // );

  // const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Some of my recent work</p>
          </div>

          {/* <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(6);
                }}
              >
                {category}
              </Button>
            ))}
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.map((project) => (
             <Card
                key={project.id}
                className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>

                <CardContent className="flex flex-col justify-between flex-1">
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] sm:overflow-visible overflow-y-2">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription asChild>
                  <div>
                  <Badge variant="secondary" className="mt-2">
                    {selectedProject.category}
                  </Badge>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.images.map((image, index) => (
                      <CarouselItem key={index} >
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {selectedProject.images.length > 1 && (
                    <>
                      <CarouselPrevious />
                      <CarouselNext />
                    </>
                  )}
                </Carousel>

                <div>
                  <h3 className="font-semibold text-lg mb-2">About This Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <Button asChild variant="outline">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild>
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

 // {visibleCount < filteredProjects.length && (
          //   <div className="text-center">
          //     <Button onClick={() => setVisibleCount((prev) => prev + 3)} size="lg">
          //       Load More Projects
          //     </Button>
          //   </div> )}
          // )}