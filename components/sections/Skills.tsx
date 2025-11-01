'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const skillsData = {
  frontend: [
    { name: 'React/Next.js', level: 95, description: 'Advanced component architecture and SSR' },
    { name: 'TypeScript', level: 90, description: 'Type-safe application development' },
    { name: 'Tailwind CSS', level: 92, description: 'Utility-first responsive design' },
    { name: 'JavaScript', level: 93, description: 'Modern ES6+ and async patterns' },
    { name: 'HTML/CSS', level: 95, description: 'Semantic markup and advanced styling' },
  ],
  // backend: [
  //   { name: 'Node.js', level: 88, description: 'RESTful APIs and microservices' },
  //   { name: 'Python', level: 85, description: 'Django and FastAPI frameworks' },
  //   { name: 'PostgreSQL', level: 82, description: 'Database design and optimization' },
  //   { name: 'MongoDB', level: 80, description: 'NoSQL document databases' },
  //   { name: 'GraphQL', level: 78, description: 'API design and implementation' },
  // ],
  tools: [
    { name: 'Git/GitHub', level: 80, description: 'Version control and collaboration' },
    { name: 'Vercel', level: 60, description: 'Optimization and deployment' },
    { name: 'Shadcn', level: 70, description: 'Reusable UI components and features' },
    { name: 'Jest/Testing', level: 87, description: 'Unit and integration testing' },
    { name: 'Bolt AI', level: 75, description: 'Powerful code editing agent' },
  ],
};

function SkillBar({ skill, isVisible }: { skill: Skill; isVisible: boolean }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div
      className="space-y-2"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent skill-bar-fill"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
      {hoveredSkill === skill.name && (
        <p className="text-sm text-muted-foreground animate-fade-in">{skill.description}</p>
      )}
    </div>
  );
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        else setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">Technologies I work with</p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              {/* <TabsTrigger value="backend">Backend</TabsTrigger> */}
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillsData.frontend.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* <TabsContent value="backend">
              <Card>
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillsData.backend.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>*/}

            <TabsContent value="tools">
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillsData.tools.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent> 
          </Tabs>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Responsive Design',
                'API Integration',
                'Performance Optimization',
                'SEO',
                'Accessibility',
                'Code Review',
                'Technical Writing',
                'Mentoring',
                'Community Involvement',
              ].map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-5">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
