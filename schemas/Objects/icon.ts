import { defineType, defineField } from "sanity";

export default defineType({
    name: 'icon',
    type: 'document',
    title: 'Icône',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Nom' }),

        defineField({
            name: 'icon', type: 'image', title: 'Icône',
            options: { hotspot: true }
        }),

        defineField({
            name: 'alt', type: 'string', title: 'Texte alternatif',
            description: 'Obligatoire : permet aux non-voyants d\'obtenir une description de l\'icône',
            hidden: ({ parent }) => !parent?.icon,
            validation: Rule => [
                Rule.required(),
            ],
        }),
    ]
})