import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'textWithEmphasis',
    type: 'object',
    title: 'Texte avec accentuation',
    fields: [
        defineField({
            name: 'text', type: 'array', title: 'Texte',
            of: [defineArrayMember({
                type: 'block',
                styles: [],
                lists: [],
                marks: {
                    decorators: [{ title: 'Emphasis', value: 'em' }],
                    annotations: []
                }
            })]
        })
    ]
})