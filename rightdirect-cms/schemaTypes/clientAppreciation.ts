import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'clientAppreciation',
  title: 'Client Appreciation',
  type: 'document',

  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'autoplayEnabled',
      title: 'Enable Automatic Switching',
      type: 'boolean',
    }),

    defineField({
      name: 'autoplayInterval',
      title: 'Switch Interval (Seconds)',
      type: 'number',
      description: 'Time before automatically switching to the next testimonial.',
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'country',
              title: 'Country',
              type: 'string',
            }),

            defineField({
              name: 'testimonial',
              title: 'Testimonial Content',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'personName',
              title: 'Person Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'personRole',
              title: 'Person Role',
              type: 'string',
            }),

            defineField({
              name: 'profileImage',
              title: 'Profile Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description: 'Descriptive alt text for the person profile photo.',
                  validation: (Rule) => Rule.required(),
                }),
              ],
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