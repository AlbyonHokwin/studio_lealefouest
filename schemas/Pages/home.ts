import { defineType, defineField, defineArrayMember } from "sanity";
import type { ArrayRule, PortableTextTextBlock, PortableTextSpan } from "sanity";

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
            name: 'introductory', type: 'array', title: 'Phrase d\'accueil',
            of: [defineArrayMember({
                type: 'block',
                styles: [],
                lists: [],
                marks: {
                    decorators: [{ title: 'Emphasis', value: 'em' }],
                    annotations: []
                }
            })],
            validation: (Rule: ArrayRule<PortableTextTextBlock[]>) => Rule.required().custom((blocks) => {
                if (!blocks || !blocks[0]) return true;

                const children = blocks[0].children as PortableTextSpan[];
                const numberOfEmphasis: number = children.reduce((a, c) => {
                    if (!c.marks) return a;
                    return c.marks.includes('em') ? a + 1 : a;
                }, 0)

                if (numberOfEmphasis > 1) return 'Une seule partie doit être accentuée';

                if (numberOfEmphasis === children.length) return 'Ne pas accentuer tout le texte';

                return true
            }).error()
        }),

        defineField({
            name: 'picture', type: 'reference', title: 'Image',
            to: [{ type: 'accessibleImage' }],
            validation: Rule => Rule.required(),
        })
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