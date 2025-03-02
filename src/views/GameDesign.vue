<template>
  <div class="bg-[#eeece2] font-inter">
    <div
      class="bg-[#eeece2] font-inter flex items-center justify-center min-h-screen"
    >
      <div class="text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-black leading-tight">
          Game<br />Design
        </h1>
        <p class="mt-4 text-lg md:text-xl text-black">
          Devloppement de Final Dream, un jeux de platforme en lan.
        </p>
        <a href="#about-us">
          <button
            class="mt-6 px-6 py-2 bg-black text-white text-lg rounded-full"
          >
            Scénario
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
              <h1 class="text-4xl font-bold mb-4" id="about-us">Scénario</h1>
            </div>
            <div>
              <p>
                Le scénario de Final Dream, un jeu onirique axé sur la
                rédemption et l’acceptation de soi, s’inspire de jeux comme
                Hollow Knight et Inside pour sa narration immersive et son
                atmosphère symbolique. Construit en quatre actes, il combine
                narration et gameplay pour refléter les émotions des
                personnages, comme Elena, à travers des environnements et défis
                spécifiques. Les principaux défis incluaient la simplification
                du récit pour respecter les contraintes de temps et la création
                de voix uniques pour les personnages. Ce processus a enrichi nos
                compétences en storytelling et abouti à une histoire captivante
                et émotionnelle.
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
              <h1 class="text-4xl font-bold mb-4">Design de niveaux</h1>
            </div>
            <div>
              <p>
                Le design des niveaux de Final Dream reflète les luttes
                psychologiques d’Elena à travers des environnements symboliques
                et une progression narrative. Chaque acte incarne une étape de
                sa vie : enfance, adolescence, âge adulte et rédemption. Ces
                lieux, comme un parc nostalgique ou une ville en ruine, sont
                conçus pour illustrer son état d’esprit et renforcer l’émotion
                du joueur. Le gameplay coopératif entre Elena et Milo repose sur
                des tâches complémentaires, inspirées de jeux comme It Takes
                Two. Ce système fonctionne aussi bien en solo qu’à deux, avec
                des énigmes qui servent la narration. Les principaux défis ont
                concerné la cohérence entre l’histoire et le gameplay, la
                fluidité des interactions, et l’impact émotionnel. Malgré ces
                défis, l’univers immersif et les mécaniques conçues cherchent à
                captiver le joueur, tout en offrant des pistes pour enrichir
                davantage l’expérience narrative et ludique.
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
