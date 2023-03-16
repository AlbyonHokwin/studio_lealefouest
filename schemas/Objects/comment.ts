import { defineType, defineField } from "sanity";

export default defineType({
    name: 'comment',
    type: 'document',
    title: 'Commentaire',
    fields: [
        defineField({ name: 'author', type: 'string', title: 'Auteur' }),

        defineField({ name: 'text', type: 'text', title: 'Texte' }),

        defineField({
            name: 'quoteIcon', type: 'reference', title: 'Icône de guillements',
            to: [{ type: 'icon' }]
        }),
    ]
})