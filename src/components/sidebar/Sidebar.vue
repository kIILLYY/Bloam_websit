<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import ArrowIcon from "@/assets/icons/arrow.svg";
import LogoIcon from "@/assets/icons/logo.png";
import Logo2Icon from "@/assets/icons/logo2.png";
import HomeIcon from "@/assets/icons/Home.svg";
import ProgrammationIcon from "@/assets/icons/Programmation.svg";
import GraphismeIcon from "@/assets/icons/Graphisme.svg";
import GameDesignIcon from "@/assets/icons/GameDesign.svg";
import LinkIcon from "@/assets/icons/Link.svg";

export default {
  name: "AppSidebar",
  data() {
    return {
      ArrowIcon,
      LogoIcon,
      Logo2Icon,
      HomeIcon,
      ProgrammationIcon,
      GraphismeIcon,
      GameDesignIcon,
      LinkIcon,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToProg() {
      this.$router.push("/Programmation");
    },
    goToGraph() {
      this.$router.push("/Graphisme");
    },
    goToGD() {
      this.$router.push("/GameDesign");
    },
    goToLink() {
      this.$router.push("/Link");
    },
  },
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div class="font-bold text-2xl">
          <img
            :src="LogoIcon"
            alt="BLOAM"
            style="width: 30px; height: 30px"
            @click="goToHome"
            class="logo"
          />
        </div>
      </span>
      <span v-else class="font-bold text-2xl mb-7 block ml-5 mt-3">
        <img
          :src="Logo2Icon"
          alt="BLOAM"
          style="width: 110px; height: 90px"
          @click="goToHome"
          class="logo"
        />
      </span>
    </h1>
    <span v-if="collapsed">
      <img
        :src="HomeIcon"
        alt="Home"
        style="width: 25px; height: 25px"
        class="logo2 icon mt-5 ml-0.5"
        @click="goToHome"
      />
      <img
        :src="ProgrammationIcon"
        alt="Programmation"
        style="width: 25px; height: 25px"
        class="logo2 icon mt-5 ml-0.5"
        @click="goToProg"
      />
      <img
        :src="GraphismeIcon"
        alt="Graphisme"
        style="width: 25px; height: 25px"
        class="logo2 icon mt-5 ml-0.5"
        @click="goToGraph"
      />
      <img
        :src="GameDesignIcon"
        alt="GameDesign"
        style="width: 25px; height: 25px"
        class="logo2 icon mt-5 ml-0.5"
        @click="goToGD"
      />
      <img
        :src="LinkIcon"
        alt="Link"
        style="width: 25px; height: 25px"
        class="logo2 icon mt-5 ml-0.5"
        @click="goToLink"
      />
      <SidebarLink to="/programmation">Programmation</SidebarLink>
      <SidebarLink to="/graphisme">Graphisme</SidebarLink>
      <SidebarLink to="/gamedesign">Game Design</SidebarLink>
      <SidebarLink to="/link">Link</SidebarLink>
    </span>
    <span v-else>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/programmation">Programmation</SidebarLink>
      <SidebarLink to="/graphisme">Graphisme</SidebarLink>
      <SidebarLink to="/gamedesign">Game Design</SidebarLink>
      <SidebarLink to="/link">Link</SidebarLink>
    </span>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <img :src="ArrowIcon" alt="Arrow" style="width: 30px; height: 30px" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #ffffff;
  --sidebar-item-hover: #eeece2;
  --sidebar-item-active: #eeece2;
}
</style>

<style scoped>
.sidebar {
  color: black;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.logo {
  cursor: pointer;
}

.logo2 {
  cursor: pointer;
  margin: 1.3em 0;
  border-radius: 0.25em;
  height: 1.5em;
}

.logo2:hover {
  backdrop-color: var(--sidebar-item-hover);
  background-color: var(--sidebar-item-hover);
}

.logo2.active {
  backdrop-color: var(--sidebar-item-active);
  background-color: var(--sidebar-item-active);
}
</style>
