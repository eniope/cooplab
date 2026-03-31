import { QuartzComponent, QuartzComponentProps } from "./types"

/**
 * LinksHeader — utopia.cooplab.org
 * Navigation principale de l'espace Utopia / CARe
 */
const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="/">Utopia</a>
      <a class="links-header-item" href="/care/">CARe — Robustesse &amp; soin</a>
      <a class="links-header-item" href="/partage/">Partage</a>
      <a class="links-header-item" href="/a-propos">À propos</a>
      <a class="links-header-item links-header-hub" href="https://cooplab.org">↩ cooplab.org</a>
    </nav>
  )
}

export default (() => LinksHeader)
