<template>
  <div class="page-shell">
    <section class="hero-section">
      <div
        class="hero-orb left-[-5rem] top-[8rem] h-44 w-44 bg-fuchsia-200/45 sm:h-72 sm:w-72"
      ></div>
      <div
        class="hero-orb bottom-[8rem] right-[-5rem] h-44 w-44 bg-orange-200/55 sm:h-80 sm:w-80"
      ></div>
      <div class="hero-panel">
        <span class="eyebrow">Interface utilisateur</span>
        <h1 class="page-title">Interface graphique</h1>
        <p class="page-subtitle">
          Une GUI pensee pour charger, afficher et modifier des images de
          maniere claire, fluide et accessible.
        </p>
        <a href="#about-us" class="hero-cta">Voir les objectifs</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="about-us" class="content-section text-left">
      <div class="info-grid">
        <article class="content-card">
          <h2>Role du module</h2>
          <p>
            {{ description }}
          </p>
        </article>
        <article class="content-card">
          <h2>Fenetre principale et affichage</h2>
          <p>
            {{ description10 }}
          </p>
          <p class="mt-4">
            {{ description11 }}
          </p>
        </article>
        <article class="content-card">
          <h2>Menus et actions principales</h2>
          <p>
            {{ description2 }}
          </p>
          <p class="mt-4">
            {{ description4 }}
          </p>
        </article>
        <article class="content-card">
          <h2>Outils, boutons et sliders</h2>
          <p>
            {{ description5 }}
          </p>
        </article>
        <article class="content-card md:col-span-2">
          <h2>Ergonomie et interactions</h2>
          <div class="rich-text">
            <p>{{ description3 }}</p>
            <p class="mt-4">{{ description6 }}</p>
            <p class="mt-4">{{ description7 }}</p>
            <p class="mt-4">{{ description8 }}</p>
            <p class="mt-4">{{ description9 }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "GraphismeView",
  data() {
    return {
      description:
        "La partie interface graphique regroupe tout ce que l'utilisateur voit et manipule dans l'application. Elle est responsable de la fenetre principale, de l'affichage de l'image, des menus, des sliders et des interactions clavier ou souris.",
      description2:
        "Des actions essentielles comme Open, Save et l'acces aux filtres doivent etre disponibles depuis des menus clairs. L'utilisateur peut ainsi charger une image, appliquer des traitements, puis enregistrer le resultat sans passer par la ligne de commande.",
      description4:
        "Le systeme doit aussi integrer des commandes Undo et Redo afin de revenir rapidement sur une modification ou de reconstituer une etape precedente de travail.",
      description5:
        "La barre d'outils regroupe les actions frequentes comme le zoom, la selection, le dessin, le recadrage ou les reglages visuels. Les sliders permettent d'ajuster en continu le flou, la luminosite, le contraste ou l'intensite d'un effet.",
      description3:
        "L'interface doit rester simple a prendre en main tout en proposant des retours visuels immediats. Certains ajustements doivent etre visibles en temps reel pour aider l'utilisateur a comprendre l'impact de ses reglages.",
      description6:
        "La souris sert a selectionner, dessiner, deplacer l'image ou definir une zone de travail. Le clic-glisser et la molette doivent etre utilises pour proposer une navigation fluide dans l'image.",
      description7:
        "Le clavier complete l'interface avec des raccourcis pour les actions recurrentes, comme sauvegarder, annuler ou activer certains outils, afin d'accelerer le flux de travail.",
      description8:
        "Le framework graphique retenu devra prendre en charge l'affichage d'images, la gestion des fenetres, les boutons et la portabilite entre plateformes, avec une preference pour une solution robuste en Rust.",
      description9:
        "L'ensemble du module doit centraliser les evenements et transmettre des messages clairs au moteur de traitement afin de synchroniser l'etat de l'image et celui de l'interface.",
      description10:
        "La fenetre principale doit afficher l'image courante en respectant son ratio et sa resolution. Elle doit aussi prendre en charge le zoom, le pan et le redimensionnement de la fenetre sans perte de lisibilite.",
      description11:
        "A chaque modification appliquee, l'affichage doit etre mis a jour de facon reactive afin que l'utilisateur puisse enchainer les operations sans rupture dans l'experience.",
    };
  },
};
</script>

<style scoped>
#about-us {
  scroll-margin-top: 6rem;
}
</style>
