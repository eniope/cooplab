---
title: "Palette — démo typographique cooplab"
type: page
publish: false
---

<style>
/* ── PALETTE COOPLAB ÉLARGIE ─────────────────────
   Terracotta #C1623F + complémentaires teal/vert
   ──────────────────────────────────────────────── */
:root {
  /* Terracottas */
  --clr-main:      #C1623F;   /* terracotta signature */
  --clr-mid:       #C98567;   /* terracotta moyen */
  --clr-light:     #E8A48A;   /* terracotta clair */
  --clr-dark:      #8B3D22;   /* brique foncée */
  /* Teals complémentaires */
  --clr-teal-dk:   #2A5550;   /* teal foncé */
  --clr-teal-md:   #3A8A78;   /* teal moyen */
  --clr-teal-lt:   #7AB090;   /* sage clair */
  /* Neutres */
  --clr-neutral:   #6B5B52;   /* brun-gris chaud */
  --clr-bluegray:  #D6E4EA;   /* bleu-gris très pâle */
  --clr-xlight:    #F7EAE4;   /* pêche très pâle */
}

/* ── TITRES ─────────────────────────────────────── */
article.popover-hint h1 { color: var(--clr-main); }
article.popover-hint h2 { color: var(--clr-dark); border-bottom: 1px solid var(--clr-xlight); padding-bottom: 0.2em; }
article.popover-hint h3 { color: var(--clr-mid); }
article.popover-hint h4 { color: var(--clr-teal-dk); font-style: italic; }

/* ── LIENS ──────────────────────────────────────── */
article.popover-hint a { color: var(--clr-main); text-decoration-color: var(--clr-light); }
article.popover-hint a:hover { color: var(--clr-teal-md); }

/* ── BLOCKQUOTE ─────────────────────────────────── */
article.popover-hint blockquote {
  border-left: 3px solid var(--clr-main);
  background: transparent;
  padding-left: 1rem;
  color: var(--clr-neutral);
  font-style: italic;
}

/* ── CALLOUTS — barre gauche uniquement ─────────── */
.callout {
  background: transparent !important;
  border: none !important;
  border-left: 3px solid var(--clr-main) !important;
  border-radius: 0 !important;
  padding: 0.5rem 0 0.5rem 1rem !important;
}
.callout[data-callout="tip"]      { border-left-color: var(--clr-teal-md) !important; }
.callout[data-callout="success"]  { border-left-color: var(--clr-teal-lt) !important; }
.callout[data-callout="warning"]  { border-left-color: #B8860B !important; }
.callout[data-callout="danger"]   { border-left-color: #C0392B !important; }
.callout[data-callout="quote"]    { border-left-color: var(--clr-neutral) !important; }
.callout[data-callout="question"] { border-left-color: var(--clr-teal-dk) !important; }
.callout[data-callout="info"]     { border-left-color: var(--clr-mid) !important; }
.callout-title {
  background: transparent !important;
  color: var(--clr-dark) !important;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.callout-content { color: inherit; }

/* ── TABLEAUX ───────────────────────────────────── */
article.popover-hint table { border-collapse: collapse; width: 100%; }
article.popover-hint th {
  border-bottom: 2px solid var(--clr-main);
  color: var(--clr-dark);
  background: transparent;
  text-align: left;
  padding: 0.5em 0.8em;
}
article.popover-hint td { border-bottom: 1px solid var(--clr-xlight); padding: 0.5em 0.8em; }
article.popover-hint tr:hover td { background: color-mix(in srgb, var(--clr-bluegray) 40%, transparent); }

/* ── CODE INLINE ────────────────────────────────── */
article.popover-hint code { color: var(--clr-dark); background: var(--clr-bluegray); }
</style>

# Titre H1 — Lorem ipsum cooplab

## Titre H2 — Sed ut perspiciatis

### Titre H3 — Nemo enim ipsam

#### Titre H4 — Quis autem vel

Texte courant avec **gras**, *italique*, ~~barré~~ et `code inline`. Un [lien interne](#) et un [lien externe](https://cooplab.org) pour voir les couleurs appliquées aux deux types.

---

## Typographie et citations

> Une pensée suspendue, en lisière d'une autre. Le blockquote simple garde juste la barre gauche.

> "Mon corps décline mais ma pensée croît. Dans ma vieillesse il y a une éclosion."
>
> — Victor Hugo

---

## Callouts — barre gauche uniquement

> [!note] Note
> Information neutre, contexte, rappel. Pas d'aplat de fond — juste la barre et le titre discret.

> [!tip] Conseil
> Une piste à explorer. La barre passe au vert sage pour se distinguer sans alourdir.

> [!warning] Attention
> Point de vigilance. Barre dorée, sobre.

> [!danger] Danger
> Erreur critique. Barre rouge, visible sans crier.

> [!quote] Citation
> "Vivre laisse des traces irrévocables. Ce qu'on en fait ensuite, c'est déjà de la création."

> [!question] Question ouverte
> Ce qui reste à élucider. Barre bleue acier — couleur thèse.

> [!note]- Callout repliable — cliquer pour déplier
> Contenu masqué par défaut. Utile pour les développements optionnels.

---

## Tableau

| Champ | Valeur | Statut |
|---|---|---|
| type | note_pivot | ✓ |
| grappe | robustesse_et_soin | ✓ |
| niveau_dikw | knowledge | en cours |
| espace | public | ✓ |

---

## Listes

- Élément A — premier niveau
- Élément B
    - Sous-élément B1
    - Sous-élément B2
- Élément C

1. Premier
2. Deuxième
3. Troisième

---

## Notes de bas de page

Le premier kilomètre de l'espace vécu comme terrain épistémologique.[^1] La systématisation d'expérience comme méthode de travail.[^2]

[^1]: Concept fondateur d'Utopia — l'espace vécu comme point de départ, pas comme objet d'étude extérieur.
[^2]: Oscar Jara — Vivre → Classer → Élucider → Créer.

---

*Page de démo — ne pas publier. Adapter les couleurs avant de déployer.*
