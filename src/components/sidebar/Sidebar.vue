<script>
import SidebarLink from "./SidebarLink";
import {
  closeMobileMenu,
  collapsed,
  mobileMenuOpen,
  sidebarWidth,
  toggleSidebar,
} from "./state";
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
  components: { SidebarLink },
  data() {
    return {
      ArrowIcon,
      LogoIcon,
      Logo2Icon,
      navItems: [
        { icon: HomeIcon, label: "Home", to: "/" },
        {
          icon: ProgrammationIcon,
          label: "Programmation",
          to: "/programmation",
        },
        { icon: GraphismeIcon, label: "Graphisme", to: "/graphisme" },
        { icon: GameDesignIcon, label: "Game Design", to: "/gamedesign" },
        { icon: LinkIcon, label: "Links", to: "/link" },
      ],
    };
  },
  setup() {
    return {
      closeMobileMenu,
      collapsed,
      mobileMenuOpen,
      sidebarWidth,
      toggleSidebar,
    };
  },
};
</script>

<template>
  <div
    v-if="mobileMenuOpen"
    class="sidebar-backdrop"
    @click="closeMobileMenu"
  ></div>
  <aside
    class="sidebar"
    :class="{ collapsed, open: mobileMenuOpen }"
    :style="{ '--sidebar-width': sidebarWidth }"
  >
    <div class="sidebar-header">
      <div v-if="collapsed" class="brand">
        <button class="brand-button" type="button" @click="$router.push('/')">
          <img :src="LogoIcon" alt="BLOAM" class="brand-logo-small" />
        </button>
      </div>
      <div v-else class="brand">
        <button class="brand-button" type="button" @click="$router.push('/')">
          <img :src="Logo2Icon" alt="BLOAM" class="brand-logo" />
        </button>
      </div>
    </div>

    <nav class="sidebar-nav" aria-label="Navigation principale">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="sidebar-icon-link"
        @click="closeMobileMenu"
      >
        <img :src="item.icon" :alt="item.label" class="sidebar-icon" />
      </router-link>

      <SidebarLink
        v-for="item in navItems"
        :key="`${item.to}-text`"
        :to="item.to"
      >
        {{ item.label }}
      </SidebarLink>
    </nav>

    <button
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      type="button"
      aria-label="Réduire ou agrandir la sidebar"
      @click="toggleSidebar"
    >
      <img :src="ArrowIcon" alt="Arrow" class="arrow-icon" />
    </button>
  </aside>
</template>

<style>
:root {
  --sidebar-bg-color: rgba(255, 255, 255, 0.88);
  --sidebar-item-hover: rgba(15, 23, 42, 0.06);
  --sidebar-item-active: rgba(209, 213, 219, 0.72);
}
</style>

<style scoped>
.sidebar {
  color: black;
  background-color: var(--sidebar-bg-color);
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  padding: 1rem 0.9rem;
  transition: width 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.sidebar-header {
  margin-bottom: 1.75rem;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-button {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.brand-logo {
  width: 124px;
  height: auto;
}

.brand-logo-small {
  width: 2.4rem;
  height: 2.4rem;
}

.sidebar-nav {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.sidebar-icon-link {
  display: none;
}

.sidebar.collapsed .sidebar-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  margin: 0.35rem 0;
  border-radius: 1rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.sidebar.collapsed .sidebar-icon-link:hover,
.sidebar.collapsed .sidebar-icon-link.router-link-active {
  background-color: var(--sidebar-item-hover);
  transform: translateY(-1px);
}

.sidebar.collapsed :deep(.link) {
  display: none;
}

.sidebar-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.collapse-icon {
  margin-top: auto;
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.06);
  transition: transform 0.2s linear, background-color 0.2s ease;
  cursor: pointer;
}

.collapse-icon:hover {
  background: rgba(15, 23, 42, 0.1);
}

.rotate-180 {
  transform: rotate(180deg);
}

.arrow-icon {
  width: 1.35rem;
  height: 1.35rem;
}

.sidebar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(2px);
  z-index: 30;
}

@media (max-width: 1023px) {
  .sidebar {
    transform: translateX(-100%);
    width: min(20rem, 84vw);
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .collapse-icon {
    display: none;
  }
}
</style>
