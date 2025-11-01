import { BlogPostClient } from '@/components/BlogPostClient';

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

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Development',
    tags: ['React', 'Architecture', 'Best Practices'],
    date: '2024-03-15',
    readTime: 8,
    content: `
# Introduction

Building scalable React applications requires careful planning and adherence to best practices. In this comprehensive guide, we'll explore the key principles and patterns that will help you create maintainable, performant applications.

## Component Architecture

One of the most critical aspects of building scalable React applications is establishing a solid component architecture. This involves organizing your components in a logical hierarchy and ensuring proper separation of concerns.

### Container and Presentational Components

The container-presentational pattern helps separate business logic from UI rendering. Container components handle data fetching and state management, while presentational components focus purely on rendering UI based on props.

## State Management

As your application grows, managing state becomes increasingly complex. Consider these approaches:

### Local State vs Global State

Not all state needs to be global. Keep component-specific state local whenever possible. Use global state management solutions like Redux or Zustand only for truly shared state.

### Context API Usage

React's Context API is powerful but can lead to performance issues if overused. Be strategic about what you put in context and consider splitting contexts by domain.

## Performance Optimization

Performance is crucial for user experience. Here are key optimization techniques:

### Code Splitting

Use React.lazy and dynamic imports to split your code into smaller chunks. This reduces initial load time and improves perceived performance.

### Memoization

Leverage React.memo, useMemo, and useCallback to prevent unnecessary re-renders. However, don't over-optimize premature optimization can make code harder to maintain.

## Testing Strategy

A comprehensive testing strategy ensures your application remains stable as it grows:

### Unit Tests

Test individual components and functions in isolation. Focus on testing behavior rather than implementation details.

### Integration Tests

Test how components work together. These tests provide confidence that your application works as a cohesive whole.

## Conclusion

Building scalable React applications is an ongoing process. By following these best practices and continuously refining your approach, you'll create applications that are maintainable, performant, and enjoyable to work with.
    `,
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return null;
  }

  return <BlogPostClient post={post} />;
}

