<template>
  <div class="bg-[#eeece2] font-inter">
    <div
      class="bg-[#eeece2] font-inter flex items-center justify-center min-h-screen"
    >
      <div class="text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-black leading-tight">
          Programmation
        </h1>
        <p class="mt-4 text-lg md:text-xl text-black">
          Devloppement de Final Dream, un jeux de platforme en lan.
        </p>
        <a href="https://github.com/BenjaminP142/Final-Dream">
          <button
            class="mt-6 px-6 py-2 bg-black text-white text-lg rounded-full"
          >
            GitHub
          </button>
        </a>
      </div>
    </div>
    <div class="w-full mt-10 border-t border-gray-300"></div>
    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 class="text-4xl font-bold mb-4">Programmation</h1>
            </div>
            <div>
              <p>
                Le développement du jeu vidéo a présenté de nombreux défis,
                notamment le manque de connaissances sur Unity, les difficultés
                d'implémentation des mécaniques de jeu (mouvements, caméra,
                etc.), la conception des niveaux, le mode multijoueur, et la
                création d'ennemis. Ces obstacles ont été surmontés grâce à des
                solutions comme la documentation, les tutoriels en ligne, les
                discussions d'équipe, et une approche itérative pour tester et
                ajuster les fonctionnalités. Le scénario a également été un
                point clé, avec une histoire originale et des plot twists pour
                rendre le jeu attractif. Ces efforts ont renforcé la
                collaboration et l'expertise de l'équipe, aboutissant à un
                produit de qualité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-10 border-t border-gray-300"></div>
    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 class="text-4xl font-bold mb-4">Réseau</h1>
            </div>
            <div>
              <p>
                Pour le réseau multijoueur, nous avons utilisé le package
                NetCode for GameObjects sur Unity, adapté aux réseaux LAN. Après
                l'installation via le Package Manager, nous avons configuré un
                NetworkManager et transformé le joueur en prefab connecté au
                réseau via un composant NetworkObject. Cela permet de faire
                apparaître et déplacer le joueur en lançant le mode hôte, bien
                que des problèmes de rigidbody et de synchronisation persistent.
                Les principales difficultés incluent le manque de ressources
                claires pour les débutants et la nécessité de tester avec
                plusieurs joueurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  setup() {
    const message = "Hello Vue!";
    return {
      message,
    };
  },
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

#about-us {
  margin-top: 50px;
}
</style>
