
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',

  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'categories',
      title: 'FAQ Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'categoryTitle',
              title: 'Category Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'questions',
              title: 'Questions',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'question',
                      title: 'Question',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'answer',
                      title: 'Answer',
                      type: 'text',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'linkText',
                      title: 'Link Text',
                      type: 'string',
                    }),

                    defineField({
                      name: 'linkUrl',
                      title: 'Link URL',
                      type: 'string',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'buttonText',
      title: 'Bottom Button Text',
      type: 'string',
    }),

    defineField({
      name: 'buttonUrl',
      title: 'Bottom Button URL',
      type: 'string',
    }),
  ],
})
