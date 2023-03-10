import { defineType, defineField } from "sanity";

export default defineType({
    name: 'comment',
    type: 'document',
    title: 'Commentaire',
    fields: [
        defineField({ name: 'author', type: 'string', title: 'Auteur' }),

        defineField({ name: 'text', type: 'text', title: 'Texte' })
    ]
})