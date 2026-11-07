
import { defineType, defineField } from 'sanity'

export const howWeWork = defineType({
  name: 'howWeWork',
  title: 'Homepage - How We Work',
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(4),

      of: [
        defineField({
          name: 'step',
          title: 'Step',
          type: 'object',

          fields: [
            defineField({
              name: 'stepNumber',
              title: 'Step Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Search', value: 'search' },
                  { title: 'Palette', value: 'palette' },
                  { title: 'Rocket', value: 'rocket' },
                  { title: 'Settings', value: 'settings' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Step Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
