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
              <h1 class="text-4xl font-bold mb-4">
                Implémentation du Mode Multijoueur en LAN
              </h1>
            </div>
            <div>
              <h2 style="text-decoration: underline">
                Architecture Réseau Choisie
              </h2>
              <p>
                Le projet a opté pour une architecture multijoueur exclusivement
                en réseau local (LAN), motivée par plusieurs avantages
                stratégiques. Cette approche garantit une latence réduite grâce
                à l'absence de serveurs distants, simplifie considérablement
                l'implémentation technique, offre une sécurité accrue par
                rapport aux connexions internet, et favorise une expérience
                sociale plus riche en encourageant les joueurs à se réunir
                physiquement. Le système supporte actuellement deux joueurs
                connectés sur le même réseau local, utilisant un modèle
                client-serveur simplifié où un joueur fait office d'hôte tandis
                que l'autre se connecte en tant que client.
              </p>
              <br />
              <h2 style="text-decoration: underline">Architecture Technique</h2>
              <p>
                L'implémentation repose sur une structure client-serveur claire
                : le joueur hôte gère l'état du jeu, la synchronisation des
                données et la coordination des actions, tandis que le client
                envoie ses actions et reçoit les mises à jour. Le système de
                synchronisation des données comprend trois mécanismes essentiels
                : un échange périodique d'états complets du serveur vers le
                client, une validation des actions client par le serveur, et une
                prédiction côté client pour minimiser la perception de latence.
              </p>
              <br />
              <h2 style="text-decoration: underline">Interface de Connexion</h2>
              <p>
                L'interface utilisateur développée privilégie la simplicité et
                l'intuitivité. L'écran de connexion, accessible depuis le menu
                principal, présente des options distinctes pour l'hôte
                (affichage de l'adresse IP locale) et le client (champ de saisie
                pour l'IP de l'hôte). Le processus de connexion suit une
                séquence logique : l'hôte lance une partie via "Play",
                communique son adresse IP, puis le client rejoint via "Join
                Party" en saisissant cette adresse. Une fois connectés, les deux
                joueurs accèdent simultanément à l'écran de jeu pour commencer
                la partie. Cette approche technique privilégie la transparence
                pour l'utilisateur, permettant aux joueurs de se concentrer sur
                l'expérience de jeu plutôt que sur les aspects techniques de la
                connexion réseau.
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
              <h1 class="text-4xl font-bold mb-4">
                Implémentation de l'Intelligence Artificielle
              </h1>
            </div>
            <div>
              <h2 style="text-decoration: underline">
                Vue d'ensemble de l'IA des ennemis
              </h2>
              <p>
                L'intelligence artificielle constitue un élément fondamental de
                l'expérience de jeu, déterminant directement le niveau de défi
                et d'immersion. Le système développé repose sur l'algorithme A*
                pour le pathfinding, reconnu comme l'une des méthodes les plus
                efficaces pour la recherche de chemin en environnement
                contraint. Les objectifs principaux visent à permettre une
                navigation intelligente dans des environnements complexes,
                adapter les comportements selon les actions des joueurs, créer
                une expérience stimulante sans prévisibilité excessive ni
                difficulté injuste, et maintenir des performances optimales même
                avec de nombreux ennemis simultanés. Le système se structure
                autour de deux modules principaux : le système de détection de
                cibles et l'algorithme de pathfinding A*.
              </p>
              <br />
              <h2 style="text-decoration: underline">
                L'algorithme A* et son implémentation
              </h2>
              <p>
                L'algorithme A* combine les avantages de l'algorithme de
                Dijkstra (garantie du chemin le plus court) et de la recherche
                "best-first" (accélération via heuristique). Cette synergie
                s'exprime par la formule centrale f(n) = g(n) + h(n), où f(n)
                représente le coût total estimé, g(n) le coût réel depuis le
                départ, et h(n) l'estimation heuristique vers la destination.
                L'implémentation technique procède par discrétisation de
                l'environnement en grille de cellules traversables ou non,
                initialisation des listes ouverte et fermée, puis exécution
                d'une boucle principale sélectionnant le nœud optimal, évaluant
                les adjacents et reconstituant le chemin final. La fonction
                heuristique utilise la distance de Manhattan, parfaitement
                adaptée aux déplacements sur grille. Plusieurs optimisations
                garantissent les performances : limitation de profondeur de
                recherche, mise en cache des chemins récents, et recalcul
                conditionnel selon les changements significatifs.
              </p>
              <br />
              <h2 style="text-decoration: underline">
                Système de détection et sélection de cibles
              </h2>
              <p>
                La détection des cibles s'appuie sur un système d'events Unity
                et une liste de joueurs mise à jour uniquement si nécessaire
                pour optimiser les performances. Le joueur n'étant pas présent
                par défaut dans la scène, un script associe spécifiquement
                chaque ennemi au joueur à poursuivre. En mode multijoueur, la
                logique de priorisation suit un critère unique : la proximité.
                L'ennemi cible systématiquement le joueur le plus proche,
                garantissant une cohérence comportementale logique. Cette
                fonction de détermination du joueur le plus proche s'exécute à
                chaque renouvellement du chemin de poursuite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 class="text-4xl font-bold mb-4">
                Avancées Ennemis et Attaques
              </h1>
            </div>
            <div>
              <h2 style="text-decoration: underline">Système d'Ennemis</h2>
              <p>
                L'équipe a sélectionné deux types d'ennemis principaux sur
                l'Unity Asset Store selon leur compatibilité artistique : une
                chauve-souris volante (ennemi aérien rapide mais fragile) et un
                gobelin terrestre (adversaire robuste pour le combat rapproché).
                L'intégration a nécessité l'import des modèles, l'ajustement des
                colliders pour des interactions physiques réalistes, la
                configuration des animations et le paramétrage des points
                d'ancrage pour les effets de combat. Cette phase s'est révélée
                particulièrement délicate pour adapter les modèles génériques
                aux spécificités du jeu. Le système d'animation repose sur des
                Animator Controllers personnalisés avec trois états principaux :
                attente (Idle), attaque (déclenché par proximité du joueur) et
                mort (animation finale). L'intelligence artificielle gère la
                détection du joueur, la poursuite intelligente avec
                contournement d'obstacles, et un système d'attaque avec distance
                et cooldown. Le système de santé modulaire encapsule
                l'initialisation des points de vie selon le type d'ennemi et une
                séquence de mort soignée incluant animation spécifique,
                désactivation des colliders et destruction différée de l'objet.
              </p>
              <br />
              <h2 style="text-decoration: underline">
                Intégration du Personnage et Système de Mouvements
              </h2>
              <p>
                L'intégration du personnage s'est déroulée méthodiquement :
                importation du sprite sheet, création des animations principales
                (Idle, course, saut, accroupissement) via l'Animator Controller,
                configuration des transitions fluides et synchronisation avec le
                script de contrôle. Le système de déplacement utilise des
                scripts C# et le composant Rigidbody 2D pour la gestion des
                forces. Il comprend la course (seul déplacement horizontal), le
                saut avec détection d'état (sol, air ascendant, chute) et
                l'accroupissement (avec un problème persistant permettant le
                déplacement accroupi). Les mouvements visent un contrôle précis
                et réactif grâce à l'ajustement fin des paramètres physiques
                (gravité, force de saut, accélération).
              </p>
              <br />
              <h2 style="text-decoration: underline">
                Système de Santé du Joueur
              </h2>
              <p>
                L'architecture s'articule autour de deux classes principales
                gérant la logique de santé et sa représentation visuelle. Le
                système inclut la gestion des points de vie, les fonctions de
                dégâts et soins avec effets visuels, et une séquence de mort
                complète avec réapparition automatique. L'interface utilisateur
                utilise un Slider UI avec background, fill area dynamique et
                effets visuels (changement de couleur selon le niveau de santé,
                transitions fluides). Cette interface permet une évaluation
                rapide de l'état de santé sans quitter l'action des yeux.
              </p>
              <br />
              <h2 style="text-decoration: underline">
                Environnement et Éléments Interactifs
              </h2>
              <p>
                Les zones de danger diversifient le gameplay avec des zones
                d'eau nocive infligeant des dégâts continus (5 points de vie par
                seconde) et des zones de lave mortelle causant une mort
                instantanée. Un système de mort par chute dans le vide permet le
                respawn tout en ajoutant une dimension stratégique aux
                déplacements.
              </p>
              <br />
              <h2 style="text-decoration: underline">Système d'Attaque</h2>
              <p>
                Le système d'animation enrichi comprend multiple états (Idle,
                déplacement, saut divisé en sous-états, attaques multiples,
                mort) avec transitions gérées par paramètres comme la vitesse et
                l'état au sol. Le système d'attaque dynamique sélectionne
                aléatoirement entre deux animations d'attaque tout en conservant
                la même mécanique. Il inclut activation par un bouton unique,
                détection d'ennemis dans la zone d'attaque, application de
                dégâts et système de cooldown anti-spam. Cette approche crée une
                expérience visuelle variée qui maintient l'intérêt et évite la
                monotonie des combats répétitifs.
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
