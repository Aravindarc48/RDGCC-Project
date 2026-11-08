
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'trustedBrands',
  title: 'Trusted Brands',
  type: 'document',

  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Trusted by global brands',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'brands',
      title: 'Brand Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'brandName',
              title: 'Brand Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'logo',
              title: 'Brand Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description: 'Descriptive alt text for the brand logo.',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'websiteUrl',
              title: 'Website URL',
              type: 'url',
            }),

            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'animationSpeed',
      title: 'Animation Speed (seconds)',
      type: 'number',
      initialValue: 30,
      description: 'Higher values make the logo animation slower.',
    }),
  ],
})
