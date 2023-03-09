import { defineType, defineField } from "sanity";

export default defineType({
    name: 'component',
    type: 'document',
    title: 'Composant',
    fields: [
        defineField({
            name: 'name', type: 'string', title: 'Nom',
            validation: Rule => Rule.required()
        }),

        defineField({
            name: 'page', type: 'number', title: 'Page n°',
            description: 'Position de ce composant sur le site',
            validation: Rule => Rule.required()
        })
    ],
    preview: {
        select: {
            name: 'name',
            page: 'page',
        },
        prepare(selection) {
            const { name, page } = selection;
            return {
                title: `${name} / Page n°${page}`
            }
        }
    }
})