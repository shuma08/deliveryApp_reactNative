import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200)

    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{ type: 'restaurant' }]
        }
      ]
    }),
    defineField({
      name: 'image',
      title: 'Image of Dish',
      type: 'image'
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //   },
  // },
})
