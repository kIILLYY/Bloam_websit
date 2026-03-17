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
        <span class="eyebrow">Programmation</span>
        <h1 class="page-title">Programmation</h1>
        <p class="page-subtitle">
          Developpement de Final Dream, un jeu de plateforme coop en LAN.
        </p>
        <a
          href="https://github.com/BenjaminP142/Final-Dream"
          class="hero-cta"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="content-section text-left">
      <div class="info-grid">
        <article class="content-card md:col-span-2">
          <h2>Implementation du mode multijoueur en LAN</h2>
          <div class="rich-text">
            <h2>Architecture reseau choisie</h2>
            <p>
              Le projet s'appuie sur une architecture multijoueur en reseau
              local afin de reduire la latence, simplifier l'implementation et
              favoriser une experience plus directe entre joueurs.
            </p>
            <h2>Architecture technique</h2>
            <p>
              Le joueur hote gere l'etat du jeu, la synchronisation des donnees
              et la coordination des actions, tandis que le client envoie ses
              interactions et recoit les mises a jour necessaires.
            </p>
            <h2>Interface de connexion</h2>
            <p>
              L'ecran de connexion a ete pense pour rester simple: l'hote lance
              une partie, partage son IP locale, puis le client rejoint via un
              champ dedie avant l'entree simultanee en jeu.
            </p>
          </div>
        </article>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="content-section text-left">
      <div class="info-grid">
        <article class="content-card md:col-span-2">
          <h2>Implementation de l'intelligence artificielle</h2>
          <div class="rich-text">
            <h2>Vue d'ensemble</h2>
            <p>
              L'intelligence artificielle des ennemis repose sur un systeme de
              detection de cibles et un pathfinding A* pour garantir des
              comportements coherents dans des environnements contraints.
            </p>
            <h2>Algorithme A*</h2>
            <p>
              L'implementation combine cout reel et heuristique afin de trouve
              des chemins efficaces tout en limitant les recalculs, avec une
              discretisation de l'environnement en grille et plusieurs
              optimisations de performance.
            </p>
            <h2>Selection de cibles</h2>
            <p>
              En multijoueur, les ennemis priorisent le joueur le plus proche,
              ce qui renforce la lisibilite de leurs comportements et la
              coherence du gameplay.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="content-section text-left pt-0">
      <div class="info-grid">
        <article class="content-card md:col-span-2">
          <h2>Avancees ennemis et attaques</h2>
          <div class="rich-text">
            <h2>Systeme d'ennemis</h2>
            <p>
              Deux familles d'ennemis principales ont ete integrees avec des
              animations, colliders, et comportements adaptes au rythme du jeu.
            </p>
            <h2>Mouvements et personnage</h2>
            <p>
              Le personnage principal utilise Rigidbody 2D et des animations
              synchronisees pour offrir des deplacements precis, reactifs et
              lisibles en solo comme en coop.
            </p>
            <h2>Sante et interface</h2>
            <p>
              Le systeme de vie s'appuie sur une logique modulaire et une UI
              claire avec feedback visuel pour communiquer l'etat du joueu sans
              alourdir l'ecran.
            </p>
            <h2>Attaques et environnement</h2>
            <p>
              Les attaques, les zones de danger et les transitions de niveau ont
              ete structurees pour enrichir le gameplay tout en gardant une
              sensation fluide et immediate.
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
