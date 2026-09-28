import type { Technology } from "@/types";

export const technologies: Technology[] = [
  // Frontend
  { id: "nextjs", name: "Next.js", category: "Frontend" },
  { id: "react", name: "React", category: "Frontend" },
  { id: "vue", name: "Vue.js", category: "Frontend" },
  { id: "angular", name: "Angular", category: "Frontend" },
  { id: "typescript", name: "TypeScript", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { id: "nodejs", name: "Node.js", category: "Backend" },
  { id: "php", name: "PHP", category: "Backend" },
  { id: "laravel", name: "Laravel", category: "Backend" },
  { id: "ci4", name: "CodeIgniter 4", category: "Backend" },
  { id: "python", name: "Python", category: "Backend" },
  { id: "java", name: "Java", category: "Backend" },
  { id: "django", name: "Django", category: "Backend" },
  { id: "spring", name: "Spring Boot", category: "Backend" },

  // Mobile
  { id: "flutter", name: "Flutter", category: "Mobile" },
  { id: "react-native", name: "React Native", category: "Mobile" },
  { id: "swift", name: "Swift (iOS)", category: "Mobile" },
  { id: "kotlin", name: "Kotlin (Android)", category: "Mobile" },

  // CMS & E-commerce
  { id: "wordpress", name: "WordPress", category: "CMS" },
  { id: "shopify", name: "Shopify", category: "CMS" },
  { id: "woocommerce", name: "WooCommerce", category: "CMS" },

  // Database
  { id: "mysql", name: "MySQL", category: "Database" },
  { id: "postgresql", name: "PostgreSQL", category: "Database" },
  { id: "mongodb", name: "MongoDB", category: "Database" },
  { id: "redis", name: "Redis", category: "Database" },

  // Cloud & DevOps
  { id: "aws", name: "AWS", category: "Cloud" },
  { id: "gcp", name: "Google Cloud", category: "Cloud" },
  { id: "docker", name: "Docker", category: "DevOps" },
  { id: "kubernetes", name: "Kubernetes", category: "DevOps" },
  { id: "vercel", name: "Vercel", category: "Hosting" },

  // API & Marketing
  { id: "graphql", name: "GraphQL", category: "API" },
  { id: "rest", name: "REST API", category: "API" },
  { id: "seo", name: "SEO", category: "Marketing" },
];
