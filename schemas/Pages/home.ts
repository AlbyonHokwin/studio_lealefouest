import { defineType, defineField } from "sanity";
import type { PortableTextTextBlock, PortableTextSpan } from "sanity";

export default defineType({
    name: 'home',
    type: 'document',
    title: 'Accueil',
    fields: [
        defineField({
            name: 'component', type: 'reference', title: 'Composant associé',
            to: [{ type: 'component' }],
        }),

        defineField({
            name: 'introductory', type: 'textWithEmphasis', title: 'Phrase d\'accueil',
            validation: Rule => Rule.required().custom(({ text }: {text: PortableTextTextBlock[]}) => {
                if (!text || !text[0]) return true;

                const children = text[0].children as PortableTextSpan[];
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