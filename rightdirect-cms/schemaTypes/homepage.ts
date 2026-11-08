
import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'heroEyebrow',
        title: 'Hero Eyebrow / Tagline',
        type: 'string',
    }),

    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Descriptive alt text for screen readers and accessibility.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),

    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'url',
    }),
    defineField({
  name: 'statsHeading',
  title: 'Stats Section Heading',
  type: 'string',
}),

defineField({
  name: 'statsDescription',
  title: 'Stats Section Description',
  type: 'text',
}),

defineField({
  name: 'stats',
  title: 'Track Record Statistics',
  type: 'array',
  of: [
    defineField({
      name: 'stat',
      title: 'Statistic',
      type: 'object',
      fields: [
        defineField({
          name: 'value',
          title: 'Number / Value',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
}),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),

    defineField({
      name: 'ogImage',
      title: 'Open Graph / Social Share Image',
      description: 'Image displayed when sharing the page on social media (recommended 1200x630)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          description: 'Descriptive text for accessibility and social media preview',
          type: 'string',
        }),
      ],
    }),
  ],
})
