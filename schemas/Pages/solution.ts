import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'solution',
    type: 'document',
    title: 'Solution',
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
            name: 'picture', type: 'reference', title: 'Image',
            to: [{ type: 'accessibleImage' }],
        }),

        defineField({
            name: 'solutions', type: 'array', title: 'Solutions',
            of: [defineArrayMember({ type: 'string' })],
            validation: Rule => Rule.max(5)
        }),

        defineField({
            name: 'iconBonus', type: 'reference', title: 'Icône pour bonus',
            to: [{ type: 'icon' }]
        }),

        defineField({
            name: 'bonuses', type: 'array', title: 'Bonus',
            of: [defineArrayMember({ type: 'textWithStrong' })],
            validation: Rule => Rule.max(3)
        }),
    ]
})