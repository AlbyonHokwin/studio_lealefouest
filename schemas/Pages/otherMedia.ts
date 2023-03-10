import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'otherMedia',
    type: 'document',
    title: 'Autre média',
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
            name: 'arrowIcon', type: 'reference', title: 'Icône de flèche',
            to: [{ type: 'icon' }]
        }),

        defineField({
            name: 'medias', type: 'array', title: 'Médias',
            of: [defineArrayMember({ type: 'media' })],
            validation: Rule => Rule.max(3),
        })
    ]
})