import { type LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  href: string;
  features: string[];
  benefits: { title: string; description: string }[];
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; description: string }[];
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  results: { label: string; value: string }[];
  features: string[];
  href: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface TrustLogo {
  name: string;
  href?: string;
}
