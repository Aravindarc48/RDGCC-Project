
import { defineField, defineType } from 'sanity'

const navigationLink = {
  name: 'navigationLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
}

const navigationGroup = {
  name: 'navigationGroup',
  title: 'Navigation Group',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Category URL',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Submenu Links',
      type: 'array',
      of: [navigationLink],
    }),
  ],
}

const navigationItem = {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Navigation Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Navigation URL',
      type: 'string',
    }),
    defineField({
      name: 'menuType',
      title: 'Menu Type',
      type: 'string',
      options: {
        list: [
          { title: 'Normal Link', value: 'link' },
          { title: 'Dropdown', value: 'dropdown' },
          { title: 'Mega Menu', value: 'mega' },
        ],
      },
      initialValue: 'link',
    }),
    defineField({
      name: 'groups',
      title: 'Dropdown Groups',
      type: 'array',
      of: [navigationGroup],
    }),
  ],
}

export const navigation = defineType({
  name: 'navigation',
  title: 'Website Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'RightDirect',
    }),
    defineField({
      name: 'logoHref',
      title: 'Logo URL',
      type: 'string',
      initialValue: '/',
    }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [navigationItem],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button URL',
      type: 'string',
      initialValue: '/contact',
    }),
  ],
})
