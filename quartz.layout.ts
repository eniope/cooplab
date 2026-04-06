import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Layout — cooplab.org (hub)
 *
 * Différences vs conversations :
 * - Pas de Graph
 * - Pas de Backlinks
 * - Pas de TableOfContents (pages courtes)
 * - LinksHeader simplifié (3 destinations)
 * - Search conservé
 */

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [Component.LinksHeader()],

  afterBody: [],

  footer: Component.Footer({
    links: {
      "utopia.cooplab.org": "https://utopia.cooplab.org",
      "conversations.cooplab.org": "https://these.cooplab.org",
      "CC BY-SA": "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })

  ],

  right: [
   
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],

  right: [],
}
