import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: 'profile',
    type: 'document',
    title: 'Profil',
    fields: [
        defineField({ name: 'firstname', type: 'string', title: 'Prénom' }),

        defineField({ name: 'lastname', type: 'string', title: 'Nom' }),

        defineField({ name: 'email', type: 'string', title: 'Adresse e-mail' }),

        defineField({ name: 'phone', type: 'string', title: 'Numéro de téléphone' }),
    ]
})