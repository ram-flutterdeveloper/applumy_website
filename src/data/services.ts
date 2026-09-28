import type { Service } from "@/types";
import {
  Globe,
  Palette,
  Shield,
  Code,
  Smartphone,
  Server,
  Database,
  Layout,
} from "lucide-react";

export const services: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Website Development",
    shortTitle: "Web Dev",
    category: "Development",
    description:
      "Custom-built websites and web applications using modern frameworks like Next.js, React, Laravel, and more. We create fast, responsive, and scalable web solutions that drive business growth.",
    shortDescription:
      "Custom websites and web applications built with modern frameworks for performance and scalability.",
    icon: Globe,
    href: "/services/web-development",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Integration",
      "Progressive Web Apps",
    ],
    benefits: [
      { title: "Lightning Fast", description: "Optimized for speed with modern frameworks and best practices for Core Web Vitals." },
      { title: "Fully Responsive", description: "Seamless experience across all devices — desktop, tablet, and mobile." },
      { title: "SEO Optimized", description: "Built with technical SEO best practices to help you rank higher on Google." },
      { title: "Scalable Architecture", description: "Built to grow with your business without performance degradation." },
    ],
    deliverables: [
      "Custom responsive website",
      "Admin dashboard/CMS",
      "SEO-optimized architecture",
      "Performance optimization",
      "Analytics integration",
      "3 months post-launch support",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    process: [
      { step: "01", title: "Discovery", description: "We analyze your business goals, target audience, and competitor landscape." },
      { step: "02", title: "Strategy", description: "Architecture planning, technology selection, and project roadmap." },
      { step: "03", title: "Design", description: "UI/UX design with wireframes and visual mockups for your approval." },
      { step: "04", title: "Development", description: "Clean, maintainable code using modern frameworks and best practices." },
      { step: "05", title: "Testing", description: "Cross-browser, cross-device testing with performance optimization." },
      { step: "06", title: "Launch", description: "Deployment, monitoring setup, and ongoing support." },
    ],
    heroImage: "/images/services/web-development.png",
    metaTitle: "Website Development Services | Custom Web Applications | Applumy",
    metaDescription:
      "Professional website development services — custom web applications, e-commerce platforms, and CMS solutions built with Next.js, React, and modern technologies.",
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    shortTitle: "Software",
    category: "Development",
    description:
      "End-to-end software development solutions — from enterprise systems to SaaS platforms and business tools. We build reliable, scalable software that solves real business problems.",
    shortDescription:
      "Enterprise software, SaaS platforms, and custom business tools built for reliability and scale.",
    icon: Code,
    href: "/services/software-development",
    features: [
      "Enterprise Software",
      "SaaS Development",
      "API Development",
      "System Integration",
    ],
    benefits: [
      { title: "Custom Solutions", description: "Software tailored exactly to your business processes and requirements." },
      { title: "Integration Ready", description: "Seamlessly connects with your existing tools, APIs, and systems." },
      { title: "Maintainable Code", description: "Clean, documented codebase that your team can extend and maintain." },
      { title: "Future Proof", description: "Built with modern architecture patterns that adapt to changing needs." },
    ],
    deliverables: [
      "Custom software application",
      "API documentation",
      "System architecture docs",
      "Testing suite",
      "Deployment pipeline",
      "6 months support",
    ],
    technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Docker"],
    process: [
      { step: "01", title: "Requirements", description: "Deep dive into your business processes and technical requirements." },
      { step: "02", title: "Architecture", description: "System design, database schema, and API architecture planning." },
      { step: "03", title: "Development", description: "Iterative development with regular demos and feedback cycles." },
      { step: "04", title: "Integration", description: "Connect with existing systems, APIs, and third-party services." },
      { step: "05", title: "Testing", description: "Comprehensive testing including unit, integration, and UAT." },
      { step: "06", title: "Deployment", description: "Production deployment with monitoring and ongoing support." },
    ],
    heroImage: "/images/services/performance-optimization.png",
    metaTitle: "Software Development Services | Custom Enterprise Solutions | Applumy",
    metaDescription:
      "Custom software development services — enterprise systems, SaaS platforms, API development, and system integration built with modern technologies.",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    category: "Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android using Flutter, React Native, Swift, and Kotlin. We build apps that users love.",
    shortDescription:
      "Native and cross-platform mobile apps for iOS and Android built with Flutter and React Native.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    features: [
      "iOS Development",
      "Android Development",
      "Flutter / React Native",
      "App Store Deployment",
    ],
    benefits: [
      { title: "Cross-Platform", description: "Single codebase for iOS and Android — faster delivery, lower cost." },
      { title: "Native Performance", description: "Smooth animations and responsive interfaces that feel native." },
      { title: "App Store Ready", description: "We handle the entire submission process for Apple App Store and Google Play." },
      { title: "Offline Support", description: "Apps that work seamlessly even without an internet connection." },
    ],
    deliverables: [
      "iOS and Android applications",
      "App Store optimization",
      "Push notification system",
      "Analytics integration",
      "Admin panel",
      "3 months support",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "REST APIs"],
    process: [
      { step: "01", title: "Concept", description: "Define app features, target audience, and platform strategy." },
      { step: "02", title: "Design", description: "Mobile-first UI/UX design with platform-specific guidelines." },
      { step: "03", title: "Develop", description: "Cross-platform or native development with clean architecture." },
      { step: "04", title: "Test", description: "Device testing, performance optimization, and beta testing." },
      { step: "05", title: "Submit", description: "App Store and Google Play submission with optimization." },
      { step: "06", title: "Support", description: "Ongoing updates, bug fixes, and feature enhancements." },
    ],
    heroImage: "/images/services/mobile-app-development.png",
    metaTitle: "Mobile App Development Services | iOS & Android Apps | Applumy",
    metaDescription:
      "Professional mobile app development services — native and cross-platform apps for iOS and Android using Flutter, React Native, Swift, and Kotlin.",
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "Design",
    category: "Design",
    description:
      "User-centered design that creates intuitive, engaging digital experiences. From wireframes to polished prototypes, we design interfaces that convert.",
    shortDescription:
      "User-centered design creating intuitive interfaces from wireframes to polished prototypes.",
    icon: Palette,
    href: "/services/ui-ux-design",
    features: [
      "User Research",
      "Wireframing",
      "Visual Design",
      "Prototyping",
    ],
    benefits: [
      { title: "User-Centered", description: "Design decisions backed by research, not assumptions." },
      { title: "Conversion Focused", description: "Every element designed to guide users toward your business goals." },
      { title: "Brand Consistent", description: "Visual systems that strengthen your brand across all touchpoints." },
      { title: "Developer Friendly", description: "Design systems and specs that developers can implement accurately." },
    ],
    deliverables: [
      "User research & personas",
      "Wireframes & user flows",
      "Visual design mockups",
      "Interactive prototype",
      "Design system",
      "Developer handoff",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Principle"],
    process: [
      { step: "01", title: "Research", description: "User interviews, competitor analysis, and requirement gathering." },
      { step: "02", title: "Wireframe", description: "Low-fidelity wireframes and information architecture." },
      { step: "03", title: "Prototype", description: "Interactive prototypes for testing and validation." },
      { step: "04", title: "Visual Design", description: "High-fidelity mockups with your brand identity." },
      { step: "05", title: "Design System", description: "Component library and design tokens for consistency." },
      { step: "06", title: "Handoff", description: "Developer-ready specs, assets, and documentation." },
    ],
    heroImage: "/images/services/ecommerce-development.png",
    metaTitle: "UI/UX Design Services | User Experience Design | Applumy",
    metaDescription:
      "Professional UI/UX design services — user research, wireframing, visual design, and prototyping for web and mobile applications.",
  },
  {
    id: "backend-development",
    slug: "backend-development",
    title: "Backend Development",
    shortTitle: "Backend",
    category: "Development",
    description:
      "Robust backend systems and APIs that power your applications. Scalable and secure server-side solutions built for performance.",
    shortDescription:
      "Scalable backend systems, APIs, and server architecture built for performance and security.",
    icon: Server,
    href: "/services/backend-development",
    features: [
      "REST & GraphQL APIs",
      "Microservices",
      "Cloud Architecture",
      "DevOps & CI/CD",
    ],
    benefits: [
      { title: "High Performance", description: "Optimized for speed with caching, indexing, and efficient queries." },
      { title: "Secure", description: "Industry-standard security practices to protect your data and users." },
      { title: "Scalable", description: "Architecture that handles growth from 100 to 100,000+ users." },
      { title: "Reliable", description: "99.9% uptime with proper monitoring, logging, and error handling." },
    ],
    deliverables: [
      "RESTful/GraphQL APIs",
      "Database architecture",
      "Authentication system",
      "Cloud infrastructure",
      "CI/CD pipeline",
      "Documentation",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"],
    process: [
      { step: "01", title: "Architecture", description: "System design, database schema, and API contract definition." },
      { step: "02", title: "Develop", description: "Build APIs, services, and database layers with clean code." },
      { step: "03", title: "Secure", description: "Authentication, authorization, and security hardening." },
      { step: "04", title: "Optimize", description: "Performance tuning, caching, and query optimization." },
      { step: "05", title: "Test", description: "API testing, load testing, and security auditing." },
      { step: "06", title: "Deploy", description: "Cloud deployment with monitoring and auto-scaling." },
    ],
    heroImage: "/images/services/backend-api.png",
    metaTitle: "Backend Development Services | API & Server Solutions | Applumy",
    metaDescription:
      "Professional backend development services — RESTful APIs, GraphQL, microservices, cloud architecture, and DevOps solutions.",
  },
  {
    id: "database-solutions",
    slug: "database-solutions",
    title: "Database Solutions",
    shortTitle: "Database",
    category: "Infrastructure",
    description:
      "Expert database design, optimization, and management. From MySQL to MongoDB, we handle your data layer with precision.",
    shortDescription:
      "Database design, optimization, and management from MySQL to MongoDB.",
    icon: Database,
    href: "/services/database-solutions",
    features: [
      "Database Design",
      "Query Optimization",
      "Data Migration",
      "Backup & Recovery",
    ],
    benefits: [
      { title: "Optimized Queries", description: "Fast, efficient queries that keep your application responsive." },
      { title: "Data Integrity", description: "Proper constraints, validation, and relationships to protect your data." },
      { title: "Scalable Design", description: "Schema design that grows with your data volume and complexity." },
      { title: "Disaster Recovery", description: "Backup strategies and recovery plans to protect against data loss." },
    ],
    deliverables: [
      "Database architecture design",
      "Schema optimization",
      "Query performance tuning",
      "Data migration scripts",
      "Backup & recovery system",
      "Monitoring dashboard",
    ],
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"],
    process: [
      { step: "01", title: "Audit", description: "Analyze current database performance and identify bottlenecks." },
      { step: "02", title: "Design", description: "Schema design, indexing strategy, and data modeling." },
      { step: "03", title: "Optimize", description: "Query optimization, indexing, and performance tuning." },
      { step: "04", title: "Migrate", description: "Safe data migration with zero downtime strategies." },
      { step: "05", title: "Secure", description: "Access control, encryption, and compliance measures." },
      { step: "06", title: "Monitor", description: "Continuous monitoring with alerts and performance dashboards." },
    ],
    heroImage: "/images/services/backend-api.png",
    metaTitle: "Database Solutions Services | Database Design & Optimization | Applumy",
    metaDescription:
      "Expert database solutions — design, optimization, migration, and management for MySQL, PostgreSQL, MongoDB, and more.",
  },
  {
    id: "frontend-development",
    slug: "frontend-development",
    title: "Frontend Development",
    shortTitle: "Frontend",
    category: "Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, Next.js, Vue.js, and modern CSS frameworks. We bring designs to life.",
    shortDescription:
      "Pixel-perfect responsive interfaces built with React, Next.js, and modern CSS frameworks.",
    icon: Layout,
    href: "/services/frontend-development",
    features: [
      "React / Next.js",
      "Vue.js / Angular",
      "Tailwind CSS",
      "Responsive Design",
    ],
    benefits: [
      { title: "Pixel Perfect", description: "Every element matches the design with precision and attention to detail." },
      { title: "Blazing Fast", description: "Optimized rendering, code splitting, and lazy loading for speed." },
      { title: "Accessible", description: "WCAG-compliant interfaces that work for everyone." },
      { title: "Maintainable", description: "Component-based architecture that's easy to update and extend." },
    ],
    deliverables: [
      "Responsive web application",
      "Component library",
      "Design system implementation",
      "Performance optimization",
      "Cross-browser support",
      "Documentation",
    ],
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "CSS Modules"],
    process: [
      { step: "01", title: "Review", description: "Analyze designs, identify components, and plan architecture." },
      { step: "02", title: "Setup", description: "Project setup with build tools, linting, and folder structure." },
      { step: "03", title: "Components", description: "Build reusable, accessible UI components." },
      { step: "04", title: "Integrate", description: "Connect with APIs, state management, and routing." },
      { step: "05", title: "Optimize", description: "Performance optimization and Core Web Vitals tuning." },
      { step: "06", title: "Test", description: "Cross-browser testing, accessibility audit, and QA." },
    ],
    heroImage: "/images/services/performance-optimization.png",
    metaTitle: "Frontend Development Services | React & Next.js | Applumy",
    metaDescription:
      "Professional frontend development services — pixel-perfect interfaces built with React, Next.js, Vue.js, and modern CSS frameworks.",
  },
  {
    id: "security",
    slug: "application-security",
    title: "Application Security",
    shortTitle: "Security",
    category: "Infrastructure",
    description:
      "Security-first development approach to protect your applications and data from modern threats. We build secure by default.",
    shortDescription:
      "Security-first development to protect your applications and data from modern threats.",
    icon: Shield,
    href: "/services/application-security",
    features: [
      "Secure Coding Practices",
      "Authentication Systems",
      "Data Encryption",
      "Vulnerability Audits",
    ],
    benefits: [
      { title: "Secure by Default", description: "Security integrated into every layer of the application." },
      { title: "Compliance Ready", description: "Built with GDPR, HIPAA, and industry compliance in mind." },
      { title: "Threat Protection", description: "Protection against OWASP Top 10 and common attack vectors." },
      { title: "Audit Trail", description: "Comprehensive logging and monitoring for security events." },
    ],
    deliverables: [
      "Security architecture review",
      "Secure coding implementation",
      "Authentication system",
      "Encryption & data protection",
      "Vulnerability assessment",
      "Security documentation",
    ],
    technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP", "Helmet.js", "Rate Limiting"],
    process: [
      { step: "01", title: "Audit", description: "Security assessment and vulnerability identification." },
      { step: "02", title: "Plan", description: "Security architecture and threat modeling." },
      { step: "03", title: "Implement", description: "Secure coding practices and security controls." },
      { step: "04", title: "Test", description: "Penetration testing and vulnerability scanning." },
      { step: "05", title: "Harden", description: "Server hardening, configuration security, and access controls." },
      { step: "06", title: "Monitor", description: "Continuous monitoring with incident response procedures." },
    ],
    heroImage: "/images/services/backend-api.png",
    metaTitle: "Application Security Services | Secure Development | Applumy",
    metaDescription:
      "Professional application security services — secure coding, authentication, encryption, and vulnerability audits for web and mobile applications.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}
