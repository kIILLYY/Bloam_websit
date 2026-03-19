<script>
import BenjaminIcon from "@/assets/icons/A.png";
import MatIcon from "@/assets/icons/Al.png";
import AlexIcon from "@/assets/icons/Alex.jpeg";
import LeonIcon from "@/assets/icons/N.png";

export default {
  name: "HomeView",
  data() {
    return {
      BenjaminIcon,
      MatIcon,
      AlexIcon,
      LeonIcon,
    };
  },
};
</script>

<template>
  <div class="page-shell">
    <section class="hero-section">
      <div
        class="hero-orb left-[-5rem] top-[6rem] h-40 w-40 bg-sky-200/50 sm:h-72 sm:w-72"
      ></div>
      <div
        class="hero-orb bottom-[8rem] right-[-4rem] h-44 w-44 bg-amber-200/60 sm:h-80 sm:w-80"
      ></div>
      <div class="hero-panel">
        <span class="eyebrow">Projet EPITA 2026</span>
        <h1 class="page-title">Projet RUST<br />Traitement d'images</h1>
        <p class="page-subtitle">
          Une application de traitement d'images developpee en Rust sous Linux,
          concue pour combiner performances, modularite et clarte technique.
        </p>
        <a href="#about-us" class="hero-cta">Decouvrir le projet</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="about-us" class="content-section text-left">
      <h1 class="section-heading">Presentation</h1>
      <p class="section-intro">
        Le projet vise a realiser un logiciel complet de traitement d'images,
        capable de charger, analyser, transformer et sauvegarder des images tout
        en proposant une interface graphique accessible et evolutive.
      </p>

      <div class="info-grid mt-10">
        <article class="content-card">
          <h2>Noyau de traitement d'image</h2>
          <p>
            Le coeur du projet repose sur un module Rust charge de manipuler les
            pixels, d'appliquer les transformations et d'executer les
            algorithmes de pre-traitement comme le flou, le sharpen, le Sobel ou
            encore les ajustements de luminosite et de contraste.
          </p>
        </article>
        <article class="content-card">
          <h2>Interface graphique</h2>
          <p>
            L'application doit permettre de charger, afficher, zoomer, deplacer
            et modifier une image depuis une GUI claire, avec menus, boutons,
            sliders et raccourcis clavier adaptes aux usages reels.
          </p>
        </article>
        <article class="content-card">
          <h2>Architecture modulaire</h2>
          <p>
            Le projet est organise autour d'un package Cargo unique, d'une
            separation nette entre modules et d'une structure interne pensee
            pour maintenir la lisibilite du code, les performances et la
            possibilite d'ajouter de nouvelles fonctionnalites.
          </p>
        </article>
        <article class="content-card">
          <h2>Livrables et valorisation</h2>
          <p>
            Le site web accompagne le logiciel en centralisant la presentation
            du projet, les roles de l'equipe, les rapports, les documents de
            conception et les resultats obtenus tout au long du developpement.
          </p>
        </article>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="content-section text-left">
      <h1 class="section-heading">Equipe projet</h1>
      <div class="team-grid">
        <article class="profile-card">
          <img alt="Hulic-Menclé Nael" class="profile-image" :src="LeonIcon" />
          <h2 class="profile-name">Hulic-Menclé Nael</h2>
          <p class="profile-role">
            Responsable des interactions utilisateur, de la gestion des
            evenements souris/clavier et des fonctions d'analyse comme la
            detection de contours et de formes.
          </p>
        </article>
        <article class="profile-card">
          <img alt="Alexandre Zhou-hu" class="profile-image" :src="MatIcon" />
          <h2 class="profile-name">Alexandre Zhou-hu</h2>
          <p class="profile-role">
            Charge de l'architecture du projet, de l'organisation technique, des
            performances globales, du format de projet et de la coherence entre
            tous les modules de l'application.
          </p>
        </article>
        <article class="profile-card">
          <img
            alt="Alexandre Abbruzzese"
            class="profile-image"
            :src="AlexIcon"
          />
          <h2 class="profile-name">Alexandre Abbruzzese</h2>
          <p class="profile-role">
            Responsable du module de pre-traitement et d'amelioration d'images,
            ainsi que du developpement du site web de presentation du projet.
          </p>
        </article>
        <article class="profile-card">
          <img alt="Hengrui Ye" class="profile-image" :src="BenjaminIcon" />
          <h2 class="profile-name">Hengrui Ye</h2>
          <p class="profile-role">
            En charge des fonctionnalites avancees et de l'experience
            utilisateur: calques, masques, selection, historique Undo/Redo,
            raccourcis clavier et outil pinceau.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
#about-us {
  scroll-margin-top: 6rem;
}
</style>
