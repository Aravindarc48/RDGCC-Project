
import { defineType, defineField } from 'sanity'

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Homepage Services Section',
  type: 'document',

  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),

    defineField({
      name: 'cards',
      title: 'Service Cards',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(4),

      of: [
        defineField({
          name: 'serviceCard',
          title: 'Service Card',
          type: 'object',

          fields: [
            defineField({
              name: 'heading',
              title: 'Card Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Card Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'linkUrl',
              title: 'Link URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
