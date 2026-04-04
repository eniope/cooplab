---
type: page
title: "cooplab.org"
date: 2026-04-03
status: ouverture
orientation: enquete-situee
regime: seuil
description: "Un habitant-chercheur au travail : habiter ensemble ce territoire qui va changer, et se préparer à l'urgence des communs."
publish: true
---
### Ne pas détourner les yeux

« Comme beaucoup d'entre nous, je vis dans un territoire qui va changer. Alors ce qui se passe ici, sur cooplab.org, c'est ma façon de ne pas détourner les yeux. »

Cette posture s'ancre dans une conviction simple : nous habitons un monde où l'humanisme est fragile[^1].

### Tenir deux exigences

C'est depuis cette fragilité que je tente de tenir ensemble deux exigences :
- une intériorité citoyenne, c'est-à-dire une capacité à se connaître, à s'ancrer dans ses valeurs et à se rendre disponible à ce qui fait sens pour la vie commune[^2] ;
- et une prochaine expérience de citoyenneté, encore incertaine, que j'explore ici sous forme de futuribles[^3].

Entre intériorité et futuribles, il s'agit pour moi de tenir une ligne de travail : faire de l'expérience vécue non pas un reste, mais une source légitime de connaissance.

### Ce que l'expérience laisse

Pendant treize mois, j'ai participé à une recherche-action avec des habitants, des associatifs, des chercheurs. Nous avons produit quelque chose ensemble, puis le cadre formel s'est refermé.

Mais l'expérience, elle, ne se referme pas. Vivre laisse des traces irrévocables - et ce que l'on en fait ensuite relève déjà d'un travail de création.

cooplab.org est le lieu où je travaille cela : à voix haute, en processus, sans prétendre que c'est fini.

C'est une enquête en cours, située, qui prend au sérieux une hypothèse : la citoyenneté n'est pas seulement un statut, mais une expérience qui se construit dans les pratiques ordinaires[^4].

### Quatre espaces, une enquête

Quatre espaces s'organisent autour de cette enquête :
- [cooplab.org](https://cooplab.org) : l'enquête qui se documente elle-même - billets, dossiers, fabrique
- [utopia.cooplab.org](https://utopia.cooplab.org) : ce qui pourrait advenir ici - les futuribles, l'agenda civique en train de se construire
- [these.cooplab.org](https://these.cooplab.org) : une thèse-vie hors les murs - sur ce que la recherche citoyenne fait à la connaissance[^5]
- [cooplab.org/boussole](https://cooplab.org/boussole) : pour naviguer entre les espaces sans se perdre... ou moins se perdre.

Ce que vous trouverez ici n'est ni un résultat, ni un programme, ni une vitrine.

C'est un travail en train de se faire - et c'est fait pour.


<div style="text-align:center;">
  <div class="lbx" style="display:inline-block; cursor:pointer; position:relative;">
    <img src="/_static/images/Les-metiers-de-nos-pensees.jpg"
         alt="Les métiers de nos pensées"
         style="max-width:300px; height:auto; border-radius:4px; cursor:pointer;" />
    <div class="lbx-full"
         style="display:none; position:absolute; top:0; left:50%;
                transform:translateX(-50%); z-index:9999;
                background:rgba(255,255,255,0.97); padding:12px;
                border-radius:8px; box-shadow:0 8px 40px rgba(0,0,0,0.25);
                cursor:default;">
      <img src="/_static/images/Les-metiers-de-nos-pensees.jpg"
           style="max-height:65vh; max-width:65vw; display:block; border-radius:4px;" />
    </div>
  </div>
  <p style="font-size:0.85em; color:#888; margin-top:0.4em;">Les métiers de nos pensées</p>
</div>
<style>
  .lbx:hover .lbx-full, .lbx-full:hover { display:block !important; }
  .lbx img { cursor:pointer !important; }
</style>

---

[^1]: « Car nous sommes des hommes dont l'humanisme est fragile ; et chacun d'entre nous tisse dans la matière de sa vie des façons de se lier à des collectifs plus régulateurs, tout en assumant un principe d'individuation digne de ce nom, test de crédibilité de l'État de droit. Il s'agit dès lors d'inventer une technique de la furtivité - d'où cette charte tient sa désignation, le Verstohlen -, c'est-à-dire de maintien au monde en y consolidant nos pouvoirs d'agir et nos libertés. »
Cynthia Fleury & Antoine Fenoglio, *Charte du Verstohlen*.

[^2]: « L'intériorité citoyenne est la capacité à développer la connaissance de soi et l'ancrage dans ses valeurs profondes, l'inspiration et la créativité, la bienveillance et la capacité d'empathie, la recherche de sens et le goût de la responsabilité au service de la vie commune. »
Source : https://www.lilotcoop.com/interiorite-citoyenne

[^3]: Le terme « futuribles » désigne l'exploration des futurs possibles à partir des dynamiques du présent, en tenant compte des incertitudes, des bifurcations et des capacités d'action collective.
Voir : André-Yves Portnoff, *Le pari de l'intelligence. Des puces, des souris et des hommes*, Futuribles Perspectives, 2004. https://www.futuribles.com/le-pari-de-lintelligence-des-puces-des-souris-et-d/

[^4]: « La citoyenneté n'est pas uniquement un statut [...] elle est une des multiples structures de l'expérience individuelle et collective qui encadrent la vie sociale ordinaire. »
https://journals.openedition.org/mcv/9683 (*Migrations, Citoyenneté et Vie politique*, 2019)

[^5]: La « thèse-vie » désigne un processus de production de connaissance ancré dans l'expérience vécue, hors dépendance première à la validation institutionnelle. Voir notamment : cadres épistémologiques des thèses à orientation professionnelle (https://www.cairn.info/revue-forum-2017-4-page-56.htm) ; savoirs expérientiels et statut épistémologique (https://shs.hal.science/halshs-02862479v1/document).

<script>
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[data-footnote-ref]').forEach(link => {
    // Bloquer le popover Quartz sur ce lien
    link.dataset.noPopover = "true";

    const id = link.getAttribute('href').replace('#', '');
    const fn = document.getElementById(id);
    if (!fn) return;
    const clone = fn.cloneNode(true);
    const backref = clone.querySelector('a[data-footnote-backref]');
    if (backref) backref.remove();
    const text = clone.textContent.trim();
    const sup = link.parentElement;
    sup.classList.add('fn-tip');
    const tip = document.createElement('span');
    tip.className = 'fn-tip-content';
    tip.textContent = text;
    sup.appendChild(tip);
  });
});
</script>