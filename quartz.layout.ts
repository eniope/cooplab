import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Layout — cooplab.org (hub)
 *
 * Aligné sur lisieres.cooplab.org et these.cooplab.org :
 * Graph, TableOfContents et Backlinks présents sur les pages de contenu.
 */

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [Component.LinksHeader()],

  afterBody: [],

  footer: Component.Footer({
    links: {
      "lisieres.cooplab.org": "https://lisieres.cooplab.org",
      "these.cooplab.org": "https://these.cooplab.org",
      "CC BY-SA": "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents2()),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
  ],

  right: [
    Component.MobileOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.MobileOnly(Component.TableOfContents2()),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
  ],

  right: [
    Component.MobileOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
