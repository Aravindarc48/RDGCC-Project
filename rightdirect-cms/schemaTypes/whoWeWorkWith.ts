import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'whoWeWorkWith',
  title: 'Who We Work With',
  type: 'document',

  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'audiences',
      title: 'Audience Categories',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'title',
              title: 'Audience Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Audience Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'image',
              title: 'Audience Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description: 'Descriptive alt text representing the audience segment.',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              validation: (Rule) => Rule.required(),
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
  ],
})