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
        <span class="eyebrow">Direction artistique</span>
        <h1 class="page-title">Graphisme</h1>
        <p class="page-subtitle">
          Chez BLOAM, le developpement graphique depasse le simple design pou
          devenir une signature visuelle coherente et memorable.
        </p>
        <a href="#about-us" class="hero-cta">Character Development</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="about-us" class="content-section text-left">
      <div class="info-grid">
        <article class="content-card">
          <h2>Character Development</h2>
          <p>
            {{ description }}
          </p>
        </article>
        <article class="content-card">
          <h2>Design de Milo et Elena</h2>
          <p>
            {{ description10 }}
          </p>
          <p class="mt-4">
            {{ description11 }}
          </p>
        </article>
        <article class="content-card">
          <h2>Decor Development</h2>
          <p>
            {{ description2 }}
          </p>
          <p class="mt-4">
            {{ description4 }}
          </p>
        </article>
        <article class="content-card">
          <h2>Teleportation et enrichissement visuel</h2>
          <p>
            {{ description5 }}
          </p>
        </article>
        <article class="content-card md:col-span-2">
          <h2>Interface / Musique</h2>
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
        "Creation sur personnage generique : avant de concevoir les personnages finaux, toutes les animations ont ete testees sur un modele simplifie afin de valider les mouvements indispensables au gameplay comme l'inactivite, la course, le saut et l'accroupissement.",
      description2:
        "Creation de maps avec palette et tileset : la construction des maps repose sur des environnements coherents, lisibles et immersifs, avec une organisation claire des tuiles pour accelerer la production et garantir l'homogeneite graphique.",
      description4:
        "Systeme de teleportation : l'interconnexion entre zones utilise des colliders et des tags afin d'assurer des transitions precises, maintenables et faciles a ajuster dans l'editeur.",
      description5:
        "Prefabs de teleporteurs et enrichissement visuel : les prefabs assurent la coherence fonctionnelle et graphique, tandis que les backgrounds et objets de decor renforcent l'immersion generale.",
      description3:
        "Creation du menu principal : l'equipe a imagine un menu original, onirique et plus expressif, avec des variations visuelles et des effets de survol pour renforcer la lisibilite et l'identite du jeu.",
      description6:
        "Musique du menu : une ambiance aerienne et immersive a ete composee pour introduire l'univers des reves avec une texture sonore douce et progressive.",
      description7:
        "Musique du premier niveau : une base rythmique plus dynamique a ete creee pour capter l'attention du joueur des les premieres secondes et soutenir son engagement.",
      description8:
        "Musique du deuxieme niveau : le tempo s'accelere et la texture sonore gagne en intensite pour accompagner une phase plus exigeante et energique du jeu.",
      description9:
        "Musique du dernier niveau : la composition revient vers une atmosphere plus calme pour conclure l'experience de maniere contemplative et coherente.",
      description10:
        "Design et animation de Milo : son apparence et ses animations ont ete travailleees image par image en pixel art pour obtenir un personnage principal vivant, lisible et expressif.",
      description11:
        "Design et animation d'Elena : le second personnage jouable reprend les bases techniques posees pour Milo tout en conservant une silhouette et des details propres pour une meilleure distinction visuelle.",
    };
  },
};
</script>

<style scoped>
#about-us {
  scroll-margin-top: 6rem;
}
</style>
