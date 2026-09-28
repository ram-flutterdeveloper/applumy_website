export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: "Blog" | "Guide" | "Case Study" | "Tutorial";
  readTime: string;
  date: string;
  slug: string;
}

export const resources: Resource[] = [
  {
    id: "react-nextjs-performance",
    title: "How We Optimize React & Next.js for Maximum Performance",
    excerpt: "Learn the techniques we use to build lightning-fast web applications using React, Next.js, and modern performance optimization strategies.",
    category: "Guide",
    readTime: "8 min read",
    date: "2024-01-15",
    slug: "react-nextjs-performance",
  },
  {
    id: "mobile-app-development-cost",
    title: "Mobile App Development Cost in India: A Complete Breakdown",
    excerpt: "Everything you need to know about mobile app development costs in India — from Flutter to native iOS and Android applications.",
    category: "Blog",
    readTime: "6 min read",
    date: "2024-01-10",
    slug: "mobile-app-development-cost",
  },
  {
    id: "ecommerce-platform-redesign",
    title: "Case Study: E-Commerce Platform Redesign — 40% Conversion Increase",
    excerpt: "How we redesigned a high-traffic e-commerce platform, resulting in a 40% increase in conversions and 60% faster page loads.",
    category: "Case Study",
    readTime: "10 min read",
    date: "2024-01-05",
    slug: "ecommerce-platform-redesign",
  },
  {
    id: "seo-optimization-guide",
    title: "Technical SEO Guide: How to Rank Your Website on Google",
    excerpt: "A comprehensive guide to technical SEO — from site speed optimization to structured data, meta tags, and core web vitals.",
    category: "Guide",
    readTime: "12 min read",
    date: "2023-12-28",
    slug: "seo-optimization-guide",
  },
  {
    id: "wordpress-vs-nextjs",
    title: "WordPress vs Next.js: Which is Better for Your Business?",
    excerpt: "A detailed comparison of WordPress and Next.js — helping you choose the right platform for your website or web application.",
    category: "Blog",
    readTime: "7 min read",
    date: "2023-12-20",
    slug: "wordpress-vs-nextjs",
  },
  {
    id: "flutter-app-tutorial",
    title: "Building Your First Mobile App with Flutter: A Beginner's Guide",
    excerpt: "Step-by-step tutorial on building a cross-platform mobile application using Flutter and Dart — perfect for beginners.",
    category: "Tutorial",
    readTime: "15 min read",
    date: "2023-12-15",
    slug: "flutter-app-tutorial",
  },
  {
    id: "saas-dashboard-case-study",
    title: "Case Study: SaaS Dashboard — Real-Time Data Visualization",
    excerpt: "How we built a comprehensive SaaS dashboard with real-time data visualization, user management, and integrated payment processing.",
    category: "Case Study",
    readTime: "9 min read",
    date: "2023-12-10",
    slug: "saas-dashboard-case-study",
  },
  {
    id: "ui-ux-design-process",
    title: "Our UI/UX Design Process: From Wireframe to Final Product",
    excerpt: "A look inside our design process — how we create intuitive, user-centered interfaces that drive engagement and conversions.",
    category: "Blog",
    readTime: "5 min read",
    date: "2023-12-05",
    slug: "ui-ux-design-process",
  },
  {
    id: "web-security-best-practices",
    title: "Web Application Security: 10 Best Practices for 2024",
    excerpt: "Protect your web applications with these essential security practices — from authentication to data encryption and vulnerability prevention.",
    category: "Guide",
    readTime: "11 min read",
    date: "2023-11-28",
    slug: "web-security-best-practices",
  },
];
