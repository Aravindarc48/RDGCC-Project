
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
        initialValue: 'Strategy · Technology · Execution',
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
  initialValue: 'The track record',
}),

defineField({
  name: 'statsDescription',
  title: 'Stats Section Description',
  type: 'text',
  initialValue:
    'Delivered across industries, growth stages, and geographies.',
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
  initialValue: [
    { value: '70+', label: 'Clients' },
    { value: '90+', label: 'Projects' },
    { value: '10+', label: 'Industries Served Globally' },
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
  ],
})
