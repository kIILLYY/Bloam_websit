<template>
  <div class="page-shell">
    <section class="hero-section">
      <div
        class="hero-orb left-[-4rem] top-[7rem] h-40 w-40 bg-cyan-200/50 sm:h-72 sm:w-72"
      ></div>
      <div
        class="hero-orb bottom-[8rem] right-[-5rem] h-44 w-44 bg-emerald-200/50 sm:h-80 sm:w-80"
      ></div>
      <div class="hero-panel">
        <span class="eyebrow">Module principal</span>
        <h1 class="page-title">Image Processing Core</h1>
        <p class="page-subtitle">
          Le coeur algorithmique du projet, dedie au chargement, a la
          representation interne et aux transformations d'images.
        </p>
        <a href="#image-core" class="hero-cta">Voir le module</a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section id="image-core" class="content-section text-left">
      <div class="info-grid">
        <article class="content-card md:col-span-2">
          <h2>Representation interne et entrees/sorties</h2>
          <div class="rich-text">
            <h2>Role du module</h2>
            <p>
              Ce module constitue la base technique de l'application. Il gere
              l'ensemble des operations de bas niveau liees a la manipulation
              des pixels, a l'application des transformations et a l'execution
              des traitements d'image.
            </p>
            <h2>Structures de donnees</h2>
            <p>
              L'architecture interne repose sur des structures telles que
              `Pixel`, `Image` et `Layer`, afin de conserver un controle fin sur
              l'organisation memoire et d'eviter les copies inutiles lors des
              traitements.
            </p>
            <h2>Chargement et sauvegarde</h2>
            <p>
              Les formats PNG, JPEG et BMP sont pris en charge. La crate `image`
              sert de couche d'entree/sortie, puis les donnees sont converties
              dans une representation interne unique pour garantir des
              traitements coherents.
            </p>
          </div>
        </article>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="content-section text-left">
      <div class="info-grid">
        <article class="content-card md:col-span-2">
          <h2>Algorithmes de traitement d'image</h2>
          <div class="rich-text">
            <h2>Transformations globales</h2>
            <p>
              Le module integre des operations classiques comme la conversion en
              niveaux de gris, l'inversion des couleurs, ainsi que les
              ajustements de luminosite et de contraste.
            </p>
            <h2>Filtres avances</h2>
            <p>
              Des traitements plus pousses sont prevus, notamment le flou, le
              sharpen et la detection de contours avec des operateurs comme
              Sobel, afin de couvrir des cas concrets d'amelioration et
              d'analyse visuelle.
            </p>
            <h2>Transformations geometriques</h2>
            <p>
              Le rognage, le redimensionnement et la rotation font partie des
              fonctions essentielles du projet. Leur implementation manuelle
              permet de mieux controler la qualite du resultat et les couts de
              calcul.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="content-section text-left pt-0">
      <div class="info-grid">
        <article class="content-card md:col-span-2">
          <h2>API du module et resultats attendus</h2>
          <div class="rich-text">
            <h2>Interface de programmation</h2>
            <p>
              L'API doit rester simple, lisible et composable, afin de pouvoir
              enchainer plusieurs operations sur une image depuis l'interface
              graphique ou d'autres modules internes.
            </p>
            <h2>Exigences de qualite</h2>
            <p>
              Le code suit une organisation modulaire claire, une compilation
              sans warnings et une execution centralisee par Cargo pour assurer
              un developpement maintenable et fiable.
            </p>
            <h2>Resultat final vise</h2>
            <p>
              A terme, ce composant doit fournir un moteur stable et performant
              capable de charger, manipuler, transformer et sauvegarder des
              images dans plusieurs formats, tout en servant de fondation au
              reste de l'application.
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProgrammationView",
};
</script>
