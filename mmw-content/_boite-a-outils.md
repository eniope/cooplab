---
title: "Boîte à outils — snippets Quartz"
type: page
publish: false
statut: en_cours
---

> Fichier de référence opérationnelle. Ne pas publier. Copier-coller les blocs selon besoin.
> Couleurs signatures : cooplab `#C1623F` · utopia `#4A7C59` · thèse `#3A7CB8`

---

## IMAGES

### Image centrée, taille contrôlée

```html
<p style="text-align:center;">
  <img src="/_static/images/NOM-FICHIER.jpg"
       alt="description"
       style="max-width:60%; height:auto;" />
</p>
```

### Image avec légende

```html
<figure style="text-align:center;">
  <img src="/_static/images/NOM-FICHIER.jpg"
       alt="description"
       style="max-width:60%; height:auto;" />
  <figcaption style="font-size:0.85em; color:#888; margin-top:0.4em;">
    Légende — source, date, crédit
  </figcaption>
</figure>
```

### Miniature → plein écran au survol (lightbox hover)

```html
<!-- Remplacer NOM-FICHIER par le nom réel de l'image -->
<div class="lbx" style="display:inline-block; cursor:pointer;">
  <img src="/_static/images/NOM-FICHIER.jpg"
       alt="description"
       style="max-width:200px; height:auto; border-radius:4px;" />
  <div class="lbx-full"
       style="display:none; position:fixed; inset:0;
              background:rgba(0,0,0,0.85); z-index:9999;
              align-items:center; justify-content:center; cursor:zoom-out;">
    <img src="/_static/images/NOM-FICHIER.jpg"
         style="max-height:90vh; max-width:90vw;" />
  </div>
</div>
<style>
  .lbx:hover .lbx-full, .lbx-full:hover { display:flex !important; }
</style>
```

> Sur mobile (pas de hover) : seule la miniature s'affiche. Pour plusieurs images par page, dupliquer le bloc — le CSS est partagé, pas besoin de le répéter.

---

## CALLOUTS

### Callouts natifs

```markdown
> [!note] Titre optionnel
> Information neutre, contexte, rappel.

> [!tip] Conseil
> Une piste à explorer, une astuce pratique.

> [!warning] Attention
> Point de vigilance, limite, mise en garde.

> [!danger] Danger
> Erreur critique, point bloquant.

> [!info] Info
> Complément non essentiel.

> [!question] Question ouverte
> Ce qui reste à élucider.

> [!success] Réussite
> Ce qui a fonctionné, une étape franchie.

> [!summary] Résumé
> Synthèse condensée.

> [!example] Exemple
> Illustration concrète d'un concept.

> [!quote] Citation
> Extrait de source, parole d'auteur.
```

### Callout repliable (fermé par défaut)

```markdown
> [!note]- Titre — cliquer pour déplier
> Contenu masqué par défaut.
```

### Callout repliable (ouvert par défaut)

```markdown
> [!note]+ Titre — repliable
> Contenu visible, repliable au clic.
```

### Callout personnalisé CARe

```markdown
> [!care] Communauté apprenante
> Contenu lié aux pratiques de soin, de robustesse, d'autoformation collective.
```

---

## TABLEAUX

### Tableau standard

```markdown
| Champ | Valeur | Statut |
|---|---|---|
| type | note_pivot | ✓ |
| grappe | robustesse_et_soin | ✓ |
| niveau_dikw | knowledge | en cours |
| espace | public | ✓ |
```

### Tableau HTML (plus de contrôle)

```html
<table style="width:100%; border-collapse:collapse; font-size:0.9em;">
  <thead>
    <tr style="background:#C1623F; color:white;">
      <th style="padding:8px; text-align:left;">Champ</th>
      <th style="padding:8px; text-align:left;">Valeur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border-bottom:1px solid #e5e5e5;">type</td>
      <td style="padding:8px; border-bottom:1px solid #e5e5e5;">note_pivot</td>
    </tr>
    <tr style="background:#faf0ec;">
      <td style="padding:8px;">grappe</td>
      <td style="padding:8px;">robustesse_et_soin</td>
    </tr>
  </tbody>
</table>
```

> Changer `#C1623F` par `#4A7C59` (utopia) ou `#3A7CB8` (thèse) selon le site.

---

## CITATIONS

### Citation simple (blockquote)

```markdown
> Une pensée suspendue, en lisière d'une autre.
```

### Citation nommée

```markdown
> "Mon corps décline mais ma pensée croît. Dans ma vieillesse il y a une éclosion."
>
> — Victor Hugo
```

### Citation callout

```markdown
> [!quote] Victor Hugo
> "Mon corps décline mais ma pensée croît. Dans ma vieillesse il y a une éclosion."
```

---

## NOTES DE BAS DE PAGE

```markdown
Texte avec une note.[^1] Et une autre note plus loin.[^2]

[^1]: Contenu de la première note de bas de page.
[^2]: Contenu de la deuxième note, aussi longue que nécessaire.
```

---

## COLONNES

> ⚠️ Non fonctionnel en v1 — CSS à ajouter. Réservé pour v2.

```markdown
> [!multi-column]
>
> > [!note] Colonne gauche
> > Contenu à gauche — note, liste, fragment.
>
> > [!note] Colonne droite
> > Contenu à droite — complément, contre-point.
```

---

## TYPOGRAPHIE UTILE

```markdown
**gras** · *italique* · ~~barré~~ · `code inline`

==surligné== (Obsidian uniquement, pas rendu sur le site)

<mark>surligné HTML</mark> (rendu sur le site)

<small>texte petit</small>

<br> (saut de ligne forcé)

---  (séparateur horizontal)
```

---

*v1 — avril 2026 — à faire évoluer par usage*
