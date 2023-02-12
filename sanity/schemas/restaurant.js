import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .error(`This field is required, please enter Restaurant name`)
    }),
    defineField({
      name: 'shirt_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) =>
        Rule.max(200)
          .error("Max length of description is 200 characters")
    }),
    defineField({
      name: 'image',
      title: 'Image of Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',

    }),
    defineField({
      name: 'long',
      title: 'Longtitude of the Restaurant',
      type: 'number',

    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .error(`This field is required, please enter Restaurant address`)
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Ratting from (1 - 5 Stars)',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
