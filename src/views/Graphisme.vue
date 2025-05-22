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
          <p class="mb-4">
            {{ description }} <br /><br />
            {{ description10 }} <br /><br />
            {{ description11 }}
          </p>
        </div>
      </div>
      <h1 class="m-4 text-4xl md:text-6xl font-bold text-black leading-tight">
        Décor Development
      </h1>
      <div class="p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div class="mt-6 md:mt-0 md:ml-8">
          <p class="mb-4">
            {{ description2 }} <br /><br />
            {{ description4 }} <br /><br />
            {{ description5 }}
          </p>
        </div>
      </div>
      <h1 class="m-4 text-4xl md:text-6xl font-bold text-black leading-tight">
        Interface / Musique
      </h1>
      <div class="p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div class="mt-6 md:mt-0 md:ml-8">
          <p class="mb-4">
            {{ description3 }}<br /><br />
            {{ description6 }}<br /><br />
            {{ description7 }}<br /><br />
            {{ description8 }}<br /><br />
            {{ description9 }}
          </p>
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
        "Création sur personnage générique : \n" +
        "Avant de concevoir les personnages finaux, toutes les animations ont été testées sur un modèle générique, représenté par un personnage blanc simplifié. Cette étape a permis de mettre en place les mouvements de base indispensables au gameplay, comme l’inactivité, la course, le saut, l’atterrissage ou encore l’accroupissement. Des animations spécifiques ont également été développées, notamment des actions d’attaque avec coup de pied et coup de poing. Une fois ces mouvements validés, l’équipe a pu passer à la création des personnages principaux.",
      description2:
        "Création de Maps avec Palette et Tileset : \n" +
        "La construction des maps constitue un axe majeur du développement, nécessitant des environnements cohérents, lisibles et immersifs. L'utilisation de palettes de tuiles via l'éditeur Unity intégré a permis de créer des palettes personnalisées regroupant tous les éléments visuels nécessaires au level design. Cette approche a permis d'accélérer la création d'environnements, réduire les erreurs de placement grâce à l'organisation claire des tuiles, et standardiser l'apparence pour assurer l'homogénéité graphique. La palette préserve la qualité visuelle entre scènes et facilite la collaboration équipe. La recherche et intégration de tilesets s'est effectuée avec rigueur selon la charte graphique définie : cohérence esthétique, compatibilité résolution, et modularité des éléments. Les tilesets sélectionnés comportent des variations climatiques/temporelles, des éléments de transition entre terrains, et des détails enrichissants permettant de composer des environnements riches tout en restant optimisés.",
      description4:
        "Système de Téléportation : \n" +
        "L'interconnexion entre zones utilise un système de téléportation basé sur colliders et tags. Chaque point de téléportation possède un BoxCollider2D positionné stratégiquement qui déclenche un événement lors de l'entrée du joueur dans la zone définie. Ce système offre précision (détection uniquement dans les zones ciblées) et flexibilité (modification facile de taille, position et comportement via l'éditeur), garantissant des transitions propres et prévisibles essentielles à la cohérence spatiale. Le système basé sur tags enrichit la logique de téléportation : chaque objet déclencheur possède un tag unique, offrant une meilleure lisibilité du code, la réutilisabilité des composants, et une adaptabilité accrue. Cette modularité réduit les risques de bugs liés à la duplication ou aux oublis de configuration.",
      description5:
        "Prefabs de Téléporteurs et Enrichissement Visuel : \n" +
        "Les prefabs spécifiques représentent visuellement les téléporteurs avec une double fonction visuelle et fonctionnelle. Cette organisation permet une instanciation facile, la conservation de la cohérence visuelle, et une architecture maintenable. L'intégration de backgrounds fixes via Canvas et l'enrichissement des maps avec objets immersifs (éléments naturels, décor urbain, accessoires environnementaux) créent un monde vivant et crédible tout en maintenant un projet organisé et une expérience utilisateur homogène.",
      description3:
        "Création du Menu Principal : \n" +
        "L'équipe a conçu un design original adapté au thème du jeu centré sur les rêves et l'imaginaire. Le menu présente des boutons en forme de cerveau humain sur un fond onirique, générés via intelligence artificielle pour obtenir différentes variations colorées mettant en évidence les parties distinctes du cerveau. L'intégration dans Unity a nécessité l'ajustement des textures et le placement optimisé des boutons pour garantir la lisibilité. Des améliorations interactives ont été ajoutées, notamment un effet d'éclairage dynamique qui illumine les boutons au survol de la souris, réalisé par modification de couleur et d'intensité via les paramètres UI d'Unity. Un problème majeur de taille des boutons (initialement trop petits et peu ergonomiques) a été résolu par ajustement manuel dans l'éditeur Unity, tests sur différentes résolutions et vérification de cohérence avec le design général, aboutissant à un menu immersif et accessible.",
      description6:
        "Musique du Menu : \n" +
        "La musique du menu principal a été conçue comme une première plongée dans l’univers des rêves. Pour cette première composition, un Pad nommé « Final Twilight » a été utilisé afin de créer une ambiance aérienne et immersive. Le travail a d’abord commencé de manière expérimentale, avec des tests de notes sans véritable structure. Progressivement, une meilleure maîtrise de GarageBand a permis de retravailler la composition de manière plus organisée. Un second instrument a ensuite été ajouté pour enrichir la texture sonore, ce qui a donné naissance à une ambiance cohérente avec l’image du cerveau représentée dans le menu principal.",
      description7:
        "Musique du Premier Niveau : \n" +
        "Le premier niveau introduit le joueur dans le cœur du jeu, avec une ambiance dynamique dès les premières secondes. Pour traduire cette énergie, un batteur nommé « Deep Tech » a été utilisé comme base rythmique, puis renforcé par un kit de batterie électronique appelé « Deep Sub Bass ». L’objectif était de capter l’attention du joueur et de stimuler sa concentration immédiatement, en évitant une musique trop répétitive.",
      description8:
        "Musique du Deuxième Niveau : \n" +
        "Le deuxième niveau marque une montée en intensité. Le joueur, déjà familiarisé avec l’univers du jeu, entre dans une phase plus rythmée et exigeante. La bande sonore accompagne cette évolution grâce à l’utilisation du batteur « After Party », soutenu par deux kits électroniques : « Hard Knock », qui accentue le rythme avec des claquements de mains, et « Beat Machine », qui apporte une touche moderne et ludique. Le tempo a été volontairement accéléré à 160 BPM pour accentuer la sensation de vitesse et d’urgence propre à ce niveau.",
      description9:
        "Musique du Dernier Niveau : \n" +
        "Le dernier niveau propose un retour au calme après une aventure intense. La composition sonore a été pensée pour offrir un moment de détente et de réflexion au joueur. Un batteur doux, nommé « Slow Jam », a été utilisé pour poser une base rythmique tranquille. Par-dessus, le kit « Boutique 78 » a été ajouté pour enrichir l’ambiance. Le tempo a été ralenti à 75 BPM afin de créer une atmosphère relaxante et immersive, parfaite pour conclure l’expérience de jeu en douceur.",
      description10:
        "Design et animation de Milo : \n" +
        "Milo est le personnage principal du mode solo. Avant de l’animer, son apparence a été définie collectivement, en choisissant des éléments visuels correspondant à son identité d’explorateur. Le design validé, le travail d’animation a débuté à partir d’un croquis original. Chaque mouvement a été animé image par image en pixel art, grâce à l’application Procreate sur iPad. Les animations ont été exportées depuis Unity vers l’iPad, puis réimportées une fois les dessins terminés. Ce processus minutieux a permis de donner vie à Milo, avec des mouvements fluides et expressifs.",
      description11:
        "Design et animation d’Elena : \n" +
        "Elena est le deuxième personnage jouable, disponible en mode multijoueur. Son design a été pensé pour être visuellement distinct de celui de Milo, notamment au niveau des vêtements et des détails visuels. Les animations de base ont été reprises et adaptées au style propre d’Elena. Comme pour Milo, chaque image a été dessinée en pixel art avec Procreate, puis intégrée dans Unity. Ce travail a permis de proposer un second personnage jouable tout en conservant une cohérence graphique et technique dans le jeu.",
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
