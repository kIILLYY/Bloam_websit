<script>
import GitHubIcon from "@/assets/icons/GitHub.png";
import RapportIcon from "@/assets/icons/Rapport.png";
import ScenarioIcon from "@/assets/icons/Scenario.webp";
import GamedesignIcon from "@/assets/icons/GameDesign.png";

export default {
  name: "App",
  setup() {
    const message = "Hello Vue!";
    return {
      message,
    };
  },
  data() {
    return {
      GitHubIcon,
      RapportIcon,
      ScenarioIcon,
      GamedesignIcon,
      pdfUrl: "/documents/Rapport.pdf",
      pdfName: "Rapport.pdf",
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
          Link
        </h1>
        <p class="mt-4 text-lg md:text-xl text-black">
          Anthropic is an AI safety and research company. We build reliable,
          interpretable, and steerable AI systems.
        </p>
        <a href="#about-us">
          <button
            class="mt-6 px-6 py-2 bg-black text-white text-lg rounded-full"
          >
            All Link
          </button>
        </a>
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
            <a href="https://github.com/BenjaminP142/Final-Dream">
              <img
                alt="GitHub"
                class="rounded-lg mb-4"
                :src="GitHubIcon"
                style="width: 500px; height: 300px"
              />
            </a>
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Git Hub</h2>
        </div>
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <a :href="pdfUrl" :download="pdfName">
              <img
                alt="Rapport"
                class="rounded-lg mb-4"
                :src="RapportIcon"
                style="width: 500px; height: 300px"
              />
            </a>
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Rapports</h2>
        </div>
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <a
              href="https://docs.google.com/document/d/1DfoflMuUmVMQgiQ66Dki-RWxSBtyq0VO3jHOtcKTxfc/edit?tab=t.0"
            >
              <img
                alt="Scenario"
                class="rounded-lg mb-4"
                :src="ScenarioIcon"
                style="width: 500px; height: 300px"
              />
            </a>
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Scenario</h2>
        </div>
        <div
          class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div class="flex justify-center items-center w-full h-full">
            <a
              href="https://docs.google.com/document/d/1DfoflMuUmVMQgiQ66Dki-RWxSBtyq0VO3jHOtcKTxfc/edit?tab=t.0"
            >
              <img
                alt="GamedesignIcon"
                class="rounded-lg mb-4"
                :src="GamedesignIcon"
                style="width: 500px; height: 300px"
              />
            </a>
          </div>
          <h2 class="text-2xl font-bold mb-2 text-center">Game Design</h2>
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
