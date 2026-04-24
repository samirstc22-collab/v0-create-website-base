import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { BlogContactForm } from "@/components/blog/blog-contact-form"
import { BlogCommunityCTA } from "@/components/blog/blog-community-cta"

export const metadata: Metadata = {
  title: "Blog Científico — Clube de Fórmulas",
  description:
    "Artigos peer-reviewed, revisões técnicas e ensaios clínicos do Samir Tannuri sobre cosmetologia avançada, tricologia, dermocosmética e gestão farmacêutica.",
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
