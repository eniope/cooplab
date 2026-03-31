import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import UpcomingEvents from "./quartz/components/UpcomingEvents"

/**
 * Layout — utopia.cooplab.org
 * Living lab + CARe Robustesse & Soin
 *
 * Différences vs conversations :
 * - LinksHeader spécifique (sections utopia)
 * - RecentNotes dans la colonne droite (actualité du labo)
 * - Graph désactivé (graphe moins central ici)
 * - Composant UpcomingEvents dans right (à créer pour CARe)
 */

// =================================================
// SHARED
// =================================================

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [
    Component.LinksHeader(),   // → LinksHeader.tsx spécifique utopia
  ],

  afterBody: [],

  footer: Component.Footer({
    links: {
      "cooplab.org": "https://cooplab.org",
      "CC BY-SA": "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  }),
}

// =================================================
// LAYOUT — PAGE DE CONTENU
// =================================================

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
    // Rencontres CARe depuis data/events.json
    Component.DesktopOnly(UpcomingEvents()),
    // RecentNotes : actualité du living lab
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Récemment dans le labo",
        limit: 4,
        filter: (f) =>
          f.slug!.startsWith("partage/") ||
          f.slug!.startsWith("care/"),
      })
    ),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// =================================================
// LAYOUT — PAGE LISTE
// =================================================

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
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
