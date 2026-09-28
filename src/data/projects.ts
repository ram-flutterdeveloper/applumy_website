import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    slug: "shopmart-ecommerce",
    title: "ShopMart E-Commerce Platform",
    category: "E-Commerce",
    client: "ShopMart India",
    description:
      "A complete e-commerce platform redesign for a growing Indian fashion brand, resulting in a 40% increase in conversions and 60% faster page loads.",
    longDescription:
      "ShopMart was struggling with a slow, outdated e-commerce platform that was losing customers to competitors. We rebuilt their entire online store from scratch using Next.js and modern web technologies, creating a blazing-fast shopping experience that increased their conversion rate by 40% and reduced bounce rate by 35%.",
    image: "/images/services/ecommerce-development.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Node.js", "PostgreSQL"],
    results: [
      { label: "Conversion Increase", value: "40%" },
      { label: "Page Load Speed", value: "60% faster" },
      { label: "Bounce Rate Reduction", value: "35%" },
      { label: "Revenue Growth", value: "25% in 3 months" },
    ],
    features: [
      "Custom product catalog with filters",
      "Secure payment gateway integration",
      "Real-time inventory management",
      "Mobile-first responsive design",
      "SEO-optimized product pages",
      "Admin dashboard for orders",
    ],
    href: "/projects/shopmart-ecommerce",
    metaTitle: "ShopMart E-Commerce Platform Case Study | Applumy",
    metaDescription:
      "How we rebuilt ShopMart's e-commerce platform with Next.js, increasing conversions by 40% and page speed by 60%.",
  },
  {
    id: "saas-dashboard",
    slug: "dataflow-analytics",
    title: "DataFlow Analytics Dashboard",
    category: "Web Application",
    client: "DataFlow Systems",
    description:
      "Built a comprehensive SaaS analytics dashboard with real-time data visualization, user management, and integrated payment processing.",
    longDescription:
      "DataFlow Systems needed a powerful analytics platform to help their clients visualize complex business data. We built a real-time SaaS dashboard using React and Node.js that processes millions of data points daily, providing actionable insights through beautiful, interactive visualizations.",
    image: "/images/services/performance-optimization.png",
    technologies: ["React", "Node.js", "PostgreSQL", "GraphQL", "D3.js", "Redis"],
    results: [
      { label: "Data Processing", value: "1M+ daily" },
      { label: "User Adoption", value: "500+ users" },
      { label: "Dashboard Load Time", value: "< 2 seconds" },
      { label: "Client Retention", value: "95%" },
    ],
    features: [
      "Real-time data visualization",
      "Custom chart builder",
      "Role-based access control",
      "Automated report generation",
      "API integrations",
      "White-label support",
    ],
    href: "/projects/dataflow-analytics",
    metaTitle: "DataFlow Analytics Dashboard Case Study | Applumy",
    metaDescription:
      "How we built a SaaS analytics dashboard processing 1M+ data points daily with real-time visualizations.",
  },
  {
    id: "corporate-website",
    slug: "techstart-corporate",
    title: "TechStart Corporate Website",
    category: "Corporate",
    client: "TechStart India",
    description:
      "Modernized a corporate website with improved SEO performance, achieving top-3 rankings for key industry terms within 3 months.",
    longDescription:
      "TechStart India had an outdated corporate website that wasn't ranking on Google and failed to communicate their brand value. We redesigned and rebuilt their entire web presence with a focus on SEO, performance, and conversion optimization, helping them rank in the top 3 for competitive industry keywords.",
    image: "/images/services/web-development.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    results: [
      { label: "Google Rankings", value: "Top 3 keywords" },
      { label: "Organic Traffic", value: "200% increase" },
      { label: "Page Speed Score", value: "98/100" },
      { label: "Lead Generation", value: "3x improvement" },
    ],
    features: [
      "SEO-optimized architecture",
      "Headless CMS for content management",
      "Blog with rich media support",
      "Contact forms with CRM integration",
      "Performance-optimized images",
      "Analytics dashboard",
    ],
    href: "/projects/techstart-corporate",
    metaTitle: "TechStart Corporate Website Case Study | Applumy",
    metaDescription:
      "How we modernized TechStart's corporate website, achieving top-3 Google rankings and 200% organic traffic increase.",
  },
  {
    id: "mobile-app",
    slug: "quickshop-app",
    title: "QuickShop Mobile App",
    category: "Mobile App",
    client: "QuickShop",
    description:
      "Cross-platform mobile app for a local delivery service, handling 1000+ daily orders with real-time tracking and payment integration.",
    longDescription:
      "QuickShop needed a mobile app to scale their local delivery business. We built a cross-platform app using Flutter that handles 1000+ daily orders, provides real-time order tracking, and integrates seamlessly with their existing backend systems.",
    image: "/images/services/mobile-app-development.png",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "Razorpay", "Google Maps"],
    results: [
      { label: "Daily Orders", value: "1000+" },
      { label: "App Rating", value: "4.8/5" },
      { label: "Order Accuracy", value: "99.5%" },
      { label: "Customer Satisfaction", value: "92%" },
    ],
    features: [
      "Real-time order tracking",
      "In-app payment gateway",
      "Push notifications",
      "Driver management system",
      "Customer support chat",
      "Analytics dashboard",
    ],
    href: "/projects/quickshop-app",
    metaTitle: "QuickShop Mobile App Case Study | Applumy",
    metaDescription:
      "How we built a Flutter mobile app handling 1000+ daily orders with real-time tracking and payment integration.",
  },
  {
    id: "saas-platform",
    slug: "inventorypro-saas",
    title: "InventoryPro SaaS Platform",
    category: "SaaS",
    client: "InventoryPro",
    description:
      "Multi-tenant SaaS inventory management platform serving 200+ businesses with real-time stock tracking and automated reordering.",
    longDescription:
      "InventoryPro needed a scalable SaaS platform to help businesses manage their inventory across multiple locations. We built a multi-tenant system with real-time stock tracking, automated reorder alerts, and comprehensive reporting that now serves 200+ businesses.",
    image: "/images/services/backend-api.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    results: [
      { label: "Active Businesses", value: "200+" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Stockout Reduction", value: "75%" },
      { label: "Time Saved Weekly", value: "15 hours" },
    ],
    features: [
      "Multi-location inventory tracking",
      "Automated reorder alerts",
      "Barcode scanning support",
      "Supplier management",
      "Financial reporting",
      "API for third-party integrations",
    ],
    href: "/projects/inventorypro-saas",
    metaTitle: "InventoryPro SaaS Platform Case Study | Applumy",
    metaDescription:
      "How we built a multi-tenant SaaS inventory platform serving 200+ businesses with real-time tracking.",
  },
  {
    id: "uiux-redesign",
    slug: "fintrack-dashboard",
    title: "FinTrack Dashboard Redesign",
    category: "UI/UX Design",
    client: "FinTrack",
    description:
      "Complete UI/UX redesign of a financial analytics dashboard, improving user task completion rate by 45% and reducing support tickets by 60%.",
    longDescription:
      "FinTrack's existing dashboard was powerful but confusing — users struggled to find key features and support tickets were overwhelming the team. We conducted extensive user research and redesigned the entire interface, resulting in a 45% improvement in task completion and 60% fewer support requests.",
    image: "/images/services/services-hero.png",
    technologies: ["Figma", "React", "TypeScript", "Storybook", "Chromatic"],
    results: [
      { label: "Task Completion", value: "45% improvement" },
      { label: "Support Tickets", value: "60% reduction" },
      { label: "User Satisfaction", value: "4.7/5 rating" },
      { label: "Onboarding Time", value: "50% faster" },
    ],
    features: [
      "User research & interviews",
      "Information architecture",
      "Wireframing & prototyping",
      "Design system creation",
      "Usability testing",
      "Developer handoff",
    ],
    href: "/projects/fintrack-dashboard",
    metaTitle: "FinTrack Dashboard Redesign Case Study | Applumy",
    metaDescription:
      "How we redesigned FinTrack's financial dashboard, improving task completion by 45% and reducing support tickets by 60%.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, count = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, count);
}
