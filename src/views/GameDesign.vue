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
        <span class="eyebrow">Vision & narration</span>
        <h1 class="page-title">Game Design</h1>
        <p class="page-subtitle">
          Structure narrative, progression emotionnelle et conception des
          niveaux de Final Dream.
        </p>
        <a href="#about-us" class="hero-cta">Scenario</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="about-us" class="content-section text-left">
      <div class="info-grid">
        <article class="content-card">
          <h2>Scenario</h2>
          <p>
            Le scenario de Final Dream s'articule autour de la redemption et de
            l'acceptation de soi, avec une mise en scene onirique qui donne du
            poids emotionnel a chaque acte du jeu.
          </p>
        </article>
        <article class="content-card">
          <h2>Design de niveaux</h2>
          <p>
            Chaque environnement traduit une etape du parcours d'Elena. Le
            design cooperative, inspire par des references modernes, soutient a
            la fois les enigmes, le rythme et l'immersion.
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
