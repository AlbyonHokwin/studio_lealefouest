import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'home',
    type: 'document',
    title: 'Page d\'accueil',
    fields: [
        defineField({
            name: 'component', type: 'reference', title: 'Composant associé',
            to: [{ type: 'component' }],
        }),

        defineField({
            name: 'catchPhrases', type: 'array', title: 'Phrases d\'accroche',
            of: [defineArrayMember({
                name: 'part',
                type: 'object',
                title: 'Partie',
                fields: [
                    defineField({ type: 'string', name: 'text' }),
                    defineField({ type: 'string', name: 'font' })
                ]
            })]
        }),
    ],
    preview: {
        select: {
            name: 'component.name',
            page: 'component.page'
        },
        prepare(selection) {
            const { name, page } = selection;
            return {
                title: `${name} / Page n°${page}`
            }
        }
    }
})