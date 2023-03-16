import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'contact',
    type: 'document',
    title: 'Me contacter',
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

        defineField({
            name: 'picture', type: 'reference', title: 'Image',
            to: [{ type: 'accessibleImage' }],
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'buttonText', type: 'string', title: 'Texte bouton',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'comments', type: 'array', title: 'Commentaires',
            of: [defineArrayMember({ type: 'reference', to: [{ type: 'comment' }] })]
        }),
    ],
})