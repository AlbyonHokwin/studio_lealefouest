import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'textWithStrong',
    type: 'object',
    title: 'Texte avec gras',
    fields: [
        defineField({
            name: 'text', type: 'array', title: 'Texte',
            of: [defineArrayMember({
                type: 'block',
                styles: [],
                lists: [],
                marks: {
                    decorators: [{ title: 'Strong', value: 'strong' }],
                    annotations: []
                }
            })]
        })
    ]
})