<template>
  <div class="page-shell">
    <section class="hero-section">
      <div
        class="hero-orb left-[-5rem] top-[8rem] h-40 w-40 bg-violet-200/45 sm:h-72 sm:w-72"
      ></div>
      <div
        class="hero-orb bottom-[8rem] right-[-5rem] h-44 w-44 bg-pink-200/45 sm:h-80 sm:w-80"
      ></div>
      <div class="hero-panel">
        <span class="eyebrow">Structure du projet</span>
        <h1 class="page-title">Architecture / Projet</h1>
        <p class="page-subtitle">
          L'organisation technique qui relie les modules, garantit les
          performances et prepare l'evolution du logiciel.
        </p>
        <a href="#about-us" class="hero-cta">Voir l'architecture</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="about-us" class="content-section text-left">
      <div class="info-grid">
        <article class="content-card">
          <h2>Organisation du projet</h2>
          <p>
            Ce module assure la cohesion entre le moteur de traitement, la GUI,
            la gestion des projets et les fonctionnalites avancees. Il definit
            une structure modulaire claire pour permettre au projet de rester
            comprehensible, maintenable et simple a faire evoluer.
          </p>
        </article>
        <article class="content-card">
          <h2>Performances et format de projet</h2>
          <p>
            L'architecture doit favoriser une application reactive, capable de
            gerer des calculs couteux sans bloquer l'interface. Elle couvre
            aussi la sauvegarde et le chargement des projets, avec une attention
            particuliere a la compatibilite des fichiers dans le temps.
          </p>
        </article>
        <article class="content-card">
          <h2>Objectif global</h2>
          <p>
            L'objectif est de simplifier le travail en equipe, de clarifier les
            responsabilites techniques et de fournir une base solide pour le
            deploiement, la maintenance et les futures extensions du logiciel.
          </p>
        </article>
        <article class="content-card">
          <h2>Fonctionnalites avancees</h2>
          <p>
            Cette partie coordonne egalement les besoins lies aux calques, aux
            masques, aux selections, a l'historique des modifications et aux
            raccourcis clavier afin de garantir une integration coherente dans
            tout le projet.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "GameDesignView",
};
</script>

<style scoped>
#about-us {
  scroll-margin-top: 6rem;
}
</style>
