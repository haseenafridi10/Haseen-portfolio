'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Clock, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for architecting large-scale React applications that are maintainable and performant.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Development',
    tags: ['React', 'Architecture', 'Best Practices'],
    date: '2024-03-15',
    readTime: 8,
  },
  {
    id: 2,
    title: 'The Power of TypeScript in Modern Web Development',
    excerpt: 'Discover how TypeScript can improve your development workflow and catch bugs before they reach production.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Development',
    tags: ['TypeScript', 'JavaScript', 'Web Dev'],
    date: '2024-03-10',
    readTime: 6,
  },
  {
    id: 3,
    title: 'Mastering CSS Grid and Flexbox',
    excerpt: 'A comprehensive guide to modern CSS layout techniques that will transform how you build responsive interfaces.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design',
    tags: ['CSS', 'Layout', 'Responsive Design'],
    date: '2024-03-05',
    readTime: 10,
  },
  {
    id: 4,
    title: 'API Design Best Practices',
    excerpt: 'Essential principles for designing RESTful APIs that are intuitive, scalable, and easy to maintain.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Backend',
    tags: ['API', 'REST', 'Node.js'],
    date: '2024-02-28',
    readTime: 7,
  },
  {
    id: 5,
    title: 'Introduction to Next.js 14',
    excerpt: 'Explore the latest features in Next.js 14 including server actions, partial pre-rendering, and more.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Development',
    tags: ['Next.js', 'React', 'SSR'],
    date: '2024-02-20',
    readTime: 9,
  },
  {
    id: 6,
    title: 'Optimizing Web Performance',
    excerpt: 'Practical techniques to improve your website loading speed and overall performance metrics.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'Web Vitals'],
    date: '2024-02-15',
    readTime: 11,
  },
];

const allCategories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag));

    return matchesSearch && matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog & Articles</h2>
            <p className="text-lg text-muted-foreground">Thoughts on development and technology</p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? 'default' : 'secondary'}
                  className="cursor-pointer hover:bg-primary/80 transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 right-4">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group/button">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
