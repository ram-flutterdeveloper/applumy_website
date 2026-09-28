import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Applumy collects, uses, and protects your personal information. Read our complete privacy policy.",
  alternates: { canonical: "https://applumy.com/privacy-policy" },
};

const sections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        subtitle: "Personal Information",
        text: "When you contact us through our website form, email, or phone, we collect your name, email address, phone number, and any project details you share with us. This information is only used to respond to your inquiry and provide you with a project quote.",
      },
      {
        subtitle: "Website Usage Data",
        text: "Like most websites, we automatically collect certain information when you visit applumy.com — including your browser type, device type, pages visited, time spent on pages, and the referring website. This data is anonymous and helps us understand how visitors use our site so we can improve it.",
      },
      {
        subtitle: "Cookies",
        text: "We use essential cookies to make our website function properly. We do not use tracking cookies or sell any data to third-party advertisers. If we ever add analytics tools in the future, we will update this policy accordingly.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    icon: Eye,
    content: [
      {
        subtitle: "Communication",
        text: "We use your contact information to respond to your inquiries, discuss project requirements, and provide quotes. If you become a client, we use your information to manage your project and provide ongoing support.",
      },
      {
        subtitle: "Service Improvement",
        text: "Anonymous usage data helps us understand which pages are most useful to visitors, identify technical issues, and make informed decisions about website improvements.",
      },
      {
        subtitle: "Legal Compliance",
        text: "We may retain certain information if required by law or to resolve disputes. We will never use your data for purposes other than what is described in this policy without your explicit consent.",
      },
    ],
  },
  {
    title: "How We Protect Your Data",
    icon: Lock,
    content: [
      {
        subtitle: "Security Measures",
        text: "We take data protection seriously. Our website uses SSL/TLS encryption (HTTPS) to protect data in transit. We store personal information on secure servers with appropriate access controls. We regularly review our security practices to ensure your data is protected.",
      },
      {
        subtitle: "Third-Party Services",
        text: "We do not sell, rent, or trade your personal information to third parties. We may use trusted third-party services (like email providers or hosting services) to operate our business, but these providers are contractually obligated to protect your data and use it only for the services we request.",
      },
      {
        subtitle: "Data Retention",
        text: "We keep your personal information only for as long as necessary to fulfill the purposes described in this policy. If you have not engaged our services, we will delete your inquiry data within 12 months. Client data is retained for the duration of the business relationship plus 2 years for legal and support purposes.",
      },
    ],
  },
  {
    title: "Your Rights",
    icon: Shield,
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to request a copy of the personal information we hold about you and to request corrections if any information is inaccurate. Simply contact us at aditya8858.5@gmail.com and we will respond within 30 days.",
      },
      {
        subtitle: "Deletion",
        text: "You can request that we delete your personal information from our records. We will comply with your request unless we have a legitimate legal reason to retain the data (such as an ongoing business relationship or legal obligation).",
      },
      {
        subtitle: "Opt-Out",
        text: "If you receive marketing communications from us (which only happens if you explicitly subscribe to our newsletter), you can unsubscribe at any time by clicking the unsubscribe link in the email or by contacting us directly.",
      },
    ],
  },
  {
    title: "Third-Party Links",
    icon: Eye,
    content: [
      {
        subtitle: "External Websites",
        text: "Our website may contain links to external websites (such as client projects or partner services). We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any website you visit.",
      },
      {
        subtitle: "Social Media",
        text: "If you interact with our social media profiles or share our content, your activity is subject to the privacy policies of those social media platforms. We do not control how these platforms collect and use your data.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    icon: Shield,
    content: [
      {
        subtitle: "Updates",
        text: "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. The date at the top of this page indicates when it was last updated. We encourage you to review this page periodically.",
      },
      {
        subtitle: "Notification",
        text: "If we make significant changes to this policy, we will post a notice on our website or contact you directly if we have your email address.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="py-5 lg:py-7">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <Link href="/" className="flex items-center gap-1.5 text-[14px] text-[#6B7A8D] hover:text-[#7C5CFC] transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </Link>
            <Badge>Legal</Badge>
            <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              Privacy <span className="text-[#7C5CFC]">Policy</span>
            </h1>
            <p className="max-w-2xl text-[16px] text-[#A7AFBF] leading-[1.8]">
              Your privacy matters to us. This policy explains what information we collect,
              how we use it, and how we keep it safe. We believe in transparency — no legal jargon,
              just honest information.
            </p>
            <p className="text-[14px] text-[#6B7A8D]">Last updated: January 2024</p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Quick Summary */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="rounded-xl border border-[#7C5CFC]/20 bg-[#7C5CFC]/[0.04] p-5">
              <h2 className="text-[16px] font-semibold text-[#F5F7FA] mb-3">Quick Summary</h2>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Database, text: "We only collect information you voluntarily provide" },
                  { icon: Eye, text: "We never sell your data to third parties" },
                  { icon: Lock, text: "We use SSL encryption to protect your data" },
                  { icon: Shield, text: "You can request data deletion anytime" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-2.5">
                      <Icon className="h-4 w-4 text-[#7C5CFC] mt-0.5 shrink-0" />
                      <span className="text-[14px] text-[#A7AFBF] leading-[1.6]">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Policy Sections */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <div className="max-w-3xl mx-auto">
            {sections.map((section, si) => {
              const Icon = section.icon;
              return (
                <AnimatedSection key={section.title} delay={si * 50}>
                  <div className="mb-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C5CFC]/10">
                        <Icon className="h-4 w-4 text-[#7C5CFC]" />
                      </div>
                      <h2 className="text-[18px] font-bold text-[#F5F7FA]">{section.title}</h2>
                    </div>
                    <div className="flex flex-col gap-3 pl-[42px]">
                      {section.content.map((item, ci) => (
                        <div key={ci}>
                          <h3 className="text-[15px] font-semibold text-[#F5F7FA] mb-1">{item.subtitle}</h3>
                          <p className="text-[15px] text-[#A7AFBF] leading-[1.9]">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Questions About Your Privacy?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              If you have any questions about this privacy policy or how we handle your data,
              please reach out to us directly. We are always happy to explain.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:aditya8858.5@gmail.com" className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#11151D] px-4 py-2.5 text-[15px] text-[#A7AFBF] transition-colors hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]">
                <Mail className="h-4 w-4 text-[#7C5CFC]" />
                aditya8858.5@gmail.com
              </a>
              <a href="tel:+917678293527" className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#11151D] px-4 py-2.5 text-[15px] text-[#A7AFBF] transition-colors hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]">
                <Phone className="h-4 w-4 text-[#7C5CFC]" />
                +91 7678293527
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
