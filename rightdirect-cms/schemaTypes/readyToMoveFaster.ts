
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'readyToMoveFaster',
  title: 'Ready to Move Faster CTA',
  type: 'document',

  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'overlayColor',
      title: 'Overlay Color',
      type: 'string',
      description: 'CSS color for the background overlay.',
    }),

    defineField({
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(1),
      description: 'Enter a value between 0 and 1.',
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sectionPadding',
      title: 'Section Padding (px)',
      type: 'number',
      description: 'Controls the vertical spacing of the section.',
    }),

    defineField({
      name: 'headingColor',
      title: 'Heading Color',
      type: 'string',
    }),

    defineField({
      name: 'descriptionColor',
      title: 'Description Color',
      type: 'string',
    }),

    defineField({
      name: 'buttonColor',
      title: 'Button Background Color',
      type: 'string',
    }),

    defineField({
      name: 'buttonTextColor',
      title: 'Button Text Color',
      type: 'string',
    }),
  ],
})
