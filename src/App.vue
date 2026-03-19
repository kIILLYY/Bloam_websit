<script>
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/Footer.vue";
import {
  mobileMenuOpen,
  sidebarWidth,
  toggleMobileMenu,
} from "@/components/sidebar/state";

export default {
  components: { Footer, Sidebar },
  setup() {
    return { mobileMenuOpen, sidebarWidth, toggleMobileMenu };
  },
};
</script>
<template>
  <div class="app-shell" :style="{ '--sidebar-width': sidebarWidth }">
    <Sidebar />
    <header class="mobile-topbar">
      <button
        class="mobile-menu-button"
        type="button"
        :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
        aria-label="Ouvrir la navigation"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="mobile-brand">
        <span class="mobile-brand-title">Projet RUST</span>
        <span class="mobile-brand-subtitle">Traitement d'images</span>
      </div>
    </header>
    <main class="app-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #172033;
}

.app-shell {
  min-height: 100vh;
  background: radial-gradient(
      circle at top left,
      rgba(180, 197, 234, 0.35),
      transparent 30%
    ),
    linear-gradient(180deg, #f8f3e8 0%, #f3efe5 42%, #ece8dd 100%);
}

.app-content {
  margin-left: var(--sidebar-width);
  min-height: calc(100vh - 88px);
  transition: margin-left 0.25s ease;
}

.mobile-topbar {
  display: none;
}

@media (max-width: 1023px) {
  .app-content {
    margin-left: 0;
  }

  .mobile-topbar {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  }

  .mobile-menu-button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    width: 2.9rem;
    height: 2.9rem;
    padding: 0.7rem;
    border: 0;
    border-radius: 999px;
    background: #172033;
    cursor: pointer;
  }

  .mobile-menu-button span {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: #f8f3e8;
  }

  .mobile-brand {
    display: flex;
    flex-direction: column;
  }

  .mobile-brand-title {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .mobile-brand-subtitle {
    font-size: 0.78rem;
    color: rgba(23, 32, 51, 0.72);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
}
</style>
