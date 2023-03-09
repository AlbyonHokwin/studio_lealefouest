import { defineField, defineType } from "sanity";

export default defineType({
    name: 'accessibleImage',
    type: 'document',
    title: 'Image',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Nom' }),

        defineField({
            name: 'image', type: 'image', title: 'Image',
            options: { hotspot: true }
        }),

        defineField({
            name: 'alt', type: 'string', title: 'Texte alternatif',
            description: 'Obligatoire : permet aux non-voyants d\'obtenir une description de l\'image',
            hidden: ({ parent }) => !parent?.image,
            validation: Rule => [
                Rule.required(),
            ],
        }),

        defineField({
            name: 'caption', type: 'string', title: 'Légende',
            description: 'Légende de l\'image',
            hidden: ({ parent }) => !parent?.image,
        })
    ]
})