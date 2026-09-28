import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, DollarSign, Clock, Shield, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read Applumy's terms and conditions governing our web development, software, and mobile app services.",
  alternates: { canonical: "https://applumy.com/terms" },
};

const sections = [
  {
    title: "1. About Applumy",
    content: [
      "Applumy is a web development and software services company operated by Aditya Pandey, based in Jaunpur, Uttar Pradesh, India. We provide website development, software development, mobile app development, UI/UX design, and related digital services.",
      "By using our website (applumy.com) or engaging our services, you agree to these terms. If you do not agree with any part of these terms, please do not use our website or services.",
    ],
  },
  {
    title: "2. Our Services",
    content: [
      "We offer the following services: website development, software development, mobile application development, UI/UX design, backend development, database solutions, and application security. Each project is governed by a separate proposal or agreement that outlines the specific scope, timeline, and pricing.",
      "We reserve the right to refuse any project that we believe is not aligned with our values or capabilities. We will always communicate this honestly and promptly.",
    ],
  },
  {
    title: "3. Project Proposals & Pricing",
    content: [
      "All projects begin with a detailed proposal that includes the scope of work, timeline, deliverables, and pricing. This proposal becomes part of our agreement once you approve it in writing (email acceptance is sufficient).",
      "Our pricing is project-based. We do not charge hourly rates unless explicitly agreed upon. Any work outside the agreed scope will be quoted separately and requires your approval before we proceed.",
      "Payment terms are outlined in each project proposal. Typically, we require a 40-50% advance payment to begin work, with the remaining balance due upon project completion or in agreed milestones.",
    ],
  },
  {
    title: "4. Payment Terms",
    content: [
      "We accept payments via bank transfer, UPI, and other methods as agreed upon in the proposal. All invoices are due within 7 days of issuance unless otherwise specified.",
      "Late payments may incur a late fee of 1.5% per month on the outstanding balance. We understand that delays happen and will always communicate before applying any fees.",
      "If a project is cancelled after work has begun, payment for work completed up to that point is due. The advance payment is non-refundable once development work has started.",
    ],
  },
  {
    title: "5. Project Timeline & Delivery",
    content: [
      "We commit to the timelines outlined in your project proposal. However, timelines may be extended if there are delays in receiving feedback, content, or approvals from your side. We will communicate any timeline changes as early as possible.",
      "Our standard working days are Monday through Saturday, 10:00 AM to 7:00 PM IST. We do not work on Sundays or national holidays unless explicitly agreed upon for urgent projects.",
      "We provide regular progress updates during the development process. We expect timely feedback from your side to keep the project on track.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "Upon full payment, you receive complete ownership of the project deliverables — including all source code, designs, and assets created specifically for your project. We do not retain any rights to your project.",
      "We may showcase your project in our portfolio and marketing materials unless you explicitly request otherwise in writing. We will always credit your brand appropriately.",
      "Any third-party libraries, frameworks, or tools used in your project remain subject to their own licenses. We will inform you of any such dependencies.",
    ],
  },
  {
    title: "7. Support & Maintenance",
    content: [
      "Every project includes 3 to 6 months of post-launch support (as specified in your proposal), covering bug fixes and minor adjustments related to the original scope.",
      "After the support period ends, we offer ongoing maintenance plans at competitive rates. We will never leave you stranded — if you need help after the support period, just reach out.",
      "Support does not include new feature development, major design changes, or issues caused by third-party modifications. These will be quoted separately.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "We build our projects with care and follow industry best practices. However, we cannot guarantee that software will be completely error-free or uninterrupted. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
      "Our total liability for any project is limited to the total amount paid for that project. This is a standard practice in the software development industry.",
      "We are not responsible for issues caused by third-party services, hosting providers, or modifications made by others after project delivery.",
    ],
  },
  {
    title: "9. Confidentiality",
    content: [
      "We treat all project information as confidential. We will not share your business information, project details, or proprietary data with anyone outside our team without your written consent.",
      "This confidentiality obligation continues even after the project is completed and our business relationship ends.",
    ],
  },
  {
    title: "10. Termination",
    content: [
      "Either party may terminate the agreement with 15 days written notice. If you terminate a project, payment for work completed up to that point is due immediately.",
      "We reserve the right to terminate a project if there is a breach of these terms, non-payment, or if we reasonably believe the project involves illegal or unethical activities.",
      "Upon termination, we will provide all completed work and assets to you, provided payment has been made for the work completed.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    content: [
      "We may update these terms from time to time. The latest version will always be available on this page. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.",
      "For existing projects, the terms in effect at the time of project agreement will apply.",
    ],
  },
  {
    title: "12. Governing Law",
    content: [
      "These terms are governed by the laws of India. Any disputes arising from these terms or our services will be subject to the jurisdiction of courts in Jaunpur, Uttar Pradesh, India.",
    ],
  },
];

export default function TermsPage() {
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
              Terms & <span className="text-[#7C5CFC]">Conditions</span>
            </h1>
            <p className="max-w-2xl text-[16px] text-[#A7AFBF] leading-[1.8]">
              Plain-language terms for using our website and services. We have kept the legal
              language as simple as possible so you actually understand what you are agreeing to.
            </p>
            <p className="text-[14px] text-[#6B7A8D]">Last updated: January 2024</p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Key Points */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: CheckCircle, title: "You Own Your Project", desc: "Full ownership transfers to you after payment." },
                { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. Everything is in the proposal." },
                { icon: Clock, title: "Clear Timelines", desc: "We commit to deadlines and communicate delays." },
                { icon: Shield, title: "Confidentiality", desc: "Your data and project details stay private." },
                { icon: AlertTriangle, title: "Fair Cancellation", desc: "Pay only for work completed if you cancel." },
                { icon: FileText, title: "Plain Language", desc: "These terms are written to be understood, not to confuse." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7C5CFC]/10">
                        <Icon className="h-4 w-4 text-[#7C5CFC]" />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#F5F7FA]">{item.title}</h3>
                        <p className="text-[14px] text-[#6B7A8D] leading-[1.6] mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Full Terms */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <div className="max-w-3xl mx-auto">
            {sections.map((section, si) => (
              <AnimatedSection key={section.title} delay={si * 30}>
                <div className="mb-5">
                  <h2 className="text-[17px] font-bold text-[#F5F7FA] mb-2">{section.title}</h2>
                  <div className="flex flex-col gap-2">
                    {section.content.map((text, ci) => (
                      <p key={ci} className="text-[15px] text-[#A7AFBF] leading-[1.9]">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Need Clarification?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              If anything in these terms is unclear or you have questions about a specific clause,
              please reach out. We believe in clear communication.
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
