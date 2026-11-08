
import { defineType, defineField } from 'sanity'

export const successStories = defineType({
  name: 'successStories',
  title: 'Homepage Success Stories',
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
      name: 'stories',
      title: 'Success Story Cards',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          name: 'successStory',
          title: 'Success Story',

          fields: [
            defineField({
              name: 'industry',
              title: 'Industry',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'location',
              title: 'Country / Location',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'clientName',
              title: 'Client Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'image',
              title: 'Story Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'icon',
              title: 'Card Icon',
              type: 'string',
              description:
                'Lucide icon name, for example code, briefcase-business, chart-line, users, or shopping-cart.',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'title',
              title: 'Story Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Story Description',
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

          preview: {
            select: {
              title: 'clientName',
              subtitle: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'moreStoriesIcon',
      title: 'More Stories Icon',
      type: 'string',
      description: 'Lucide icon name.',
    }),

    defineField({
      name: 'moreStoriesLabel',
      title: 'More Stories Label',
      type: 'string',
    }),

    defineField({
      name: 'moreStoriesTitle',
      title: 'More Stories Title',
      type: 'string',
    }),

    defineField({
      name: 'moreStoriesLinkText',
      title: 'More Stories Link Text',
      type: 'string',
    }),

    defineField({
      name: 'moreStoriesLinkUrl',
      title: 'More Stories Link URL',
      type: 'string',
    }),
  ],
})
