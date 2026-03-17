<script>
import BenjaminIcon from "@/assets/icons/Ben.jpg";
import MatIcon from "@/assets/icons/mat.jpg";
import AlexIcon from "@/assets/icons/Alex.jpeg";
import LeonIcon from "@/assets/icons/Leon.jpg";
import OrenIcon from "@/assets/icons/Oren.jpg";

export default {
  name: "HomeView",
  data() {
    return {
      BenjaminIcon,
      MatIcon,
      AlexIcon,
      LeonIcon,
      OrenIcon,
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
        <span class="eyebrow">Studio creatif & technique</span>
        <h1 class="page-title">BLOAM<br />Corporation</h1>
        <p class="page-subtitle">
          Ou creativite et technologie se rencontrent au carrefour du logiciel,
          du design, de l'art et du marketing numerique.
        </p>
        <a href="#about-us" class="hero-cta">About us</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="about-us" class="content-section text-left">
      <h1 class="section-heading">About us</h1>
      <p class="section-intro">
        Chez BLOAM, nous croyons que la technologie et la creativite ont le
        pouvoir de transformer les industries et d'inspirer l'innovation.
      </p>

      <div class="info-grid mt-10">
        <article class="content-card">
          <h2>Nous creons a la croisee des chemins</h2>
          <p>
            Notre travail se situe a l'intersection de la creativite et de la
            technologie. Nous developpons des logiciels de pointe, concevons des
            designs immersifs et proposons des solutions artistiques qui
            repoussent les limites.
          </p>
        </article>
        <article class="content-card">
          <h2>La creativite rencontre la precision</h2>
          <p>
            Nous abordons chaque projet comme un equilibre entre art et
            ingenierie. Du codage a la narration, notre equipe integre ces
            elements pour produire des solutions aussi precises qu'imaginatives.
          </p>
        </article>
        <article class="content-card">
          <h2>L'innovation nous guide</h2>
          <p>
            Notre engagement envers l'innovation est au coeur de tout ce que
            nous faisons. Chaque projet reflete notre passion pour l'alliance
            entre technologie et creativite.
          </p>
        </article>
        <article class="content-card">
          <h2>Vers l'avenir</h2>
          <p>
            Nous sommes determines a batir un avenir ou la technologie et la
            creativite se rejoignent pour transformer la maniere dont les idees
            prennent vie.
          </p>
        </article>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="content-section text-left">
      <h1 class="section-heading">Our Team</h1>
      <div class="team-grid">
        <article class="profile-card">
          <img alt="Leon" class="profile-image" :src="LeonIcon" />
          <h2 class="profile-name">Leon Moneger</h2>
          <p class="profile-role">
            Directeur du design UI/UX, travaillant a creer une interface
            intuitive et attrayante pour les utilisateurs.
          </p>
        </article>
        <article class="profile-card">
          <img alt="Matteo Galus" class="profile-image" :src="MatIcon" />
          <h2 class="profile-name">Matteo Galus</h2>
          <p class="profile-role">
            Directeur du developpement technique du jeu, veillant a garantir une
            jouabilite fluide et un code optimise.
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
            Expert du web et du storytelling numerique, en charge des
            architectures modernes et de l'experience narrative.
          </p>
        </article>
        <article class="profile-card">
          <img
            alt="Benjamin Poussart"
            class="profile-image"
            :src="BenjaminIcon"
          />
          <h2 class="profile-name">Benjamin Poussart</h2>
          <p class="profile-role">
            Expert technique de premier plan, responsable des architectures
            complexes et de l'integration fluide entre front-end et back-end.
          </p>
        </article>
        <article class="profile-card">
          <img alt="Oren" class="profile-image" :src="OrenIcon" />
          <h2 class="profile-name">Oren Guetta</h2>
          <p class="profile-role">
            Artiste polyvalent du groupe, il enrichit les projets de BLOAM pa
            une direction visuelle forte et une sensibilite artistique unique.
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
