import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { BlogContactForm } from "@/components/blog/blog-contact-form"
import { BlogCommunityCTA } from "@/components/blog/blog-community-cta"

export const metadata: Metadata = {
  title: "Blog Técnico — ST Farma",
  description:
    "Artigos, revisões técnicas e protocolos de Samir Tannuri sobre cosmetologia avançada, tricologia, dermocosmética e tecnologia farmacêutica magistral e industrial.",
}

export default function BlogPage() {
  return (
    <PageLayout>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
      <BlogContactForm />
      <BlogCommunityCTA />
    </PageLayout>
  )
}
