import { defineConfig } from 'sanity'
import { deskTool, StructureBuilder } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes, singletonSchemas, singletonTypes } from './schemas'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))


export default defineConfig({
  name: 'default',
  title: 'website Lea Le Fouest',

  projectId: 'vnzj5fe1',
  dataset: 'production',

  plugins: [
    deskTool(
      {
        structure: (S) =>
          S.list()
            .title("Content")
            .items([

              // Our singleton type has a list item with a custom child
              S.listItem()
                .title("Pages")
                .id("pages")
                .child(
                  S.list()
                    .title("Pages")
                    .items(
                      singletonSchemas.map(singletonSchema => singletonListItem(S, singletonSchema.typeName, singletonSchema.title))
                    )
                    .showIcons(false)
                ),

              // Regular document types
              S.documentTypeListItem("profile").title("Profil"),
              S.documentTypeListItem("component").title("Composant"),
              S.documentTypeListItem("accessibleImage").title("Image"),
              S.documentTypeListItem("icon").title("Icône"),
            ])
            .showIcons(false),
      }
    ),
    visionTool()
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
