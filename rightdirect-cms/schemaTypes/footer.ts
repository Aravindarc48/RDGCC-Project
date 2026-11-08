
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Website Footer',
  type: 'document',

  fields: [
    // Brand section
    defineField({
      name: 'brandLogo',
      title: 'Brand Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Descriptive alt text for the primary brand logo.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'brandDescription',
      title: 'Brand Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'partnerLogo',
      title: 'Partner Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Descriptive alt text for the partner logo.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Footer link columns
    defineField({
      name: 'linkColumns',
      title: 'Footer Link Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'columnTitle',
              title: 'Column Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Link Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'url',
                      title: 'Link URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),

    // Contact information
    defineField({
      name: 'contactTitle',
      title: 'Contact Column Title',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 5,
    }),

    // Social media
    defineField({
      name: 'socialTitle',
      title: 'Social Media Heading',
      type: 'string',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'X / Twitter', value: 'twitter' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'url',
              title: 'Social Media URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // Bottom footer
    defineField({
      name: 'bottomLinks',
      title: 'Bottom Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Link Label',
              type: 'string',
            }),

            defineField({
              name: 'url',
              title: 'Link URL',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Example: RightDirect Growth Consulting Company. All rights reserved worldwide.',
    }),
  ],
})
