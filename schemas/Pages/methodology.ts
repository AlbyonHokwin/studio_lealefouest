import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'methodology',
    type: 'document',
    title: 'Méthode',
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
            name: 'methods', type: 'array', title: 'Méthodes',
            of: [defineArrayMember({
                name: 'method',
                type: 'object',
                title: 'Méthode',
                fields: [
                    defineField({ name: 'name', type: 'string', title: 'Nom' }),
                    defineField({
                        name: 'picture', type: 'reference', title: 'Image',
                        to: [{ type: 'accessibleImage' }]
                    }),
                ]
            })],
            validation: Rule => Rule.min(1)
        }),
    ]
})