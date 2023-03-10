import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'pricing',
    type: 'document',
    title: 'Tarif',
    fields: [
        defineField({
            name: 'component', type: 'reference', title: 'Composant associé',
            to: [{ type: 'component' }],
            hidden: ({ currentUser }) => {
                if (!currentUser) return true;
                return !(currentUser.roles.find(({ name }) => name === 'administrator'));
            },
            readOnly: ({ currentUser }) => {
                if (!currentUser) return true;
                return !(currentUser.roles.find(({ name }) => name === 'administrator'));
            }
        }),

        defineField({ name: 'headTitle', type: 'string', title: 'Titre de la page' }),

        defineField({
            name: 'price', type: 'number', title: 'Prix',
            validation: Rule => Rule.required()
        }),

        defineField({ name: 'motivation', type: 'string', title: 'Phrase de motivation' }),

        defineField({
            name: 'icon', type: 'reference', title: 'Icône',
            to: [{ type: 'icon' }]
        }),

        defineField({
            name: 'reasons', type: 'array', title: 'Justificatifs',
            of: [{ type: 'string' }],
            validation: Rule => Rule.min(1)
        }),
    ]
})