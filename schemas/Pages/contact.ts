import { defineType, defineField } from "sanity";
import type { PortableTextTextBlock, PortableTextSpan } from "sanity";

export default defineType({
    name: 'contact',
    type: 'document',
    title: 'Me contacter',
    fields: [
        defineField({
            name: 'component', type: 'reference', title: 'Composant associé',
            to: [{ type: 'component' }],
        }),

        defineField({
            name: 'picture', type: 'reference', title: 'Image',
            to: [{ type: 'accessibleImage' }],
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'buttonText', type: 'string', title: 'Texte bouton',
            validation: Rule => Rule.required(),
        })
    ],
})