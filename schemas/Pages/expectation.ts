import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'expectation',
    type: 'document',
    title: 'Attente',
    fields: [
        defineField({
            name: 'component', type: 'reference', title: 'Composant associé',
            to: [{ type: 'component' }],
        }),

        defineField({ name: 'headTitle', type: 'string', title: 'Titre de la page' }),

        defineField({
            name: 'expectations', type: 'array', title: 'Attentes',
            of: [defineArrayMember({
                name: 'expectationItem',
                type: 'object',
                title: 'Attente',
                fields: [
                    defineField({ name: 'text', type: 'string', title: 'Texte' }),
                    defineField({
                        name: 'icon', type: 'reference', title: 'Icône',
                        to: [{ type: 'icon' }]
                    })
                ]
            })],
            validation: Rule => Rule.max(10),
        })
    ]
})