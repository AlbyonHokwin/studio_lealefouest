import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'media',
    type: 'object',
    title: 'Média',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Nom' }),

        defineField({ name: 'mainUrl', type: 'url', title: 'Lien principal'}),

        defineField({ name: 'text', type: 'string', title: 'Texte' }),

        defineField({
            name: 'image', type: 'reference', title: 'Image',
            to: [{ type: 'accessibleImage' }]
        }),

        defineField({
            name: 'useArrow', type: 'boolean', title: 'Utiliser flèche',
            initialValue: true
        }),

        defineField({
            name: 'socialNetworks', type: 'array', title: 'Réseaux sociaux',
            of: [defineArrayMember({
                name: 'socialNetwork',
                type: 'object',
                title: 'Réseau social',
                fields: [
                    defineField({ name: 'name', type: 'string', title: 'Nom' }),
                    defineField({
                        name: 'icon', type: 'reference', title: 'Icône',
                        to: [{ type: 'icon' }]
                    }),
                    defineField({ name: 'url', type: 'url', title: 'Lien' })
                ]
            })]
        })
    ]
})