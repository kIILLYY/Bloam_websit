<script>
import BenjaminIcon from "@/assets/icons/Ben.jpg";
import MatIcon from "@/assets/icons/mat.jpg";
import AlexIcon from "@/assets/icons/Alex.jpeg";
import LeonIcon from "@/assets/icons/Leon.jpg";
import OrenIcon from "@/assets/icons/Oren.jpg";

export default {
  name: "App",
  data() {
    return {
      BenjaminIcon,
      MatIcon,
      AlexIcon,
      LeonIcon,
      OrenIcon,
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

<template>
  <div class="bg-[#eeece2] font-inter">
    <div
      class="bg-[#eeece2] font-inter flex items-center justify-center min-h-screen"
    >
      <div class="text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-black leading-tight">
          BLOAM<br />Corporation
        </h1>
        <p class="mt-4 text-lg md:text-xl text-black">
          Où créativité et technologie se rencontrent au carrefour du logiciel,
          du design, de l’art et du marketing numérique
        </p>
        <a href="#about-us">
          <button
            class="mt-6 px-6 py-2 bg-black text-white text-lg rounded-full"
          >
            About us
          </button>
        </a>
      </div>
    </div>
    <div class="w-full mt-10 border-t border-gray-300"></div>
    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <h1 id="about-us" class="text-4xl font-bold mb-8 mt-11">About us</h1>
        <p class="text-4xl font-bold leading-tight mb-8">
          Chez BLOAM, nous croyons que la technologie et la créativité ont le
          pouvoir de transformer les industries et d’inspirer l’innovation.
          Notre mission est de concevoir des solutions qui allient
          harmonieusement développement logiciel, design, art et marketing
          numérique.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-2xl font-bold mb-4">
                Nous Créons à la Croisée des Chemins
              </h2>
              <p>
                Notre travail se situe à l’intersection de la créativité et de
                la technologie. Nous développons des logiciels de pointe,
                concevons des designs immersifs et proposons des solutions
                artistiques qui repoussent les limites. En réunissant des
                expertises variées, nous créons des expériences à la fois
                fonctionnelles, visuellement époustouflantes et innovantes.
              </p>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">
                La Créativité Rencontre la Précision
              </h2>
              <p>
                Nous abordons chaque projet comme un équilibre entre art et
                ingénierie. Du codage à la narration, du design UI/UX à
                l’architecture technique avancée, notre équipe intègre ces
                éléments pour produire des solutions aussi précises
                qu’imaginatives.
              </p>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">L’Innovation Nous Guide</h2>
              <p>
                Notre engagement envers l’innovation est au cœur de tout ce que
                nous faisons. Que ce soit pour concevoir des logiciels sur
                mesure ou développer un jeu vidéo visionnaire, nous explorons
                sans cesse de nouvelles possibilités afin que chaque projet
                reflète notre passion pour l’alliance entre technologie et
                créativité.
              </p>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">Vers l’Avenir</h2>
              <p>
                Chez BLOAM, notre vision dépasse la simple création de solutions
                techniques ou artistiques. Nous sommes déterminés à bâtir un
                avenir où la technologie et la créativité se rejoignent pour
                transformer la manière dont les idées prennent vie. Avec chaque
                projet, nous repoussons les limites, explorons de nouvelles
                perspectives et ouvrons la voie à des innovations qui
                redéfinissent les standards de l’industrie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-10 border-t border-gray-300"></div>
    <div class="p-8">
      <h1 class="text-4xl font-bold mb-8 mt-11">Our Team</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <img
              alt="Leon"
              class="rounded-lg mb-4"
              :src="LeonIcon"
              style="width: 370px; height: 370px; object-fit: cover"
            />
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Leon Monéger</h2>
          <p class="text-lg text-center">
            Directeur du design UI/UX, travaillant à créer une interface
            intuitive et attrayante pour les utilisateurs.
          </p>
        </div>
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <img
              alt="Matteo Galus"
              class="rounded-lg mb-4"
              :src="MatIcon"
              style="width: 300px; height: 370px; object-fit: cover"
            />
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Matteo Galus</h2>
          <p class="text-lg text-center">
            Directeur du développement technique du jeu, veillant à garantir une
            jouabilité fluide et un code optimisé pour toutes les plate-formes.
          </p>
        </div>
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <img
              alt="Alexandre Abbruzzese"
              class="rounded-lg mb-4"
              :src="AlexIcon"
              style="width: 370px; height: 370px; object-fit: cover"
            />
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">
            Alexandre Abbruzzese
          </h2>
          <p class="text-lg text-center">
            Expert du web et du storytelling numérique. Il est le maître d’œuvre
            des architectures numériques modernes qui permettent à BLOAM de se
            démarquer. Son expertise englobe la création de plateformes en ligne
            complètes et immersives, allant de la structure des sites à
            l’intégration de contenus dynamiques, tout en plaçant la narration
            au centre de l’expérience utilisateur.
          </p>
        </div>
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <img
              alt="Benjamin Poussart"
              class="rounded-lg mb-4"
              :src="BenjaminIcon"
              style="width: 300px; height: 370px; object-fit: cover"
            />
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Benjamin Poussart</h2>
          <p class="text-lg text-center">
            Expert technique de premier plan. Passionné par les infra-
            structures informatiques et le développement de systèmes robustes,
            il est en charge des architectures complexes et des solutions
            techniques avancées qui soutiennent les projets de BLOAM. Sa
            compréhension profonde des algorithmes, des bases de données et des
            solutions cloud permet à l’entreprise d’aborder des projets à grande
            échelle tout en assurant des performances optimales. Il est
            également le garant de l’intégration fluide entre le front-end et le
            back-end, apportant stabilité et flexibilité à chaque projet.
          </p>
        </div>
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <img
              alt="Oren"
              class="rounded-lg mb-4"
              :src="OrenIcon"
              style="width: 370px; height: 370px; object-fit: cover"
            />
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Oren Guetta</h2>
          <p class="text-lg text-center">
            L’artiste polyvalent du groupe, apporte sa passion pour l’art à
            l’ensemble des projets. Qu’il s’agisse de créations visuelles,
            d’animations ou de personnages, son approche est marquée par une
            grande créativité et une sensibilité artistique unique. Sa capacité
            à imaginer des visuels novateurs et originaux enrichit chaque
            produit développé par BLOAM, ajoutant une dimension artistique à la
            technologie.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

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
