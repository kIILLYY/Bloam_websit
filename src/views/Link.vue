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
          title: "GitHub",
          copy: "Depot source du projet Final Dream.",
          href: "https://github.com/BenjaminP142/Final-Dream",
          image: GitHubIcon,
        },
        {
          title: "Rapport",
          copy: "Version telechargeable du rapport de projet.",
          href: "/Document/Rapport.pdf",
          image: RapportIcon,
        },
        {
          title: "Scenario",
          copy: "Document de travail pour la structure narrative du jeu.",
          href: "https://docs.google.com/document/d/1DfoflMuUmVMQgiQ66Dki-RWxSBtyq0VO3jHOtcKTxfc/edit?tab=t.0",
          image: ScenarioIcon,
        },
        {
          title: "Game Design",
          copy: "Reference de conception sur les mecaniques et l'experience.",
          href: "https://docs.google.com/document/d/1DfoflMuUmVMQgiQ66Dki-RWxSBtyq0VO3jHOtcKTxfc/edit?tab=t.0",
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
        <h1 class="page-title">Links</h1>
        <p class="page-subtitle">
          Tous les acces rapides vers le depot, le rapport et les documents de
          conception du projet.
        </p>
        <a href="#all-links" class="hero-cta">All Links</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="all-links" class="content-section text-left">
      <h1 class="section-heading">Link</h1>
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
