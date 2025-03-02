<template>
  <div class="bg-[#eeece2] font-inter">
    <div
      class="bg-[#eeece2] font-inter flex items-center justify-center min-h-screen"
    >
      <div class="text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-black leading-tight">
          Graphisme
        </h1>
        <p class="mt-4 text-lg md:text-xl text-black">
          Chez Bloam, le développement graphique transcende le simple design
          :<br />il devient une signature visuelle unique qui incarne
          l'innovation et l'authenticité de chaque projet.
        </p>
        <a href="#about-us">
          <button
            class="mt-6 px-6 py-2 bg-black text-white text-lg rounded-full"
          >
            Character Development
          </button>
        </a>
      </div>
    </div>
    <div class="w-full mt-10 border-t border-gray-300"></div>
    <div
      class="font-['Inter'] min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h1
        class="m-4 text-4xl md:text-6xl font-bold text-black leading-tight"
        id="about-us"
      >
        Character Development
      </h1>
      <div class="p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div class="mt-6 md:mt-0 md:ml-8">
          <p class="mb-4">{{ description }}</p>
        </div>
      </div>
      <h1 class="m-4 text-4xl md:text-6xl font-bold text-black leading-tight">
        Décor Development
      </h1>
      <div class="p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div class="mt-6 md:mt-0 md:ml-8">
          <p class="mb-4">{{ description2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Menu from "@/assets/icons/Menu.png";
export default {
  name: "App",
  data() {
    return {
      description:
        "Les premiers personnages ont été implémentés sans design spécifique, posant ainsi les bases de leur intégration dans le jeu. Plusieurs animations ont été ajoutées, notamment la course, l’accroupissement et le saut, afin d’améliorer la fluidité des mouvements. Par ailleurs, le développement des premiers designs précis a débuté, incluant des détails comme les vêtements et les coiffures pour renforcer l’identité visuelle des personnages.",
      description2:
        "Un fond de menu a été conçu et intégré pour améliorer l’interface du jeu. De plus, les premiers éléments de décor ont été développés en s’appuyant sur différents assets, contribuant ainsi à l’immersion visuelle de l’univers du jeu.",
      // imageSrc: Menu,
    };
  },
  setup() {
    const message = "Hello Vue!";
    return {
      message,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
body {
  margin: 0;
  font-family: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

#about-us {
  margin-top: 50px;
}
</style>
