'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  content: string;
}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'component-architecture', title: 'Component Architecture' },
  { id: 'state-management', title: 'State Management' },
  { id: 'performance-optimization', title: 'Performance Optimization' },
  { id: 'testing-strategy', title: 'Testing Strategy' },
  { id: 'conclusion', title: 'Conclusion' },
];

export function BlogPostClient({ post }: { post: BlogPost }) {
  const [readProgress, setReadProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('article-content');
      console.log(article);
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const articleStart = articleTop - windowHeight / 2;
      const articleEnd = articleTop + articleHeight - windowHeight / 2;
      const scrollableDistance = articleEnd - articleStart;
      const scrolled = scrollTop - articleStart;

      const progress = Math.max(0, Math.min(100, (scrolled / scrollableDistance) * 100));
      setReadProgress(progress);

      const sections = tableOfContents.map((section) => section.id);
      const current = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150 ease-out"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <Link href="/#blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <article>
              <div className="mb-8">
                <div className="aspect-video relative rounded-2xl overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge>{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime} min read
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div
                id="article-content"
                className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-p:leading-relaxed prose-p:mb-4"
              >
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    const text = paragraph.replace('# ', '');
                    const id = text.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <h1 key={index} id={id}>
                        {text}
                      </h1>
                    );
                  } else if (paragraph.startsWith('## ')) {
                    const text = paragraph.replace('## ', '');
                    const id = text.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <h2 key={index} id={id}>
                        {text}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    const text = paragraph.replace('### ', '');
                    return (
                      <h3 key={index}>
                        {text}
                      </h3>
                    );
                  } else if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>;
                  }
                  return null;
                })}
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 p-6">
              <h3 className="font-semibold mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-2 text-sm w-full text-left p-2 rounded transition-colors ${
                      activeSection === section.id
                        ? 'text-primary bg-primary/10 font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    <span>{section.title}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
