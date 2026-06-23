import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const navLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const evidenceStatSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const takeActionStepSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const siteSchema = z.object({
  siteName: z.string(),
  tagline: z.string(),
  acquisitionEmail: z.string().email(),
  heroImage: z.string().url(),
  nav: z.array(navLinkSchema),
  hero: z.object({
    headline: z.string(),
    subheadline: z.string(),
    taglineText: z.string(),
    paragraphs: z.array(z.string()),
    closingLine: z.string(),
  }),
  generationalImperative: z.object({
    title: z.string(),
    intro: z.string(),
    paragraphs: z.array(z.string()),
    closingLine: z.string(),
  }),
  previousGenerations: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
  }),
  noPatience: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
    closingLine: z.string(),
  }),
  noRemorse: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
    closingLine: z.string(),
  }),
  noApologies: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
    closingLine: z.string(),
  }),
  theRecord: z.object({
    title: z.string(),
    intro: z.string(),
    items: z.array(z.object({
      label: z.string(),
      body: z.string(),
    })),
    closingLine: z.string(),
  }),
  multigenerationalStand: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
  }),
  thePledge: z.object({
    title: z.string(),
    intro: z.string(),
    lines: z.array(z.string()),
    signatureLabel: z.string(),
    generationLabel: z.string(),
    closingLine: z.string(),
  }),
  takeAction: z.object({
    title: z.string(),
    steps: z.array(takeActionStepSchema),
    crossLinkLabel: z.string(),
    crossLinkUrl: z.string().url(),
  }),
  footer: z.object({
    tagline: z.string(),
    disclaimer: z.string(),
    acquisitionHeadline: z.string(),
    acquisitionBody: z.string(),
    acquisitionCta: z.string(),
    copyright: z.string(),
    finalLine: z.string(),
  }),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/site' }),
  schema: siteSchema,
});

export const collections = { site };
