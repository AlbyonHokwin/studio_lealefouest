import { defineType, defineField, defineArrayMember } from "sanity";
import type { PortableTextTextBlock, PortableTextSpan } from "sanity";

export default defineType({
    name: 'why',
    type: 'document',
    title: 'Pourquoi',
    fields: [
        defineField({
            name: 'component', type: 'reference', title: 'Composant associé',
            to: [{ type: 'component' }],
        }),

        defineField({ name: 'headTitle', type: 'string', title: 'Titre de la page' }),

        defineField({
            name: 'shockPhrase', type: 'textWithEmphasis', title: 'Phrase choc',
            validation: Rule => Rule.required().custom(({ text }: {text: PortableTextTextBlock[]}) => {
                if (!text || !text[0]) return true;
                
                if (text.length > 1) return 'Ne pas utiliser de retour à la ligne';
                
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
            name: 'causes', type: 'array', title: 'Causes',
            of: [defineArrayMember({
                name: 'cause',
                type: 'object',
                title: 'Cause',
                fields: [
                    defineField({ name: 'name', type: 'string', title: 'Nom' }),
                    defineField({
                        name: 'icon', type: 'reference', title: 'Icône',
                        to: [{ type: 'icon' }]
                    })
                ]
            })],
            validation: Rule => Rule.max(5),
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