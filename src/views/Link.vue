<script>
import GitHubIcon from "@/assets/icons/GitHub.png";
import RapportIcon from "@/assets/icons/Rapport.png";
import ScenarioIcon from "@/assets/icons/Scenario.webp";
import GamedesignIcon from "@/assets/icons/GameDesign.png";

export default {
  name: "LinkView",
  data() {
    return {
      resources: [
        {
          title: "Depot GitHub",
          copy: "Code source du projet Rust et suivi de l'avancement technique.",
          href: "https://github.com/Alexandre-zhou/Projet-rust-s4",
          image: GitHubIcon,
        },
        {
          title: "Rapport",
          copy: "Version telechargeable du rapport et des livrables du projet.",
          href: "",
          image: RapportIcon,
        },
        {
          title: "Cahier des charges",
          copy: "Document de reference pour les objectifs, modules et attendus.",
          href: "https://docs.google.com/document/d/1nBYMp7UcQn_E4rz20eZmbtQuvAskiB9P3PJrdFC2vvA/edit?tab=t.0",
          image: ScenarioIcon,
        },
        {
          title: "Synopsis",
          copy: "Notes de conception sur l'architecture, l'interface et l'UX.",
          href: "https://docs.google.com/document/d/1pWLY_FIw7YaMLyKQoTJGXgPO97QHz-d_kY36P7keqDQ/edit?tab=t.0",
          image: GamedesignIcon,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="page-shell">
    <section class="hero-section">
      <div
        class="hero-orb left-[-5rem] top-[8rem] h-40 w-40 bg-slate-200/60 sm:h-72 sm:w-72"
      ></div>
      <div
        class="hero-orb bottom-[8rem] right-[-5rem] h-44 w-44 bg-lime-200/45 sm:h-80 sm:w-80"
      ></div>
      <div class="hero-panel">
        <span class="eyebrow">Ressources du projet</span>
        <h1 class="page-title">Ressources</h1>
        <p class="page-subtitle">
          Tous les acces rapides vers le depot, le rapport et les documents de
          reference lies au projet de traitement d'images en Rust.
        </p>
        <a href="#all-links" class="hero-cta">Voir les ressources</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="all-links" class="content-section text-left">
      <h1 class="section-heading">Documents et acces</h1>
      <div class="resource-grid">
        <a
          v-for="resource in resources"
          :key="resource.title"
          :href="resource.href"
          class="resource-card"
          target="_blank"
          rel="noopener"
        >
          <img
            :alt="resource.title"
            :src="resource.image"
            class="resource-image"
          />
          <h2 class="resource-title">{{ resource.title }}</h2>
          <p class="resource-copy">{{ resource.copy }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
#all-links {
  scroll-margin-top: 6rem;
}
</style>
